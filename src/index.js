import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';


const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'name of your app',
            version: '0.1.0'
        }
    });

});

app.use(authRouter);

app.listen(process.env.PORT, () => {
    console.log("Ouvindo em " + process.env.PORT);
});
