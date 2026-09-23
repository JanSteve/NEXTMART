import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';

export class SearchController {
  static async search(req: Request, res: Response, next: NextFunction) {
    try {
      const { q, filters } = req.query;
      res.json(successResponse({ results: [], query: q }));
    } catch (e) { next(e); }
  }
  static async suggest(req: Request, res: Response, next: NextFunction) {
    try {
      const { q } = req.query;
      res.json(successResponse({ suggestions: [] }));
    } catch (e) { next(e); }
  }
  static async index(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ message: 'Indexed successfully' }));
  }
}
