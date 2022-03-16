const express = require('express');
const router = express.Router();

//PROCESO PARA EJECUTAR LA CONEXIÓN A LA BASE DE DATOS.
const conexion = require('./database/db');

//PROCESO PARA MOSTRAR TODOS LOS REGISTROS Y EJECUTAR LA PLANTILLA PRICIPAL EJS (index).
router.get('/', (req, res)=>{
	conexion.query("select * from empleado;", (error, results) =>{
		if(error){
			throw error;
		} else {
			res.render('index.ejs', {results:results});
		}
	});
});

//PROCESO PARA CREAR REGISTROS.
router.get('/create', (req, res)=>{
	res.render('create');
});

//PROCESO PARA EDITAR REGISTROS.
router.get('/edit/:id', (req, res)=>{
	const id = req.params.id;
	conexion.query('select * from empleado where id = ?', [id], (error, results)=>{
		if(error){
			throw error;
		} else {
			res.render('edit', {empleado:results[0]});
		}
	});
});

//PROCESO PARA ELIMINAR REGISTROS.
router.get('/delete/:id', (req, res)=>{
	const id = req.params.id;
	conexion.query('delete from empleado where id = ?', [id], (error, results)=>{
		if(error){
			throw error;
		} else {
			res.redirect('/');
		}
	});
});

//PROCESO PARA EJECUTAR EL CONTENIDO DEL ARCHIVO crud.js A MANERA DE CONTROLADOR.
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;