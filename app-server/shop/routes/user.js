import express from 'express';
import * as UserController from '../controllers/user';
import checkToken from '../../middlewares/checkToken';

const router = express.Router();
router.get('/current', checkToken, UserController.getCurrentUser);

export default router;
