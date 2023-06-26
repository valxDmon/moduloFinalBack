const {response} = require('express')
const Servicio = require('../models/servicio')


const getServicio = async(req, res=response) => {
    let mensaje = ''
    try {
        const servicios = await Servicio.find()
        mensaje = servicios
    } catch (error) {
        mensaje = error
    }

   res.json({
        servicio:mensaje
    })
    
}

const postServicio= async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const servicio = new Servicio(body) 
    console.log(body)
    try {
        await servicio.save()
        mensaje = 'servicio registrado exitosamente'
    } catch (error) {
        mensaje = error.mensaje
    }

    res.json({
        mensaje
    })
   
}

const putServicio = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
            await Servicio.findOneAndUpdate({_id: body._id}, {nombre_servicio: body.nombre_servicio,descripcion: body.descripcion,precio: body.precio,estado: body.estado})

            mensaje = 'Servicio modificado exitosamente.'
        }
        else{
            await Servicio.updateMany({_id: body._id}, {nombre_servicio: body.nombre_servicio,descripcion: body.descripcion,precio: body.precio,estado: body.estado})
            mensaje = 'Servicio modificado exitosamente.'
        }

    } catch (error) {
        mensaje = error
    }
    
    res.json({
        servicio:mensaje
    })
   
}

const deleteServicio = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Servicio.findOneAndDelete({_id: body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        servicio:mensaje
    })
   
}

module.exports = {
    getServicio,
    postServicio,
    putServicio,
    deleteServicio
}