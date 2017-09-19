import express from 'express';
import checkToken from '../../middlewares/checkToken'; // Проверка наличия токена
import adminCheck from '../../middlewares/adminCheckToken'; // Проверка наличия токена
import * as OrderController from '../controllers/order';

const router = express.Router();

router.post('/', OrderController.create);

router.get('/', adminCheck, OrderController.getAll);
// router.get('/tags', GoodController.getUniqCategory);
// router.get('/popular', GoodController.getPopular);
// router.get('/:id', GoodController.getById);
// router.post('/:id/similar', GoodController.getSimilar);
// router.post('/', GoodController.create);

// router.post('/pages', PageController.getAll);
// router.get('/pages/:login', PageController.getPagesByUserLogin);
// router.delete('/pages/:id', PageController.deletePage);

export default router;