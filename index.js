console.clear();

const express = require('express');
const dotenv = require('dotenv').config();

// router de cuenta
const cuentaRouter = require('./routes/cuenta.route.js');

// credenciales de la bbdd
const sequelize = require('./database/bbdd');

const { boomErrorHandler, errorHandler } = require('./middlewares/manejo.errores');

const PORT = process.env.PORT;

const expressApp = express();


//middleware para detectar body
expressApp.use(express.json());
expressApp.use(express.text());

// usar router de cuenta
expressApp.use('/cuenta', cuentaRouter);

expressApp.use(boomErrorHandler);
expressApp.use(errorHandler);

expressApp.listen(PORT, function () {
	console.log(`Servidor levantado en el puerto ${PORT}`);


	sequelize.authenticate().then(() => {
		console.log('fino');
	}).catch(error => {
		console.log('falla', error);
	})

});
	