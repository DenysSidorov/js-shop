import express from 'express';
import * as GoodController from '../controllers/good';

const router = express.Router();

router.get('/', GoodController.getAll);
router.get('/tags', GoodController.getUniqCategory);
router.get('/categories-with-top-products', GoodController.getCategoriesWithTopProducts);
router.get('/popular', GoodController.getPopular);
router.get('/:id', GoodController.getById);
router.post('/:id/similar', GoodController.getSimilar);
router.post('/', GoodController.create);

export default router;
