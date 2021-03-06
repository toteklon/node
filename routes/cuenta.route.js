//import express from 'express';
const express = require('express');

// capa der servicios de cuentas
const cuentaServicios = require('../servicios/cuentaServicios.js');

// crear router
const cuentaRouter = express.Router();

// instanciar capa de servicios
const serviciosCuenta = new cuentaServicios();

// instaciar validaciones
const validarCuenta = require('../schemas/cuentaSchema')


// ruta get todos loa registros 
cuentaRouter.get('/', async (req, res) => {    
    try {
        const datosCuenta = await serviciosCuenta.cuentas();
        res.status(200).json(datosCuenta);           
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

// ruta get con un parametro id
cuentaRouter.get('/:id', async (req, res, next) => {    
    try {
        const { id } = req.params;
        // validar datos        
        const verificacion = await validarCuenta.validarBuscarCuenta({id});
        // peticion de busqueda
        const datosCuenta = await serviciosCuenta.cuenta(id);
        res.status(200).json(datosCuenta);           
    } catch (error) {
        next(error);
    }
});

// ruta post
cuentaRouter.post('/', async (req, res, next) => {
    try {
        const datos = req.body;
        // validar datos        
        const verificacion = await validarCuenta.validarCrearCuenta(datos);
        // peticion de registro
        const nuevaCuenta = await serviciosCuenta.crearCuenta(datos);
        res.status(201).json(nuevaCuenta);
    }
    catch (error) {
        next(error);
    }
});

// ruta delete
cuentaRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        // validar datos       
        const verificacion = await validarCuenta.validarBuscarCuenta({id});
        // peticion de eliminacion
        const datosCuenta = await serviciosCuenta.borrarCuenta(id);
        res.status(200).json({
            infoCta: id,
            message: 'Cuenta Eliminada'
        });           
    } catch (error) {
        next(error);
    }
});

// ruta update
cuentaRouter.patch('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const datos = req.body;
        // validar datos
        const verificacion = await validarCuenta.validarEditarCuenta(datos);
        // peticion de actualizacion
        const datosCuenta = await serviciosCuenta.editarCuenta(id, datos);
        res.json(datosCuenta);
    }           
     catch (error) {
        next(error);
    }
});

module.exports = cuentaRouter;
