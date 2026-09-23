import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { authenticate, authorize } from '../middleware/auth';
const router = Router();

router.get('/', ProductController.list);
router.get('/:id', ProductController.getById);
router.get('/slug/:slug', ProductController.getBySlug);
router.post('/', authenticate, authorize(['VENDOR', 'ADMIN']), ProductController.create);
router.put('/:id', authenticate, authorize(['VENDOR', 'ADMIN']), ProductController.update);
router.delete('/:id', authenticate, authorize(['VENDOR', 'ADMIN']), ProductController.delete);
router.put('/:id/inventory', authenticate, authorize(['VENDOR', 'ADMIN']), ProductController.updateInventory);

router.get('/cats/all', ProductController.getCategories);
router.get('/cats/:slug/products', ProductController.getProductsByCategory);

export default router;
