import express from 'express';
import { loginAccount, signUpAccount } from '../controllers/auth.controller.js';
import { list,listSearch } from '../controllers/list.controller.js';

const authRouter = express.Router();

authRouter.post('/signup', signUpAccount);
authRouter.post('/login', loginAccount);
authRouter.get('/list',list);
authRouter.get('/list/:search',listSearch);

export { authRouter };