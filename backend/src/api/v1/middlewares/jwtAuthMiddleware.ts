import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const jwtAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const secretKey: string | undefined = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).send("Server Error");
  }

  // Get the token from the request header
  const token: string | undefined = req.header('Authorization')?.replace('Bearer ', '');
  console.log({token})
  // Check if the token is present
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }

  try {
    // Decode the token
    const decoded: any = jwt.verify(token, secretKey);

    // Check if the decoded object has a userId property
    if (decoded && decoded.userId) {
      // Attach user data to the request object
      req.body.userId = decoded.userId;
      next();
    } else {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};
