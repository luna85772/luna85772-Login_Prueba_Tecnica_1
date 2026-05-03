// server.js inicializa el servidor Express, conecta a la base de datos y define las rutas para los productos, usuarios, empleados y departamentos.
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import productsRouter from './src/routers/products.js';
import usersRouter from './src/routers/users.js';
import employeeRoutes from './src/routers/Empleados.js';
import departmentRoutes from './src/routers/Departamentos.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

// Inicializa Express
const app = express();
const PORT = process.env.PORT || 9000;

//Conexion a DB
connectDB();

//Middlewares
app.use(cors({ origin: 'http://13.59.196.178:9000' }));
app.use(express.json());

//Rutas de la API
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/api/empleados', employeeRoutes);
app.use('/api/departamentos', departmentRoutes);

// Rutas para servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

