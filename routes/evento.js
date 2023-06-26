const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getEvento, postEvento, putEvento, deleteEvento} = require('../controllers/evento')

route.get('/', getEvento)

route.post('/', postEvento)

route.put('/', putEvento)

route.delete('/', deleteEvento)


module.exports = route 