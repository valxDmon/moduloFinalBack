const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getServicio, postServicio, putServicio, deleteServicio} = require('../controllers/servicio')

route.get('/', getServicio)

route.post('/', postServicio)

route.put('/', putServicio)

route.delete('/', deleteServicio)


module.exports = route 