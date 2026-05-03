// server.js inicializa el servidor Express, conecta a la base de datos y define las rutas para los productos, usuarios, empleados y departamentos.
import dotenv from 'dotenv'
import 'dotenv/config';
//console.log("Ruta actual de trabajo:", process.cwd());
//console.log("Variable de BD:", process.env.DB_CONNECTION_STRINGS);
import express from 'express';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import productsRouter from './src/routers/products.js';
import usersRouter from './src/routers/users.js';
import employeeRoutes from './src/routers/Empleados.js';
import departmentRoutes from './src/routers/Departamentos.js';

//importaciones para accede a las rutas del front end

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from 'path';

// Inicializa Express

const app = express();
// ... tus otros imports (express, mongoose, etc.)
const PORT = process.env.PORT || 9000;

//Conexion a DB
connectDB();

//Middlewares
app.use(cors({origin: 'http://13.59.196.178:9000' }));
app.use(express.json());

//Rutas de la API
app.use('/products', productsRouter);
app.use('/users', usersRouter); 
app.use('/api/empleados', employeeRoutes);
app.use('/api/departamentos', departmentRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Rutas para servir archivos estáticos (frontend)
//app.use(express.static(path.join(__dirname, 'public')));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });


// Ruta para servir el index.html del frontend
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

