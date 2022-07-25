console.clear();

const express = require('express');
const dotenv = require('dotenv').config();

// router de cuenta
const carreraRouter = require('./routes/carrera.route.js');

const { boomErrorHandler, errorHandler } = require('./middlewares/manejo.errores');

const PORT = process.env.PORT;

const expressApp = express();


//middleware para detectar body
expressApp.use(express.json());
expressApp.use(express.text());

// usar router de cuenta
expressApp.use('/carreras', carreraRouter);

expressApp.use(boomErrorHandler);
expressApp.use(errorHandler);

expressApp.listen(PORT, () => {
	console.log(`Servidor levantado en el puerto ${PORT}`)
});