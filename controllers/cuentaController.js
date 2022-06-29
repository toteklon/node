// crear objeto controlador
const cuentaController = {};

// bbdd de prueba
import {USERS_BBDD} from '../bbdd.js';

cuentaController.getCuenta = (req, res) => {
        const {id} = req.params;
        const user = USERS_BBDD.find((user) => user.id === +id);
        if (!user) return res.status(404).send('ID No encontrado');
        return res.send(user);

};


cuentaController.postCuenta = (req, res) => {
	const { id, first_name, last_name } = req.body;

	if(!id || !first_name || !last_name) return res.status(400).send();

	const user = USERS_BBDD.find((user) => user.id === +id);
	if (user) return res.status(409).send('ID Ya Existe');

	USERS_BBDD.push({
		id, first_name, last_name
	});
	return res.send('Registro Creado');
}; 

cuentaController.deleteCuenta = (req, res) => {
	const {id} = req.params;
	const userIndex = USERS_BBDD.findIndex((user) => user.id === +id);
	if (userIndex === -1) return res.status(404).send('ID No encontrado');
	USERS_BBDD.splice(userIndex,1);
	return res.send('Registro Eliminado');
};

cuentaController.patchCuenta = (req, res) => {
	const {id} = req.params;
	const { first_name, last_name } = req.body;

	if(!first_name || !last_name) return res.status(400).send();

	const user = USERS_BBDD.find((user) => user.id === +id);
	if (!user) return res.status(404).send('ID No encontrado');

	user.first_name = first_name;
	user.last_name = last_name;
	return res.send('Registro Actualizado');
};

export default  cuentaController ;
