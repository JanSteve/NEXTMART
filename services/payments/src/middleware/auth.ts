import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from './error';
export const authenticate = (req: Request, res: Response, next: NextFunction) => { const token = req.headers.authorization?.split(' ')[1]; if (!token) return next(new AppError(401, 'Unauthorized')); try { const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret'); (req as any).user = decoded; next(); } catch { next(new AppError(401, 'Invalid token')); } };
export const authorize = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => { const user = (req as any).user; if (!user || !roles.includes(user.role)) return next(new AppError(403, 'Forbidden')); next(); };
