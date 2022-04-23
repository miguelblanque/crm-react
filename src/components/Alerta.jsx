import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className="bg-red my-4 bg-red-600 text-white font-bold p-3 uppercase">
        {children}
    </div>
  )
}

export default Alerta