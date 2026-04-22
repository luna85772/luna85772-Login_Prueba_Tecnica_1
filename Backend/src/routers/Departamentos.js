import express from 'express';
import * as deptoController from '../controllers/Departamento.js';
const router = express.Router();

// Rutas para /api/departamentos
router.get('/', deptoController.getDepartamentos);
router.post('/', deptoController.createDepartamento);
router.put('/:id', deptoController.updateDepartamento);
router.delete('/:id', deptoController.deleteDepartamento);

export default router;
