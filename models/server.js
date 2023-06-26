const express = require('express')
// const cors  = require('cors');//Implementar seguridad
// const bodyParser = require('body-parser')//Recibir datos de formularios html

const dbConection = require('../database/config')
//Instalar el paquete dotenv
const bodyParser = require('body-parser');
const cors = require('cors');


class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        this.ventaPath = '/api/venta' //Ruta pública de la API
        this.eventoPath = '/api/evento' 
        this.servicioPath = '/api/servicio'

        this.middlewares()//Seguridad

        this.routes()

        this.dbConectar()

    }

    middlewares() //Directorio Publico
    {
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json

    }

    routes()
    {
        this.app.use(this.ventaPath, require('../routes/venta'))
        this.app.use(this.eventoPath, require('../routes/evento'))
        this.app.use(this.servicioPath, require('../routes/servicio'))
    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = server