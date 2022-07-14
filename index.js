console.clear();

const express = require('express');
const dotenv = require('dotenv');

// router de cuenta
const cuentaRouter = require('./routes/cuenta.route.js');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/manejo.errores');



// leer archivo con variables de entorno
dotenv.config();
// obtener variables de entorno
const PORT = process.env.PORT;

const expressApp = express();

//middleware para detectar body
expressApp.use(express.json());
expressApp.use(express.text());

// usar router de cuenta
expressApp.use("/cuenta", cuentaRouter);

expressApp.use(logErrors);
expressApp.use(boomErrorHandler);
expressApp.use(errorHandler);


expressApp.listen(PORT, () =>
	console.log(`Servidor levantado en el puerto ${PORT}`)
);