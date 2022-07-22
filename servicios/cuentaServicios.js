// bbdd de prueba
const USERS_BBDD = require('../bbdd.js');
// control de errores
const boom = require('@hapi/boom');

class cuentaServicios {

    async cuentas() {
        const infoCuenta = await USERS_BBDD;
        if (!infoCuenta) {
            throw boom.resourceGone ('No Hay Datos');
        }
        return infoCuenta;
    }

    async cuenta(id) {
		const infoCuenta = USERS_BBDD.find((infoCuenta) => infoCuenta.id === +id);
        if (!infoCuenta) {
            throw boom.notFound('Cuenta no Encontrada');
        }
            return infoCuenta;
    }

    async crearCuenta(data) {
    
        const id = data.id;
        const first_name = data.first_name;
        const last_name = data.last_name;
        const email = data.email;
        
        USERS_BBDD.push({
            id:id, first_name:first_name, last_name:last_name, email:email
        });
        return data;

    }

    async borrarCuenta(id) {
		const infoCuenta = USERS_BBDD.findIndex((infoCuenta) => infoCuenta.id === +id);
        if (infoCuenta === -1) {
            throw boom.notFound('Cuenta no Encontrada');
        }
        USERS_BBDD.splice(infoCuenta,1);
        return infoCuenta;
    }

    async editarCuenta(id, datos) {
        const first_name = datos.first_name;
        const last_name = datos.last_name;
        const email = datos.email;

		const infoCuenta = USERS_BBDD.find((infoCuenta) => infoCuenta.id === +id);
        if (!infoCuenta) {
            throw boom.notFound('Cuenta no Encontrada');
        }
        infoCuenta.first_name = first_name;
        infoCuenta.last_name = last_name;
        infoCuenta.email = email;

        return infoCuenta;
    }


}

module.exports = cuentaServicios;
