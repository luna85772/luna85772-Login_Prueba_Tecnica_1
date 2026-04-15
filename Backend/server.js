import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import productsRouter from './src/routers/products.js';
import usersRouter from './src/routers/users.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();
app.use(cors({origin: 'http://localhost:4200' }));
app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

