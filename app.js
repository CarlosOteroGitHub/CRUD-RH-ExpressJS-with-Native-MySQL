const express = require('express');
const app = express();

//PROCESO PARA EJECUTAR LAS PLANTILLAS DE EJS.
app.set('view engine', 'ejs');

//PROCESO PARA DECODIFICAR LOS VALORES ENVIADOS POR MEDIO DE PETICIONES POST EN FORMATO JSON.
app.use(express.urlencoded({extended:false}));
app.use( express.json());

//PROCESO PARA EJECUTAR EL CONTENIDO DEL SCRIPT router.js
app.use('/', require('./router'));

//PROCESO PARA CORRER EL SERVIDOR EN EL PUERTO 5000.
app.listen(5000, ()=>{
	console.log("SERVIDOR CORRIENDO EN LA DIRECCIÓN: http://localhost:5000/");
});