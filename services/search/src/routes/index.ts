import { Router } from 'express';
import { SearchController } from '../controllers/search.controller';
const router = Router();
router.get('/', SearchController.search);
router.get('/suggest', SearchController.suggest);
router.post('/index', SearchController.index);
export default router;
