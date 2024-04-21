# Un viaje único por el mundo del vino

## Lineamientos del Proyecto Final Del Bootcamp React Js

![](<https://imagenes.elpais.com/resizer/4SAdEY7bHMhv01ftXCKRZ-DVoCQ=/1960x1470/filters:focal(984x901:994x911)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/HCLXJMCQPFGJBGOX56Z6DABR5I.jpg>)

El proyecto se trata de un sitio web
que incluya el aprendizaje
obtenido durante el bootcamp, es
decir:

<ol>
 <li><em><strong>Hooks reusables:</em></strong> Se deben implementar al menos 1 hook para demostrar el
aprendizaje de esta técnica para reutilizar el código a lo
largo del proyecto y el nombre de los hooks debe ser claro y conciso.</li>
<li><em><strong>Zustand:</em></strong> El proyecto debe utilizar Zustand como manejador de
estado global, si el estudiante quiere implementar otro estado global
puede hacerlo, solo hay que justificarlo en el documento, el proyecto debe contener al menos 2 stores para guardar, el manejador de estado se debe emplear principalmente
para almacenar la información obtenida de una API, el uso de librerías complemento es válido (selectores,
actions) y la información en la(s) store(s) debe de ser consumida
por los componentes
la información.</li>
<li><em><strong>Llamadas a la API: </em></strong> El proyecto debe estar haciendo peticiones a una API
Remota,no es válido hacer peticiones locales a archivos del
proyecto y el uso Axios o Fetch es a criterio del estudiante. Deberá
justificarlo dentro del archivo final.</li>
<li><em><strong>Routing:</em></strong> El proyecto debe implementar al menos 3 rutas utilizando
lo visto en clase y React router debe ser utilizado.</li>
<li><em><strong>Formularios: </em></strong> Se debe de implementar la librería de React hook form en
los formularios del proyecto y se debe de implementar la librería de React hook form en
los formularios del proyecto.</li>
<li><em><strong>Deploy a servidor: </em></strong> El proyecto debe desplegarse como se vio en clase y la url del proyecto debe ser de acceso público.</li>
<li><em><strong>Testing: </em></strong>Se debe de implementar pruebas en al menos 2
componentes del frontend, React Testing Library es el sugerido, ya que fue lo que se
vio en las sesiones. Si se quiere implementar otra
herramienta ajena a lo visto se puede hacer, solo se debe
de justificar en la documentación.</li>
</ol>

## Información del proyecto 🚀
Decidi hacer mi proyecto sobre los vinos porque soy aficionada a ellos, me gusta conocer la historia de cada tipo, sin importar el país o el tipo de uva. El proyecto se compone de una página principal donde podemos ver algunos vinos de ejemplo y los filtros para navegar a los tipos, buscar o ir a detalles de algun tipo. También existe un carrito de compras donde podemos ir agregando vinos y al final enviar una orden de compra, simulando lo que haria un ecommerce en este caso de vinos.

## Desafíos que se presentaron 🚀
La verdad es que a pesar de dominar en su mayoria HTML y CSS, la manera en que React nos pide que diseñemos ciertos componentes aún me cuesta un poco y también el manejo del estado con Zustand. Hablaré de lo más complicado que me tocó: 
1. <em><strong>Reutilización de componentes: </em></strong> En esta web queria crear una sección para mostrar información de 3 tipos de vino: Blanco, Tinto y Rosado. Habia creado 3 rutas llamadas vinos/categories/tinto, vinos/categories/rosado y vinos/categories/blanco. Con 3 componentes diferentes, pero al verlos se parecian mucho y la verdad la idea del proyecto era reutilización de componentes, por lo que pensando decidi crear una sola ruta poniendo un parametro en la ruta vinos/categories/:typeWine y asi setear el tipo de vino al qie navegaria y solo adaptar un componente llamado categorie para que fuera dínamico, esa parte de refactorización me costo pero me siento orgullosa de llegar a ese punto de conocimiento. También los carrouseles donde se ven los productos, en este caso los vinos estan llamando a un solo componente llamado Products que con ciertas props renderiza la data que le pasas, asi lo reutilizo en toda la App.
2. <em><strong>Uso de typescript con React: </em></strong> En este punto tengo que aceptar que Javascript por si solo me ha costado y me cuesta mucho, ahora el tema de typescript lo ha sido un poquito más dificil, pero he entendido de la importancia de uso y simplemente como tengo que "mapear" o declarar exactamente lo que quiero que reciben o envian las funciones me ha ayudado a mejorar mi lógica. Me costo con los test también porque tuve que configurar varias cosas para Testing Library pero ya me voy adaptando a siempre empezar/usar mis nuevos proyectos con Typescript.
3. <em><strong>Choque de versiones de las dependencias: </em></strong> Este punto también fue importante porqué me encontre con errores al instalar dependencias para los test al arrojarme errores como: react using 17 but react hooks no compatible with 18. Al final pude resolverlas actualizando dependencias y quitando código deprecado que no usaba y que como me daban errores de compatibilidad era mejor borrar.
4. <em><strong>Deploy en vercel: </em></strong> Este como tal no fue un problema, porqué no me dejaba deployar porque al correr __npm install__ .
Daba error por la compatibilidad de errores que mencione pero asi aprendi que podia adaptar y cambiar los comandos que se corren al deployar.
5. <em><strong>Pensar en variables para el estado global: </em></strong> Por último quisiera explicar y contar mi experiencia con la "lógica" en react y es que me cuesta aún saber como llamarle a las funciones, componentes pero he ido aprendiendo a poner nombres sencillos y que simplemente digan de que va la función. También la parte de los hooks y la creación de hooks reutilizables que nos sirven para no repetir código, ha sido dificil pero pude adaptar un hook para guardar/obtener el token que necesitaba para autenticarme con el API de vinos.

## Estructura del proyecto 🚀
- mocks: Mocks necesarios para los test.
- public: Carpeta con el index.html donde se monta el componente React
- src: root.
   - assets: Imagénes y archivos utilizados.
   - components: Aqui se crean los componentes a reutilizar en el proyecto, así como las partecitas con los que se crean pantallas completas o las llamadas pages. 
   - hooks: Hooks customizados reutilizables en todo el proyecto.
   - pages: En esta carpeta cree las pantallas o secciones grandes del proyecto como Home, ProductView y Categories.
   - routes: Las rutas de la aplicación.
   - services: Aqui cree todas las funciones que llaman a la API.
   - state: Aqui estan los stores de mi aplicación para el estado global.
   - types: Aqui defini todos los tipos de estructuras usadas en mi proyecto para que typescript las entienda. 
   - App.tsx: Punto de entrada del proyecto.
- test: Carpeta con todos los test

### Pre-requisitos para instalar este proyecto 📋

**Para correr el proyecto necesitas:**

```
-NodeJS minimo en versión 18
-Un navegador web
```

### Instalación 🔧

**Para instalar y configurar el proyecto de la plataforma :**

1. Abre una consola, muevete al directorio **plataforma** y ejecuta
   1. npm install o yarn
   2. npm run dev

### Demos desplegado 😎

- 👉 [Un viaje único por el mundo del vino](https://un-viaje-unico-por-el-mundo-del-vino.netlify.app/)

## Construido con 🛠️

_Herramientas con las que se construyo la web del bootcamp_

#### Frontend

- [React](https://es.react.dev/) - Librería para creación de interfaces gráficas
- [Typescript](https://www.typescriptlang.org/) - Lenguaje de programación tipado usado como capa extra en JS
- [Vite](https://vitejs.dev/) - Servidor web
- [React Hook Form](https://react-hook-form.com/) - Librería para manejo fácil de formularios usando hooks en React
- [Zustand](https://zustand-demo.pmnd.rs/) - Librería para manejo de estado global
- [Toastify](https://apvarun.github.io/toastify-js/) - Librería para uso de Alerts o Toast en React

#### API Vinos

- [Mundo del vino API](https://codigo-facilito-api-vinos-1023f56b3ed9.herokuapp.com/api/wines) - API gratuita para obtener vinos, filtrar por tipo, buscar y simular el envio de una orden de compra

#### Hosting

- [Vercel](https://vercel.com/) - Hosting.

## Autores ✒️

- **Maricela Fuentes Vazquez ** - _Desarrolladora Frontend_ - [MarFueGit](https://github.com/MarFueGit/)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT LICENCE) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

⌨️ con ❤️ por [MarFueGit](https://github.com/MarFueGit/) 😊 para el bootcamp de React de [Código Facilito](https://codigofacilito.com/)
