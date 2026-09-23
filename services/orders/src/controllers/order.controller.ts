import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class OrderController {
  static async checkout(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;
      const cartItems = await prisma.cartItem.findMany({ where: { userId } });
      const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const order = await prisma.order.create({
        data: {
          userId,
          totalAmount,
          items: { create: cartItems.map(i => ({ productId: i.productId, variantId: i.variantId, quantity: i.quantity, price: i.price })) }
        }
      });
      await prisma.cartItem.deleteMany({ where: { userId } });
      res.json(successResponse(order));
    } catch (e) { next(e); }
  }
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await prisma.order.findMany({ where: { userId: (req as any).user.id } });
      res.json(successResponse(orders));
    } catch (e) { next(e); }
  }
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await prisma.order.findUnique({ where: { id: req.params.id }, include: { items: true, shipment: true } });
      res.json(successResponse(order));
    } catch (e) { next(e); }
  }
  static async cancel(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await prisma.order.update({ where: { id: req.params.id }, data: { status: 'CANCELLED' } });
      res.json(successResponse(order));
    } catch (e) { next(e); }
  }
  static async returnOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await prisma.order.update({ where: { id: req.params.id }, data: { status: 'RETURN_REQUESTED' } });
      res.json(successResponse(order));
    } catch (e) { next(e); }
  }
  static async invoice(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ url: 'http://example.com/invoice.pdf' }));
  }
}
