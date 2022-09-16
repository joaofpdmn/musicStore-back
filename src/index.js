import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';


const app = express();
app.use(cors());
app.use(express.json());
app.get("/");

app.use(authRouter);

app.listen(process.env.PORT, () => {
    console.log("Ouvindo em " + process.env.PORT);
});
