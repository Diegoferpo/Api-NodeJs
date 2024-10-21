import { connectDB } from './database.js';
import express from 'express';
import swaggerDocument from './swagger.json' assert { type: 'json' };
import swaggerUi from 'swagger-ui-express';
import {
    getAllProductsController,
    getProductByIdController, 
    createProductController,
    updateProductByIdController,
    partialUpdateProductByIdController,
    deleteProductByIdController
  } from './Controllers/ShoeController.js';

const app = express();

connectDB();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.set('port', process.env.PORT || 8085);

app.get('/products', getAllProductsController);
app.get('/products/:id', getProductByIdController);
app.post('/products', createProductController);
app.put('/products/:id', updateProductByIdController);
app.patch('/products/:id', partialUpdateProductByIdController);
app.delete('/products/:id', deleteProductByIdController);

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
