import bcrypt from 'bcrypt';
import Joi from 'joi';
import db from '../database/db.js';
import { v4 as uuid } from 'uuid';

async function checkoutConfirm(req, res){
    const { name, ConfirmedCardNumber, cardName, expirationDate, securityCode } = req.body;
    const user = res.locals.user;
}


export {
    checkoutConfirm,
    
}