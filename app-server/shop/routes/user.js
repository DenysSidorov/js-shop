import express from 'express';
import * as UserController from '../controllers/user';
import checkToken from './../../middlewares/checkToken'; // Проверка наличия токена
const router = express.Router();
router.get('/current', checkToken, UserController.getCurrentUser)
router.get('/test', checkToken, UserController.getCurrentUser)

export default router;