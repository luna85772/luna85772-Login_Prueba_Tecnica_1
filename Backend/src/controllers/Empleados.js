import Empleado from '../Models/Empleados.js';

// Obtener todos los empleados
export const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find().populate('departamento');
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo empleado
export const createEmpleado = async (req, res) => {
    const empleado = new Empleado(req.body);
    try {
        const nuevoEmpleado = await empleado.save();
        res.status(201).json(nuevoEmpleado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar empleado
export const updateEmpleado = async (req, res) => {
    try {
        const actualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar empleado
export const deleteEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.json({ message: 'Empleado eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};