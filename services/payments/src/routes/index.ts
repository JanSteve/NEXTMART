import { Router } from 'express';
import { PaymentController } from '../controllers/payment.controller';
import { WalletController } from '../controllers/wallet.controller';
import { authenticate } from '../middleware/auth';
const router = Router();

router.post('/payments/webhook', PaymentController.webhook);

router.use(authenticate);
router.post('/payments/create-order', PaymentController.createOrder);
router.post('/payments/verify', PaymentController.verify);
router.post('/payments/refund', PaymentController.refund);

router.get('/wallet/balance', WalletController.balance);
router.get('/wallet/transactions', WalletController.transactions);
router.post('/wallet/add', WalletController.add);

export default router;
