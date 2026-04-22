import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido1: {
    type: String,
    required: true
  },
  apellido2: {
    type: String,
    required: false // Opcional, dependiendo de tu lógica
  },
  codigo_departamento: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Empleado', empleadoSchema);