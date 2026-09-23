import { Router } from 'express';
import { VendorController } from '../controllers/vendor.controller';
import { AdminVendorController } from '../controllers/admin.controller';
import { authenticate, authorize } from '../middleware/auth';
const router = Router();

router.use(authenticate);

// Vendors
router.post('/vendors/register', VendorController.register);
router.get('/vendors/dashboard', authorize(['VENDOR']), VendorController.dashboard);
router.get('/vendors/products', authorize(['VENDOR']), VendorController.products);
router.get('/vendors/orders', authorize(['VENDOR']), VendorController.orders);
router.get('/vendors/earnings', authorize(['VENDOR']), VendorController.earnings);
router.get('/vendors/payouts', authorize(['VENDOR']), VendorController.payouts);
router.put('/vendors/profile', authorize(['VENDOR']), VendorController.profile);

// Admin
router.get('/admin/vendors', authorize(['ADMIN', 'SUPER_ADMIN']), AdminVendorController.list);
router.put('/admin/vendors/:id/approve', authorize(['ADMIN', 'SUPER_ADMIN']), AdminVendorController.approve);

export default router;
