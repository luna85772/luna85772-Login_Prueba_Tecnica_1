import express from 'express';
import { Router } from 'express';
import { usersController } from '../controllers/users.js';

const usersRouter = Router();

// Ruta para el CRUD (Registro) [cite: 3, 4]
usersRouter.post('/register', usersController.register);

// Ruta para el Inicio de sesión con JWT 
usersRouter.post('/login', usersController.login);

// Ruta opcional para listar (GET)
usersRouter.get('/', usersController.getAll);

export default usersRouter;