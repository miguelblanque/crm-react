import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
   <>
        <h1 className="front-black text-4xl text-blue-900">Desde NuevoCliente</h1>
        <p className="mt-3">LLena los siguientes campos para registrar un cliente</p>

        <Formulario />
   </>
  )
}

export default NuevoCliente