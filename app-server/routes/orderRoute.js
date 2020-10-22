import express from 'express';
import adminCheck from '../middlewares/adminCheckToken';
import * as OrderController from '../controllers/order';

const router = express.Router();

router.post('/', OrderController.create);
router.post('/land', OrderController.createFromLand);
router.get('/get-types', adminCheck, OrderController.getTypes);
router.get('/', adminCheck, OrderController.getAll);
router.post('/change-type', adminCheck, OrderController.changeType);

export default router;
