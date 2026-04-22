import mongoose from 'mongoose';

const DepartamentoSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    ubicacion: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Departamento', DepartamentoSchema);