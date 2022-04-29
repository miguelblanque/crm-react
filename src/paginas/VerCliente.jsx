import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const VerCliente = () => {

    const params= useParams()
    console.log('Id de Cliente:',params)
    const [cliente, setCliente] = useState({})

 

    useEffect(() => {
        const obtenerClienteAPI= async()=>{
            try{
                const url=`http://localhost:4000/clientes/1`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            }catch (error){
                console.log(error)
            }
        }
        obtenerClienteAPI()
    },[])

   
  return (
    <div>
        <p>Cliente: {cliente.nombre}</p>
    </div>
  )
}

export default VerCliente