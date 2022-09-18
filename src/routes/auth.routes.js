import express from 'express';
import { loginAccount, signUpAccount } from '../controllers/auth.controller.js';
<<<<<<< HEAD
import { list,listSearch } from '../controllers/list.controller.js';
=======
import { list, listSearch } from '../controllers/list.controller.js';
>>>>>>> main

const authRouter = express.Router();

authRouter.post('/signup', signUpAccount);
authRouter.post('/login', loginAccount);
authRouter.get('/list',list);
<<<<<<< HEAD
authRouter.get('/list/:search',listSearch);
=======
authRouter.get("/list/:search",listSearch);
>>>>>>> main

export { authRouter };