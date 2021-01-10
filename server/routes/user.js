import express from 'express';
import * as UserController from '../controllers/user';
import checkToken from '../middlewares/checkToken';

const router = express.Router();
router.get('/current', checkToken, UserController.getCurrentUser);
router.patch('/update', checkToken, UserController.updateCurrentUser);

export default router;
