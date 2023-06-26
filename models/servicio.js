//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const ServicioSchema = Schema({
    nombre_servicio: {
        type: String,
        required: [true, 'el nombre del servicio es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatoria']
    },
    precio: {
        type: Number,
        required: [true, 'precio obligatorio']
    },
    estado: {
        type: String,
        emum:['Activo','Inactivo'],
        required: [true, 'estado obligatorio']
    }
})

module.exports = model('Servicio', ServicioSchema)

