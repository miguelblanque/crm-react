import {useEffect , useState} from 'react'

const Inicio = () => {

  const [clientes, setClientes] = useState([])

  useEffect(()=>{
      const orbtenerClientesAPI = async () => {
        try{
           const url = 'http://localhost:4000/clientes'
           const respuesta = await fetch(url)
           const resultado = await respuesta.json()

           console.log(resultado)

        }catch (error){
          console.log (error)
        }
      }
  },[])

  return (
    <div>
        <h1>Desde Inicio</h1>
    </div>
  )
}

export default Inicio