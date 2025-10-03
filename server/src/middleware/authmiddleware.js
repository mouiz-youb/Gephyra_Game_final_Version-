import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Get token from headers
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).send({ message: "Access denied. No token provided." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request
    req.user = { id: decoded.id, email: decoded.email };

    next(); // Continue
  } catch (error) {
    return res.status(403).send({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
