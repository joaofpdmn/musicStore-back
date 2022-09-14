import bcrypt from 'bcrypt';
import db from '../database/db.js'

async function signUpAccount(req, res) {
    const { name, email, password, repeatPassword, cardNumber } = req.body;
    try {
        const emailCheck = await db.collection('users').findOne({ email: email });
        if (emailCheck) { return res.status(409).send('Já existe uma conta com esse email!') };
        if (password !== repeatPassword){ return res.status(422).send('Repetição de password falhou!')};

        const passwordHash = bcrypt.hashSync(password, 10);
    } catch (error) {

    }

}