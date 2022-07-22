const boom = require('@hapi/boom');
const Joi = require('joi');

const crearCuentaSchema = Joi.object({
  id: Joi.number().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
});

const editarCuentaSchema = Joi.object({
  id: Joi.number(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
});

const buscarCuentaSchema = Joi.object({
  id: Joi.number()
    .integer()
    .required()
    .messages({ "number.integer": "Id debe ser un numero" }),
});

async function validarCrearCuenta(object) {
  try {
    const validar = await crearCuentaSchema.validateAsync(object);
  } catch (error) {
    throw boom.badRequest(error);
  }
};

async function validarBuscarCuenta(object) {
  try {
    const validar = await buscarCuentaSchema.validateAsync(object);
  } catch (error) {
    throw boom.badRequest(error);
  }
};

async function validarEditarCuenta(object) {
  try {
    const validar = await editarCuentaSchema.validateAsync(object);   
  } catch (error) {
    throw boom.badRequest(error);
  }
};

module.exports = { validarCrearCuenta, validarBuscarCuenta, validarEditarCuenta }