const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getVenta, postVenta, putVenta, deleteVenta} = require('../controllers/venta')

route.get('/', getVenta)

route.post('/', postVenta)

route.put('/', putVenta)

route.delete('/', deleteVenta)


module.exports = route 