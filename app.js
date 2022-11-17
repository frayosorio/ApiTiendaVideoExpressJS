const cors = require('cors');
const express=require('express');
const morgan = require('morgan');

const app=express();
app.use(cors());


//Conectarse a la base de datos
const bd = require('./modelos/bd');
bd.conectar();

//permite recibir y exportar información en formato JSON
app.use(express.json());

app.use(morgan('tiny'));

require('./rutas/cliente.rutas')(app);
require('./rutas/producto.rutas')(app);
require('./rutas/venta.rutas')(app);
require('./rutas/usuario.rutas')(app);

const puerto=3050;

app.listen(puerto, () => {
    console.log(`API escuchando por el puerto ${puerto}`)
});