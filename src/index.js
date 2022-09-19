import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';
import { checkoutRouter } from './routes/checkout.routes.js';
import { itemsRouter } from './routes/items.routes.js';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            name: 'music-store-driven',
            version: '0.1.0'
        }
    });

});

app.use(authRouter);
app.use(checkoutRouter);
app.use(itemsRouter);

app.listen(process.env.PORT, () => {
    console.log("Ouvindo em " + process.env.PORT);
});
