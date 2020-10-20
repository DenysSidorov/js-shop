import express from 'express';
import * as AuthController from '../controllers/auth';

const router = express.Router();

router.post('/signin', AuthController.singin); // Проверка/Ввойти
router.post('/signup', AuthController.singup); // Создание
router.post('/isadmin', AuthController.isadmin); // Создание
router.get('/ct', AuthController.checkTokenFromEmail); // Создание
router.post('/find-user-by-token', AuthController.findUserByToken); // Создание

export default router;
