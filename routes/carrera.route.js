//import express from 'express';
const express = require('express');

// capa der servicios de cuentas
const carrerasServicios = require('../servicios/carrerasServicios.js');

// crear router
const carreraRouter = express.Router();

// instanciar capa de servicios
const serviciosCarreras = new carrerasServicios();

// instaciar validaciones
const validarCarrera = require('../schemas/carreraSchema')


// ruta get todas las carreras 
carreraRouter.get('/', async (req, res) => {    
    try {
        const datosCarrera = await serviciosCarreras.getCarreras();
        res.status(200).json(datosCarrera);           
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

// ruta get carrera por id
carreraRouter.get('/:id', async (req, res, next) => {    
    try {
        const { id } = req.params;
        // validar datos        
        const verificacion = await validarCarrera.validarBuscarCarrera({id});
        // peticion de busqueda
        const datosCarrera = await serviciosCarreras.getCarreraId(id);
        res.status(200).json(datosCarrera);           
    } catch (error) {
        next(error);
    }
});

// ruta post crear carrera
carreraRouter.post('/', async (req, res, next) => {
    try {
        const datos = req.body;
        // validar datos        
        const verificacion = await validarCarrera.validarCrearCarrera(datos);
        // peticion de registro
        const datosCarrera = await serviciosCarreras.crearCarrera(datos);
        res.status(201).json(datosCarrera);
    }
    catch (error) {
        next(error);
    }
});

// ruta delete carrera
carreraRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        // validar datos       
        const verificacion = await validarCarrera.validarBuscarCarrera({id});
        // peticion de eliminacion
        const datosCarrera = await serviciosCarreras.borrarCarrera(id);
        res.status(200).json({
            infoCta: datosCarrera,
            message: 'Carrera Eliminada'
        });           
    } catch (error) {
        next(error);
    }
});

// ruta update carrera
carreraRouter.patch('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const datos = req.body;
        // validar datos
        const verificacion = await validarCarrera.validarEditarCarrera(datos);
        // peticion de actualizacion
        const datosCarrera = await serviciosCarreras.editarCarrera(id, datos);
        res.json(datosCarrera);
    }           
     catch (error) {
        next(error);
    }
});

module.exports = carreraRouter;
