const {response} = require('express')
const Evento = require('../models/evento')


const getEvento = async(req, res=response) => {
    let mensaje = ''
    try {
        const eventos = await Evento.find()
        mensaje = eventos
    } catch (error) {
        mensaje = error
    }

   res.json({
        evento:mensaje
    })
    
}

const postEvento = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const evento = new Evento(body) 
    console.log(body)
    try {
        await evento.save()
        mensaje = 'evento registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putEvento = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
            await Evento.findOneAndUpdate({_id: body._id}, {nombre_cliente: body.nombre_cliente, categoria: body.categoria,fecha_ejecucion:body.fecha_ejecucion,direccion: body.direccion,precio: body.precio,pagado:body.pagado,por_cobrar:body.por_cobrar})

            mensaje = 'Evento modificado exitosamente.'
        }
        else{
            await Evento.updateMany({_id: body._id}, {nombre_cliente: body.nombre_cliente, categoria: body.categoria,fecha_ejecucion:body.fecha_ejecucion,direccion: body.direccion,precio: body.precio,pagado:body.pagado,por_cobrar:body.por_cobrar})
            mensaje = 'Evento modificado exitosamente.'
        }

    } catch (error) {
        mensaje = error
    }
    
    res.json({
        evento:mensaje
    })
   
}

const deleteEvento = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Evento.findOneAndDelete({_id: body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        evento:mensaje
    })
   
}

module.exports = {
    getEvento,
    postEvento,
    putEvento,
    deleteEvento
}