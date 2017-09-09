import express from 'express';
import * as AuthController from '../controllers/auth';

const router = express.Router();

router.post('/signin', AuthController.singin); // Проверка/Ввойти
router.post('/signup', AuthController.singup); // Создание




export default router;