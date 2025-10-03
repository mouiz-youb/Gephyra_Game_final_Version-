import prisma from "../utils/db.js";

const POINT_RANGE = [-30, -20, -10, -5, 0, 5, 10, 20, 30];
const getRandomPoint = () => {
  const index = Math.floor(Math.random() * POINT_RANGE.length);
  return POINT_RANGE[index];
};

const scanQRCode = async (req, res) => {
  const { userId, codeId } = req.body;

  if (!userId || !codeId) {
    return res.status(400).json({ message: "User ID and QR code ID required" });
  }

  try {
    // ✅ Check scan count
    const scanCount = await prisma.scan.count({ where: { userId } });
    if (scanCount >= 10) {
      return res.status(403).json({ message: "User has already scanned 10 QR codes" });
    }

    // ✅ Prevent duplicate scans
    const alreadyScanned = await prisma.scan.findUnique({
      where: {
        userId_codeId: { userId, codeId }, // requires a unique composite index in your Prisma schema
      },
    });
    if (alreadyScanned) {
      return res.status(403).json({ message: "User already scanned this QR code" });
    }

    // ✅ Fetch QR code
    const qrcode = await prisma.qrcode.findUnique({ where: { id: codeId } });
    if (!qrcode) {
      return res.status(404).json({ message: "QR code not found" });
    }

    const pointsGained = qrcode.currentValue;

    // ✅ Transaction: create scan + update user + update qrcode
    const [scan, updatedUser, updatedQRCode] = await prisma.$transaction([
      prisma.scan.create({
        data: {
          userId,
          codeId,
          pointsGained,
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: {
          points: { increment: pointsGained },
        },
      }),
      prisma.qrcode.update({
        where: { id: codeId },
        data: {
          currentValue: getRandomPoint(),
        },
      }),
    ]);

    res.status(200).json({
      message: "Scan successful",
      pointsGained,
      totalPoints: updatedUser.points,
      updatedQRCode,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error scanning QR code", error: error.message });
  }
};

export default scanQRCode;
