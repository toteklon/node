const boom = require('@hapi/boom');
const Joi = require('joi');

const crearCarreraSchema = Joi.object({
  id: Joi.number().required(),
  carrera: Joi.string().required(),
  mencion: Joi.string().required(),
  nro_materias: Joi.string().required(),
  total_creditos: Joi.string().required(),
  titulo: Joi.string().required(),
});

const editarCarreraSchema = Joi.object({
  id: Joi.number(),
  carrera: Joi.string().required(),
  mencion: Joi.string().required(),
  nro_materias: Joi.string().required(),
  total_creditos: Joi.string().required(),
  titulo: Joi.string().required(),
});

const buscarCarreraSchema = Joi.object({
  id: Joi.number()
    .integer()
    .required()
    .messages({ "number.integer": "Id debe ser un numero" }),
});

async function validarCrearCarrera(object) {
  try {
    const validar = await crearCarreraSchema.validateAsync(object);
  } catch (error) {
    throw boom.badRequest(error);
  }
};

async function validarBuscarCarrera(object) {
  try {
    const validar = await buscarCarreraSchema.validateAsync(object);
  } catch (error) {
    throw boom.badRequest(error);
  }
};

async function validarEditarCarrera(object) {
  try {
    const validar = await editarCarreraSchema.validateAsync(object);   
  } catch (error) {
    throw boom.badRequest(error);
  }
};

module.exports = { validarCrearCarrera, validarBuscarCarrera, validarEditarCarrera }