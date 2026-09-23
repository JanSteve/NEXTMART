import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class AdminVendorController {
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const vendors = await prisma.vendor.findMany();
      res.json(successResponse(vendors));
    } catch (e) { next(e); }
  }
  static async approve(req: Request, res: Response, next: NextFunction) {
    try {
      const vendor = await prisma.vendor.update({ where: { id: req.params.id }, data: { status: 'APPROVED' } });
      res.json(successResponse(vendor));
    } catch (e) { next(e); }
  }
}
