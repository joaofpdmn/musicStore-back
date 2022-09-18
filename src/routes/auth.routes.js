import express from 'express';
import { loginAccount, signUpAccount } from '../controllers/auth.controller.js';
import { cartOrder } from '../controllers/cart.controller.js'

const authRouter = express.Router();

authRouter.post('/signup', signUpAccount);
authRouter.post('/login', loginAccount);
authRouter.post('/cart', cartOrder);
export { authRouter };