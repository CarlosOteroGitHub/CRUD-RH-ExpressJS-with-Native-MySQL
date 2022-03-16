const conexion = require('../database/db');

//PROCESO PARA INSERTAR REGISTROS EN LA BASE DE DATOS.
exports.save = (req, res)=>{
	const nombre = req.body.nombre;
	const nacimiento = req.body.nacimiento;
	const descripcion = req.body.descripcion;
	conexion.query('insert into empleado set ?', {nombre:nombre, nacimiento:nacimiento, descripcion:descripcion}, (error, results)=>{
		if(error){
			console.log(error);
		} else {
			res.redirect('/');
		}
	});
}

//PROCESO PARA EDITAR REGISTROS EN LA BASE DE DATOS.
exports.update = (req, res)=>{
	const id = req.body.id;
	const nombre = req.body.nombre;
	const nacimiento = req.body.nacimiento;
	const descripcion = req.body.descripcion;
	conexion.query('update empleado set ? where id = ?', [{nombre:nombre, nacimiento:nacimiento, descripcion:descripcion}, id], (error, results)=>{
		if(error){
			console.log(error);
		} else {
			res.redirect('/');
		}
	});
}