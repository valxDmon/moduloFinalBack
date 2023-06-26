//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const VentaSchema = Schema({
    nombre_cliente: {
        type: String,
        required: [true, 'el nombre del cliente es obligatorio']
    },

    categoria: {
        type: String,
        required: [true, 'La categoria es obligatoria']
    },

    fecha_ejecucion: {
        type: Date,
        required: [true, 'La fecha_ejecucion es obligatoria']
    },

    precio: {
        type: Number,
        min: [0,"ingresa un numero igual o mayor a cero"],
        required: [true, 'el precio es obligatorio']
    }
})

module.exports = model('Venta', VentaSchema)