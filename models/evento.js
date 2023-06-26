//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const EventoSchema = Schema({
 
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

 direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria']
    },

    precio: {
        type: Number,
        required: [true, 'el precio es obligatorio']
    },
    pagado:{
        type: Number,
        required: [true, 'el pagado es obligatorio']
    },

    por_cobrar:{
        type: Number,
        required: [true, 'el por cobrar es obligatorio']
    }

   
})

module.exports = model('Evento', EventoSchema)