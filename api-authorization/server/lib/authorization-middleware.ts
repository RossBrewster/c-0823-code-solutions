/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  /* your code here */
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader) throw new ClientError(401, 'Authentication required');
    const token = authHeader.split('Bearer ')[1];
    if (!token) throw new ClientError(401, 'Authentication required');
    if (process.env.TOKEN_SECRET === undefined)
      throw new Error('Token secret is undefined');
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = payload as Request['user'];
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new ClientError(401, 'Invalid token'));
    } else {
      next(error);
    }
  }
}

/*
 * Get the 'Authorization' header from the request.
 * Parse the token from the header; e.g., auth.split('Bearer ')[1]
 * If no header or no token is provided,
 *   throw a 401 error with the message 'authentication required'
 * Use jwt.verify() to verify the authenticity of the token and extract its payload.
 * Assign the extracted payload to the user property of the req object.
 * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
