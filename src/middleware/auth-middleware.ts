import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export const verify = async (req: Request, res: Response, next: NextFunction) => {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json(new ApiError('No token provided', 401));
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = {};
        // @ts-ignore
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json(new ApiError('Unauthorized', 401));
    }
};