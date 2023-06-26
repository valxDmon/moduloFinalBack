const {response} = require('express')
const Venta = require('../models/venta')


const getVenta = async(req, res=response) => {
    let mensaje = ''
    try {
        const ventas = await Venta.find()
        mensaje = ventas
    } catch (error) {
        mensaje = error
    }

   res.json({
        venta:mensaje
    })
    
}

const postVenta = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const venta = new Venta(body) 
    console.log(body)
    try {
        await venta.save()
        mensaje = 'venta registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putVenta = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
            await Venta.findOneAndUpdate({_id: body._id}, {nombre_cliente:body.nombre_cliente, categoria:body.categoria,fecha_ejecucion:body.fecha_ejecucion, precio:body.precio})

            mensaje = 'Venta modificada exitosamente.'
        }
        else{
            await Venta.updateMany({_id: body._id}, {nombre_cliente:body.nombre_cliente, categoria:body.categoria,fecha_ejecucion:body.fecha_ejecucion, precio:body.precio})
            mensaje = 'Venta modificada exitosamente.'
        }

    } catch (error) {
        mensaje = error
    }
    
    res.json({
        venta:mensaje
    })
   
}

const deleteVenta = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Venta.findOneAndDelete({_id: body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        venta:mensaje
    })
   
}

module.exports = {
    getVenta,
    postVenta,
    putVenta,
    deleteVenta
}