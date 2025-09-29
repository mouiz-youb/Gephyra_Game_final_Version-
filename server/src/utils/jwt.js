// utils/jwt.js

import jwt from 'jsonwebtoken';

// IMPORTANT: Use environment variables for the secret key in production!
const JWT_SECRET = process.env.JWT_SECRET || 'ss73qYnQpzscLMbIp6JHmH3IzIwfWIAU'; 
const JWT_EXPIRY = '1h';


export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};


export const verifyToken = (token) => {
  try {
    // The decoded token will be the payload object { userId: number }
    return jwt.verify(token, JWT_SECRET); 
  } catch (error) {
    // Token is invalid (e.g., signature mismatch) or expired
    return null; 
  }
};