import { Router } from 'express';
import { DeliveryController } from '../controllers/delivery.controller';
import { authenticate } from '../middleware/auth';
const router = Router();

router.get('/serviceability', DeliveryController.checkServiceability);
router.post('/ship', authenticate, DeliveryController.ship);
router.get('/track/:awb', DeliveryController.track);
router.post('/webhook', DeliveryController.webhook);

export default router;
