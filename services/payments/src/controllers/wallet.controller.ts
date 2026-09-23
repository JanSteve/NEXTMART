import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class WalletController {
  static async balance(req: Request, res: Response, next: NextFunction) {
    try {
      const wallet = await prisma.wallet.upsert({ where: { userId: (req as any).user.id }, update: {}, create: { userId: (req as any).user.id } });
      res.json(successResponse({ balance: wallet.balance }));
    } catch (e) { next(e); }
  }
  static async transactions(req: Request, res: Response, next: NextFunction) {
    try {
      const wallet = await prisma.wallet.findUnique({ where: { userId: (req as any).user.id }, include: { transactions: true } });
      res.json(successResponse(wallet?.transactions || []));
    } catch (e) { next(e); }
  }
  static async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { amount } = req.body;
      const wallet = await prisma.wallet.upsert({ where: { userId: (req as any).user.id }, update: { balance: { increment: amount } }, create: { userId: (req as any).user.id, balance: amount } });
      await prisma.walletTransaction.create({ data: { walletId: wallet.id, amount, type: 'CREDIT', description: 'Added money' } });
      res.json(successResponse({ balance: wallet.balance }));
    } catch (e) { next(e); }
  }
}
