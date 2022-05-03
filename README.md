# crm-react
 Proyecto Crm de React con Vite TailwindCSS, React Router y FormiLink

Pagina principal de la aplicacion


![alt text](/src/img/principalCliente.png)


 Agregar un cliente





Comprobamos que los datos son validos

![alt text](/src/img/validaciones.png)


Alta de cliente

![alt text](/src/img/nuevoCliente.png)


Comprobamos que aparece en el listado de clientes

![alt text](/src/img/clientes.png)

Consultar un cliente

![alt text](/src/img/verCliente.png)



Modificar un cliente

![alt text](/src/img/editarCliente.png)

Comprobamos que se ha modificado

![alt text](/src/img/clienteModificado.png)



Eliminar un cliente

![alt text](/src/img/eliminarCliente.png)


Comprobamos que el cliente se ha eliminado

![alt text](/src/img/clienteEliminado.png)


--------------------------------------------------


Instalacion y configuracion de proyecto.
npm init vite@latest
Cd com-react
npm install
npm run dev





Instalar Tailwindcss

cd crm-react 

npm i autoprefixer postcss tailwindcss

npx tailwindcss init -p





Instalar react router

cd crm-react 

npm i react-router-dom





Instalar Formik y yup

npm i formik yup


Instalar json-server

sudo npm install -g json-server

Iniciar BBDD

json-server --watch db.json --port 4000






Añadir variables de entorno

Documentacion:

https://vitejs.dev/guide/env-and-mode.html#env-files





JSON-SERVER API

http://my-json-server.typicode.com/githubUser/githubRepository/BBDD

http://my-json-server.typicode.com/miguelblanque/crm-react/clientes


DESARROLLO

npm run dev

VITE_API_URL:http://localhost:4000/clientes

PRODUCCION

npm run build

npm run preview

VITE_API_URL:http://my-json-server.typicode.com/miguelblanque/crm-react/clientes


