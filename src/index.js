import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

app.listen(process.env.PORT, () => {
    console.log("Ouvindo em " + process.env.PORT);
});
