import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class DeliveryController {
  static async checkServiceability(req: Request, res: Response, next: NextFunction) {
    try {
      const { pincode } = req.query;
      res.json(successResponse({ serviceable: true, estimatedDays: 3 }));
    } catch (e) { next(e); }
  }
  static async ship(req: Request, res: Response, next: NextFunction) {
    try {
      const { orderId, pincode } = req.body;
      const awb = 'AWB' + Date.now();
      const shipment = await prisma.shipment.create({ data: { orderId, awb, pincode, courierName: 'Delhivery', trackingUrl: 'http://track.com/' + awb } });
      res.json(successResponse(shipment));
    } catch (e) { next(e); }
  }
  static async track(req: Request, res: Response, next: NextFunction) {
    try {
      const shipment = await prisma.shipment.findUnique({ where: { awb: req.params.awb }, include: { events: true } });
      res.json(successResponse(shipment));
    } catch (e) { next(e); }
  }
  static async webhook(req: Request, res: Response, next: NextFunction) {
    try {
      const { awb, status, location, timestamp } = req.body;
      const shipment = await prisma.shipment.findUnique({ where: { awb } });
      if (shipment) {
        await prisma.trackingEvent.create({ data: { shipmentId: shipment.id, status, location, timestamp: new Date(timestamp) } });
        await prisma.shipment.update({ where: { id: shipment.id }, data: { status } });
      }
      res.json(successResponse({ received: true }));
    } catch (e) { next(e); }
  }
}
