import productModel from '../Models/products.js';

const productsController = {
    
    getProducts: async (req, res) => {
        try {
    const getProduct = await productModel.find();
        res.status(201).json({data: getProduct});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al leer el producto'});
    }},

    createProduct: async (req, res) => {
        try {
    const { name,price,description} = req.body; 
    const newProduct = new productModel({name,price,description});
        await newProduct.save();
        res.status(201).json({message: 'Producto creado'});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al crear el producto'});
    }
    },

    updateProduct: async (req, res) => {
        const {id} = req.params;
        const {name, price, description} = req.body;
        const productUpdated = await productModel.findByIdAndUpdate(id, {name, price, description});
        if (!productUpdated) {
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        res.status(200).json({message: `Producto ${id} actualizado`});
    },

    deleteProduct: async (req, res) => {
        const {id} = req.params;
        const productDeleted = await productModel.findByIdAndDelete(id);
        if (!productDeleted) {
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        res.status(200).json({message: `Producto ${id} eliminado`});
    }

};

export default productsController;