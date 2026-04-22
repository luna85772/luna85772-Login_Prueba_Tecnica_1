import Departamento from '../Models/Departamento.js';

// Obtener todos los departamentos
export const getDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.find();
        res.status(200).json(departamentos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener departamentos", error });
    }
};

// Crear un nuevo departamento
export const createDepartamento = async (req, res) => {
    try {
        const nuevoDepto = new Departamento(req.body);
        await nuevoDepto.save();
        res.status(201).json(nuevoDepto);
    } catch (error) {
        res.status(400).json({ message: "Error al crear departamento", error });
    }
};

// Actualizar un departamento
export const updateDepartamento = async (req, res) => {
    try {
        const actualizado = await Departamento.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar", error });
    }
};

// Eliminar un departamento
export const deleteDepartamento = async (req, res) => {
    try {
        await Departamento.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Departamento eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar", error });
    }
};