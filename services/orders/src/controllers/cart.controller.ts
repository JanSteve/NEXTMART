import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class CartController {
  static async getCart(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await prisma.cartItem.findMany({ where: { userId: (req as any).user.id } });
      res.json(successResponse(items));
    } catch (e) { next(e); }
  }
  static async add(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await prisma.cartItem.create({ data: { ...req.body, userId: (req as any).user.id } });
      res.json(successResponse(item));
    } catch (e) { next(e); }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await prisma.cartItem.update({ where: { id: req.params.itemId }, data: { quantity: req.body.quantity } });
      res.json(successResponse(item));
    } catch (e) { next(e); }
  }
  static async remove(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.cartItem.delete({ where: { id: req.params.itemId } });
      res.json(successResponse({ message: 'Removed' }));
    } catch (e) { next(e); }
  }
  static async saveForLater(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await prisma.cartItem.findUnique({ where: { id: req.params.itemId } });
      if (item) {
        await prisma.savedItem.create({ data: { userId: item.userId, productId: item.productId, variantId: item.variantId } });
        await prisma.cartItem.delete({ where: { id: item.id } });
      }
      res.json(successResponse({ message: 'Saved for later' }));
    } catch (e) { next(e); }
  }
  static async getSaved(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await prisma.savedItem.findMany({ where: { userId: (req as any).user.id } });
      res.json(successResponse(items));
    } catch (e) { next(e); }
  }
  static async applyCoupon(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ message: 'Coupon applied' }));
  }
  static async removeCoupon(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ message: 'Coupon removed' }));
  }
}
