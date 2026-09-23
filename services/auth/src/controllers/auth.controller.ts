import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { AppError } from '../middleware/error';

const prisma = new PrismaClient();
const generateToken = (id: string, role: string) => jwt.sign({ id, role }, process.env.JWT_SECRET || 'secret', { expiresIn: '15m' });

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, firstName, lastName } = z.object({ email: z.string().email(), password: z.string().min(6), firstName: z.string().optional(), lastName: z.string().optional() }).parse(req.body);
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) throw new AppError(400, 'User exists');
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({ data: { email, password: hashedPassword, firstName, lastName } });
      res.json(successResponse({ user: { id: user.id, email: user.email } }));
    } catch (e) { next(e); }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = z.object({ email: z.string().email(), password: z.string() }).parse(req.body);
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) throw new AppError(401, 'Invalid credentials');
      if (user.lockedUntil && user.lockedUntil > new Date()) throw new AppError(403, 'Account locked');
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        await prisma.user.update({ where: { id: user.id }, data: { failedAttempts: { increment: 1 } } });
        if (user.failedAttempts + 1 >= 5) await prisma.user.update({ where: { id: user.id }, data: { lockedUntil: new Date(Date.now() + 15*60*1000) } });
        throw new AppError(401, 'Invalid credentials');
      }
      await prisma.user.update({ where: { id: user.id }, data: { failedAttempts: 0, lockedUntil: null } });
      const token = generateToken(user.id, user.role);
      const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });
      await prisma.refreshToken.create({ data: { token: refreshToken, userId: user.id, expiresAt: new Date(Date.now() + 30*24*60*60*1000) } });
      res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 30*24*60*60*1000 });
      res.json(successResponse({ token }));
    } catch (e) { next(e); }
  }
  static async googleLogin(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ token: 'google_dummy_token' }));
  }
  static async sendOtp(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ message: 'OTP sent via SMS' }));
  }
  static async verifyOtp(req: Request, res: Response, next: NextFunction) {
    res.json(successResponse({ token: 'otp_dummy_token' }));
  }
  static async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const rf = req.cookies?.refreshToken;
      if (!rf) throw new AppError(401, 'No refresh token');
      const record = await prisma.refreshToken.findUnique({ where: { token: rf }, include: { user: true } });
      if (!record || record.expiresAt < new Date()) throw new AppError(401, 'Invalid refresh token');
      res.json(successResponse({ token: generateToken(record.userId, record.user.role) }));
    } catch (e) { next(e); }
  }
  static async me(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await prisma.user.findUnique({ where: { id: (req as any).user.id }, select: { id: true, email: true, firstName: true, lastName: true, role: true } });
      res.json(successResponse({ user }));
    } catch (e) { next(e); }
  }
  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName } = z.object({ firstName: z.string().optional(), lastName: z.string().optional() }).parse(req.body);
      const user = await prisma.user.update({ where: { id: (req as any).user.id }, data: { firstName, lastName } });
      res.json(successResponse({ user }));
    } catch (e) { next(e); }
  }
  static async getAddresses(req: Request, res: Response, next: NextFunction) {
    try {
      const addresses = await prisma.address.findMany({ where: { userId: (req as any).user.id } });
      res.json(successResponse({ addresses }));
    } catch (e) { next(e); }
  }
  static async addAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = z.object({ street: z.string(), city: z.string(), state: z.string(), country: z.string(), zipCode: z.string() });
      const address = await prisma.address.create({ data: { ...schema.parse(req.body), userId: (req as any).user.id } });
      res.json(successResponse({ address }));
    } catch (e) { next(e); }
  }
  static async updateAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const address = await prisma.address.update({ where: { id: req.params.id }, data: req.body });
      res.json(successResponse({ address }));
    } catch (e) { next(e); }
  }
  static async deleteAddress(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.address.delete({ where: { id: req.params.id } });
      res.json(successResponse({ message: 'Deleted' }));
    } catch (e) { next(e); }
  }
}
