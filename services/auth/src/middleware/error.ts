import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { errorResponse } from '../utils/response';
export class AppError extends Error { constructor(public statusCode: number, message: string) { super(message); this.name = 'AppError'; } }
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => { logger.error(err); if (err instanceof AppError) return res.status(err.statusCode).json(errorResponse(err.message)); return res.status(500).json(errorResponse('Internal Server Error')); };
