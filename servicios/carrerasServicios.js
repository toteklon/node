// bbdd de prueba
const db = require('../model');

// Modelos
const Carrera = db.carreras;

// control de errores
const boom = require('@hapi/boom');

class carrerasServicios {

    async getCarreras() {
        const obtenerDatos = await Carrera.findAll();
        if (!obtenerDatos) {
            throw boom.resourceGone ('No Hay Datos');
        }
        return obtenerDatos;
    }

    async getCarreraId(id) {
        const obtenerDatos = await Carrera.findOne({ where: { id: id }})
        if (!obtenerDatos) {
            throw boom.notFound('Carrera no Encontrada');
        }
            return obtenerDatos;
    }

    async crearCarrera(datos) {

        const obtenerDatos = await Carrera.create(datos);
        return obtenerDatos;

    }

    async borrarCarrera(id) {
        const obtenerDatos = await Carrera.findOne({ where: { id: id }})
        if (!obtenerDatos) {
            throw boom.notFound('Carrera no Encontrada');
        }
        await Carrera.destroy({ where: { id: id }} )

        return obtenerDatos;
    }

    async editarCarrera(id, datos) {
        const obtenerDatos = await Carrera.findOne({ where: { id: id }})
        if (!obtenerDatos) {
            throw boom.notFound('Carrera no Encontrada');
        }
        await Carrera.update(datos, { where: { id: id }})

        return datos;
    }


}

module.exports = carrerasServicios;
