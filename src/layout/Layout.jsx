import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <h1>Desde Layout</h1>
        <p>Antes de Outlet</p>
        <Outlet/>
        <p>Despues de Outlet</p>
    </div>
  )
}

export default Layout