// src/pages/QRCodeForPrinting.tsx
import  { useEffect } from "react";
import { QRCode } from "react-qrcode"; 
import {useGame}  from "../Hook/useGame";

const QRCodeForPrinting: React.FC = () => {
  const { qrCodes,  fetchQRcode } = useGame();

  useEffect(() => {
    fetchQRcode();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {qrCodes.map((qrcode) => (
        <div key={qrcode.id} className="p-2 border rounded">
          <QRCode value={qrcode.code} />
          <p className="text-center">Points: {qrcode.currentValue}</p>
        </div>
      ))}
    </div>
  );
};

export default QRCodeForPrinting;
