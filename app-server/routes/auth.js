import express from 'express';
import * as AuthController from '../controllers/auth';

const router = express.Router();

router.post('/signup', AuthController.singup); // Создание
router.post('/signin', AuthController.singin); // Проверка/Ввойти


export default router;