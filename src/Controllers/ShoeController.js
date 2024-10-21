import { Shoe }  from '../Models/ShoeModel.js';
import redisClient from '../redisClient.js';

//GET
export const getAllProductsController = async (req, res) => {
    try {
      const cachedProducts = await redisClient.get('allProducts');
      
      if (cachedProducts) {
        return res.status(200).json(JSON.parse(cachedProducts));
      }
  
      const products = await Shoe.find();
  
      await redisClient.set('allProducts', JSON.stringify(products), { EX: 3600 });
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener productos', error });
    }
  };

//GET
export const getProductByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const cachedProduct = await redisClient.get(`product:${id}`);
      
      if (cachedProduct) {

        return res.status(200).json(JSON.parse(cachedProduct));
      }
      const product = await Shoe.findById(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

      await redisClient.set(`product:${id}`, JSON.stringify(product), { EX: 3600 });
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener producto', error });
    }
  };

//POST
export const createProductController = async (req, res) => {
    const { name, style, lastArrival, price, color } = req.body;
  
    try {
      const newProduct = new Shoe({ name, style, lastArrival, price, color });
      await newProduct.save();

      await redisClient.del('allProducts');

      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear producto', error });
    }
  };

//UPDATE
export const updateProductByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedShoe = await Shoe.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!updatedShoe) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

        await redisClient.del(`product:${id}`);
        await redisClient.del('allProducts');
      res.status(200).json(updatedShoe);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar producto', error });
    }
  };

//PATCH
export const partialUpdateProductByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Shoe.findByIdAndUpdate(id, { $set: req.body }, {
        new: true,
        runValidators: true
      });  // Actualización parcial del producto por Id
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar producto', error });
    }
};

//DELETE
  export const deleteProductByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedShoe = await Shoe.findByIdAndDelete(id);
  
      if (!deletedShoe) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

        await redisClient.del(`product:${id}`);
        await redisClient.del('allProducts');
      res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar producto', error });
    }
  };
  

