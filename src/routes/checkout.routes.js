import express from 'express';
import { checkoutConfirm } from '../controllers/checkout.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const checkoutRouter = express.Router();
checkoutRouter.use(userAuth);

checkoutRouter.post('/checkout', checkoutConfirm);

export { checkoutRouter };