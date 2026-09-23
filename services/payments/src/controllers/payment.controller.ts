import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class PaymentController {
  static async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { orderId, amount } = req.body;
      const payment = await prisma.payment.create({ data: { orderId, amount, razorpayOrderId: 'rzp_order_' + Date.now() } });
      res.json(successResponse(payment));
    } catch (e) { next(e); }
  }
  static async verify(req: Request, res: Response, next: NextFunction) {
    try {
      const { paymentId, razorpayPaymentId, razorpaySignature } = req.body;
      const payment = await prisma.payment.update({ where: { id: paymentId }, data: { status: 'SUCCESS', razorpayPaymentId, razorpaySignature } });
      res.json(successResponse(payment));
    } catch (e) { next(e); }
  }
  static async webhook(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ received: true }));
  }
  static async refund(req: Request, res: Response, next: NextFunction) {
    try {
      const { paymentId, amount } = req.body;
      const refund = await prisma.refund.create({ data: { paymentId, amount } });
      res.json(successResponse(refund));
    } catch (e) { next(e); }
  }
}
