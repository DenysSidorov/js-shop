import express from 'express';
import * as AuthController from '../controllers/auth';

const router = express.Router();

router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);
router.post('/isadmin', AuthController.isAdmin);
router.get('/ct', AuthController.checkTokenFromEmail);
// router.post('/find-user-by-token', AuthController.findUserByToken);

export default router;
