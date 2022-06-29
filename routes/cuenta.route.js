import express from 'express';
// controller del router cuenta
import  cuentaController from '../controllers/cuentaController.js';
// crear router
const cuentaRouter = express.Router();

// ruta get con un parametro id
cuentaRouter.get("/:id", cuentaController.getCuenta);

// ruta post
cuentaRouter.post("/", cuentaController.postCuenta);

// ruta delete eliminar
cuentaRouter.delete("/:id", cuentaController.deleteCuenta);

// ruta patch edicion
cuentaRouter.patch("/:id", cuentaController.patchCuenta);

export default cuentaRouter;