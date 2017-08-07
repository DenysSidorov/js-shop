import express from 'express';

import * as GoodController from '../controllers/good';

const router = express.Router();

router.get('/', GoodController.getAll);
router.post('/', GoodController.create);


// router.post('/pages', PageController.getAll);
// router.get('/pages/:login', PageController.getPagesByUserLogin);
// router.delete('/pages/:id', PageController.deletePage);

export default router;