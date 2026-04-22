import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import productsRouter from './src/routers/products.js';
import usersRouter from './src/routers/users.js';
import employeeRoutes from './src/routers/Empleados.js';
import departmentRoutes from './src/routers/Departamentos.js';

const app = express();
dotenv.config();
// ... tus otros imports (express, mongoose, etc.)
const PORT = process.env.PORT || 3000;

//Conexion a DB
connectDB();

//Middlewares
app.use(cors({origin: 'http://localhost:4200' }));
app.use(express.json());

//Rutas de la API
app.use('/products', productsRouter);
app.use('/users', usersRouter); 
app.use('/api/empleados', employeeRoutes);
app.use('/api/departamentos', departmentRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

