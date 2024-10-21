import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  style: Joi.string().required(),
  lastArrival: Joi.date(),
  price: Joi.number().required(),
  color: Joi.string().optional(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  style: Joi.string().optional(),
  lastArrival: Joi.date().optional(),
  price: Joi.number().optional(),
  color: Joi.string().optional(),
});