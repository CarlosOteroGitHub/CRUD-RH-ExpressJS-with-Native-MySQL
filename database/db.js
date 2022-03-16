const mysql = require('mysql');

//PROCESO PARA LA CONEXIÓN A LA BASE DE DATOS. NOTA: LA BASE DE DATOS DEVE CREARSE EN EL SGBD MYSQL Y TAMBIÉN CREAR MANUALMENTE LAS TABLAS.
const conexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'crud_nodejs_db'
});

//PROCESO PARA LA COMPROBACIÓN DE LA CONEXIÓN A LA BASE DE DATOS.
conexion.connect((error) =>{
	if(error){
		console.log('El error de conexión es: ' + error);
		return;
	}
	console.log('CONEXIÓN EXITOSA A LA BASE DE DATOS.');
});

module.exports = conexion;