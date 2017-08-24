import express from 'express';

import * as OrderController from '../controllers/order';

const router = express.Router();

router.post('/', OrderController.create);

// router.get('/', GoodController.getAll);
// router.get('/tags', GoodController.getUniqCategory);
// router.get('/popular', GoodController.getPopular);
// router.get('/:id', GoodController.getById);
// router.post('/:id/similar', GoodController.getSimilar);
// router.post('/', GoodController.create);

// router.post('/pages', PageController.getAll);
// router.get('/pages/:login', PageController.getPagesByUserLogin);
// router.delete('/pages/:id', PageController.deletePage);

export default router;