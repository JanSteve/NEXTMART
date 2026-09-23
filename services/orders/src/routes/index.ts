import { Router } from 'express';
import { OrderController } from '../controllers/order.controller';
import { CartController } from '../controllers/cart.controller';
import { authenticate } from '../middleware/auth';
const router = Router();

router.use(authenticate);

// Cart
router.get('/cart', CartController.getCart);
router.post('/cart/add', CartController.add);
router.put('/cart/:itemId', CartController.update);
router.delete('/cart/:itemId', CartController.remove);
router.post('/cart/save-for-later/:itemId', CartController.saveForLater);
router.get('/cart/saved', CartController.getSaved);
router.post('/cart/coupon', CartController.applyCoupon);
router.delete('/cart/coupon', CartController.removeCoupon);

// Orders
router.post('/checkout', OrderController.checkout);
router.get('/orders', OrderController.list);
router.get('/orders/:id', OrderController.getById);
router.post('/orders/:id/cancel', OrderController.cancel);
router.post('/orders/:id/return', OrderController.returnOrder);
router.get('/orders/:id/invoice', OrderController.invoice);

export default router;
