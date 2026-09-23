import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class VendorController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const vendor = await prisma.vendor.create({ data: { ...req.body, userId: (req as any).user.id } });
      res.json(successResponse(vendor));
    } catch (e) { next(e); }
  }
  static async dashboard(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ sales: 0, orders: 0 }));
  }
  static async products(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse([])); // Would typically call product service
  }
  static async orders(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse([]));
  }
  static async earnings(req: Request, res: Response, next: NextFunction) {
    try {
      const vendor = await prisma.vendor.findUnique({ where: { userId: (req as any).user.id }, include: { commissions: true } });
      res.json(successResponse(vendor?.commissions || []));
    } catch (e) { next(e); }
  }
  static async payouts(req: Request, res: Response, next: NextFunction) {
    try {
      const vendor = await prisma.vendor.findUnique({ where: { userId: (req as any).user.id }, include: { payouts: true } });
      res.json(successResponse(vendor?.payouts || []));
    } catch (e) { next(e); }
  }
  static async profile(req: Request, res: Response, next: NextFunction) {
    try {
      const vendor = await prisma.vendor.update({ where: { userId: (req as any).user.id }, data: req.body });
      res.json(successResponse(vendor));
    } catch (e) { next(e); }
  }
}
