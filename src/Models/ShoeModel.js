import mongoose from 'mongoose';

const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  style: { type: String, required: true },
  lastArrival: { type: Date, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true }
});

export const Shoe = mongoose.model('Shoe', shoeSchema, 'Stock');
