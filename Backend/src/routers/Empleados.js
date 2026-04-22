import express from 'express';
import * as employeeController from '../controllers/Empleados.js';
const router = express.Router(); 

// Definición de rutas CRUD
router.get('/', employeeController.getEmpleados);
router.post('/', employeeController.createEmpleado);
router.put('/:id', employeeController.updateEmpleado);
router.delete('/:id', employeeController.deleteEmpleado);

export default router;