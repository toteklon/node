// crear objeto controlador
const cuentaController = {};

// bbdd de prueba
import {USERS_BBDD} from '../bbdd.js';

cuentaController.getCuenta = async (req, res) => {
        const {id} = req.params;
		const user = await USERS_BBDD.find((user) => user.id === +id);
		if (!user) {
//			return res.status(404).send('ID No Existe');
			throw new Error('Id No Encontrado');
		}

		try {
			res.status(201).send(user);
		} catch (error) {
			res.status(404).json({
				message: error.message
			});			
		}

		//res.status(200).send(user);


};

cuentaController.postCuenta = async (req, res) => {
	const { id, first_name, last_name } = req.body;

	if(!id || !first_name || !last_name) return res.status(400).send();

	const user = await USERS_BBDD.find((user) => user.id === +id);
	if (user) return res.status(409).send('ID Ya Existe');

	USERS_BBDD.push({
		id, first_name, last_name
	});
	return res.status(201).send('Registro Insertado');
}; 

cuentaController.deleteCuenta = async (req, res) => {
	const {id} = req.params;
	const userIndex = await USERS_BBDD.findIndex((user) => user.id === +id);
	if (userIndex === -1) return res.status(404).send('ID No encontrado');
	USERS_BBDD.splice(userIndex,1);
	return res.send('Registro Eliminado');
};

cuentaController.patchCuenta = async (req, res) => {
	const {id} = req.params;
	const { first_name, last_name } = req.body;

	if(!first_name || !last_name) return res.status(400).send();

	const user = await USERS_BBDD.find((user) => user.id === +id);
	if (!user) return res.status(404).send('ID No encontrado');

	user.first_name = first_name;
	user.last_name = last_name;
	return res.send('Registro Actualizado');
};

export default  cuentaController ;
