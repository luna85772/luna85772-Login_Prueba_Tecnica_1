import User from '../Models/User.js'; // Verifica que la carpeta 'Models' empiece por mayúscula como en tu árbol de archivos
import jwt from 'jsonwebtoken';

export const usersController = {
    // 1. Registro de usuarios (CRUD - Create)
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const newUser = new User({ name, email, password });
            await newUser.save();
            res.status(201).json({ message: "Usuario creado con éxito" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // 2. Inicio de sesión con JWT (Punto 5 del taller)
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const userFound = await User.findOne({ email });

            if (userFound && userFound.password === password) {
                // Generar el carné digital (Token)
                const token = jwt.sign(
                    { id: userFound._id, email: userFound.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );
                return res.status(200).json({ message: "Login exitoso", token });
            } else {
                return res.status(401).json({ message: "Credenciales inválidas" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error en el servidor" });
        }
    },

    // 3. Listar usuarios (CRUD - Read) para probar tu API
    getAll: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};