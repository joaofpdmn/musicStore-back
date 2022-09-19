import express from 'express';
import { showItems } from '../controllers/items.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const itemsRouter = express.Router();

itemsRouter.use(userAuth);
itemsRouter.get('/list', showItems);

export { itemsRouter }