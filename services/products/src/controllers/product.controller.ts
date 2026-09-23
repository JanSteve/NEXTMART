import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { AppError } from '../middleware/error';

const prisma = new PrismaClient();

export class ProductController {
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;
      const products = await prisma.product.findMany({ where: { isDeleted: false }, skip, take: limit, include: { images: true, category: true } });
      const total = await prisma.product.count({ where: { isDeleted: false } });
      res.json(successResponse(products, { page, limit, total }));
    } catch (e) { next(e); }
  }
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await prisma.product.findUnique({ where: { id: req.params.id }, include: { variants: true, images: true, category: true } });
      if (!product || product.isDeleted) throw new AppError(404, 'Not found');
      res.json(successResponse(product));
    } catch (e) { next(e); }
  }
  static async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await prisma.product.findUnique({ where: { slug: req.params.slug }, include: { variants: true, images: true, category: true } });
      if (!product || product.isDeleted) throw new AppError(404, 'Not found');
      res.json(successResponse(product));
    } catch (e) { next(e); }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = z.object({ name: z.string(), slug: z.string(), price: z.number(), categoryId: z.string() });
      const data = schema.parse(req.body);
      const product = await prisma.product.create({ data: { ...data, vendorId: (req as any).user.id } });
      res.json(successResponse(product));
    } catch (e) { next(e); }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await prisma.product.update({ where: { id: req.params.id }, data: req.body });
      res.json(successResponse(product));
    } catch (e) { next(e); }
  }
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.product.update({ where: { id: req.params.id }, data: { isDeleted: true } });
      res.json(successResponse({ message: 'Deleted' }));
    } catch (e) { next(e); }
  }
  static async updateInventory(req: Request, res: Response, next: NextFunction) {
    try {
      const { variantId, stock } = req.body;
      const variant = await prisma.productVariant.update({ where: { id: variantId }, data: { stock } });
      res.json(successResponse(variant));
    } catch (e) { next(e); }
  }
  static async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const cats = await prisma.category.findMany({ include: { children: true } });
      res.json(successResponse(cats));
    } catch (e) { next(e); }
  }
  static async getProductsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const cat = await prisma.category.findUnique({ where: { slug: req.params.slug } });
      if (!cat) throw new AppError(404, 'Category not found');
      const products = await prisma.product.findMany({ where: { categoryId: cat.id, isDeleted: false } });
      res.json(successResponse(products));
    } catch (e) { next(e); }
  }
}
