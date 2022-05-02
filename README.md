# crm-react
 Proyecto Crm de React con Vite TailwindCSS, React Router y FormiLink



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


TODO:
1- Revisar error import.meta.env.VITE_API_URL undefined
2- Dar formato  tabla -> listado clientes: http://localhost:3000/clientes/1
3- README.md