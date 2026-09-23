import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { errorResponse } from '../utils/response';
export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => { try { schema.parse({ body: req.body, query: req.query, params: req.params }); next(); } catch (error) { if (error instanceof ZodError) return res.status(400).json(errorResponse(error.errors.map(e => e.message).join(', '))); next(error); } };
