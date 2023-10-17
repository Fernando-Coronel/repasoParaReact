// import datos from "./data.json"

// const $palabra = document.getElementById("palabra");
// console.log($palabra);

// let texto = "hola mundo";
// $palabra.innerHTML = `<h1>${texto}</h1>`;

// const $datos = [
//   {
//     "id": 1,
//     "name": "libro HTML",
//     "price":200,
//     "img": "img/html.jpg"
//   },
//   {
//     "id": 2,
//     "name": "libro CSS",
//     "price":400,
//     "img": "./img/css.jpg"
//   },
//   {
//     "id": 3,
//     "name": "libro Python",
//     "price":1500,
//     "img": "./img/python.jpg"
//   },
//   {
//     "id": 4,
//     "name": "libro Python",
//     "price":800,
//     "img": "./img/python.jpg"
//   },
//   {
//     "id": 5,
//     "name": "libro Python",
//     "price":500,
//     "img": "./img/python.jpg"
//   }
// ]
// const $carrito = document.getElementById("carrito");
// console.log($carrito);

// let html1 = "";

// $datos.map(dato =>{
//   html1 += `
//   <div>${dato.id}</div>
//   <div>${dato.name}</div>
//   <div>$${dato.price}</div>
//   <img src=${dato.img} width="100">
//   <br><br>
//   `
// })

// $carrito.innerHTML = html1;

// class Persona{
//   static contadorPersona = 0;
//   constructor(nombre,apellido,edad){
//     this._nombre = nombre;
//     this._apellido = apellido;
//     this._edad = edad;
//   }

//   get nombre(){
//     return this._nombre;
//   }

//   set nombre(nombre){
//     this._nombre = nombre;
//   }

// }

// let numeroTabla = parseInt(prompt("Ingrese la tabla de multiplicar: "));

// for(let i = 1; i <= 10; i++){
//   console.log(`${numeroTabla} X ${i} = ${numeroTabla * i}`)
//}

//Codigo echo desde el telefono

// console.log('Funciones');

// function hola(){
//   console.log('Hello World');
// }

// hola();

// function suma(a, b){
//   return a + b;
// }

// let sumar = suma(8, 8);
// console.log(sumar);

// function suma2(a, b){
//   if(b === undefined){
//     b = 0;
//   }

//   return a + b;
// }

// let sumar2 = suma2(9);
// console.log(sumar2);

// function suma3(a, b = 0){
//   return a + b;
// }

// let sumar3 = suma3(4);
// console.log(sumar3);

// console.log('Objetos');

// const user = {
//   name: 'Fernando',
//   lastname: 'Coronel',
//   age: 31,
//   address: {
//     country: 'México',
//     city: 'Ciudad de México',
//     street: 'Santa Martha',
//   },
//   pasatiempos:['Programar', 'Ver series', 'Estar con mi familia'],
//   active: true,
//   sendMail: function(){
//     return 'Enviando mail...'
//   }
// }

// console.log('Formas de acceder a las propiedades de un objeto');

// console.log(user);
// console.log(user.name);
// console.log(user.lastname);
// console.log(user.age);
// console.log(user.address);
// console.log(user.address.country);
// console.log(user.address.city);
// console.log(user.address.street);
// console.log(user.pasatiempos);
// console.log(user.pasatiempos[0]);
// console.log(user.pasatiempos[1]);
// console.log(user.pasatiempos[2]);
// console.log(user.active);
// console.log(user.sendMail);
// console.log(user.sendMail());

// console.log();

// let name2 = 'Fercho';
// let lastname2 = 'Coronel';

// const newUser = {
//   name2,
//   lastname2
// }

// console.log(newUser);
// console.log(newUser.name2);
// console.log(newUser.lastname2);

// let product = 'Laptop';
// let price = 4500;

// const newProduct = {
//   product,
//   price
// }

// console.log(newProduct);
// console.log(newProduct);
// console.log(newProduct);

// let fecha = new Date();
// let dia = fecha.getDate();

// const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

// let diasSemana = dias[fecha.getDay()];
// console.log(diasSemana);

// console.log('DOM');

// let titulo1 = document.createElement('h1');
// titulo1.innerText = 'Agregando h1 desde el DOM';
// document.body.append(titulo1);

// let boton1 = document.createElement('button');
// boton1.innerText = 'boton desde el DOM'
// document.body.append(boton1);
// console.log('Manejador de eventos o events handlers');
// boton1.addEventListener('click', function(){
//   console.log('Evento click');
//   alert('Se realizo un evento click')
// });

// console.log('Mostrar objetos en el body desde JS')
// const user2 = {
//   name: 'Fernando',
//   lastname: 'Coronel',
//   age: 31,
// }

// function imprimirObject(user){
//   return `<h2>Hola ${user.name} ${user.lastname} tu edad es ${user.age} años.</h2>`
// }

//console.log(imprimirObject(user2));
//document.body.innerHTML= imprimirObject(user2);

// console.log('Destructuracion o destructuring');
// function impObjectDestruc({name, lastname, age}){
//   return `<h2>Hola ${name} ${lastname} tu edad es ${age} años.</h2>`
// }

// console.log(impObjectDestruc(user2));
// document.body.innerHTML= impObjectDestruc(user2);

// function impObjectDestruc2(user){
//   const {name, lastname, age} = user2
//   return `<h2>Hola ${name} ${lastname} tu edad es ${age} años.</h2>`
// }

// console.log(impObjectDestruc2(user2));
// document.body.innerHTML= impObjectDestruc(user2);

// console.log('Funciones anonimas');
// console.log(function(){
//   return 'Funcion anonima';
// });

// console.log('Funciones flecha o arrow function');
// const flecha = () => {
//   return 'Funcion flecha o arrow function';
// }
// console.log(flecha());

// console.log('Cadenas literales o strings literals');
// const boton2 = document.createElement('button');
// boton2.innerText = 'String literals'
// const background1 = 'dodgerblue';
// const color1 = 'yellow'
// let autorizado = true;

// boton2.style = `background: ${autorizado ? background1 : color1}`;

// boton2.addEventListener('click', function(){
//   document.body.style = 'background: green;'
// });

// document.body.append(boton2);

// console.log('Arreglos o arrays');

// const arreglo1 = ['Fernando', 'Elena', 'Fatima', 'Leonel'];

//Formas de recorrer los arreglos
// arreglo1.forEach(function(name){
//   console.log(name);
// });

// const newArreglo = arreglo1.map(function(name){
//   return `Map - ${name}`;
// });
// console.log(newArreglo)

// const encontrarNombre = arreglo1.find(function(name){
//   if(name === 'Fernando'){
//     return name;
//   }
// });
// console.log(arreglo1)
// console.log(encontrarNombre);

// const eliminarnombre = arreglo1.filter(function(name){
//   if(name === 'Fernando'){
//     return name;
//   }
// });
// console.log(arreglo1)
// console.log(eliminarnombre);

// console.log('Formas de unir arreglos')
// console.log('Método concat');
// const arreglo2 = ['Jose Luis', 'Olivia', 'Adrian'];
// const unirArreglos = arreglo1.concat(arreglo2);
// console.log(arreglo1);
// console.log(unirArreglos);

// console.log('Spread operator con arreglos');
// const unirArreglos2 = [...arreglo1,...arreglo2];
// console.log(unirArreglos2);

// console.log('Spread operator con objetos');
// const user3 = {
//   name: 'Fernando',
//   lastname: 'Coronel'
// }

// const address1 = {
//   street: 'Santa Martha',
//   country: 'México'
// }

// const spreadObject = {
//   ...user3,
//   ...address1
// }

// console.log(spreadObject);

//console.log("asincronismo o async await");
//Primer forma
// const ul = document.createElement('ul');

// let datos = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(function(response){
//     return response.json()
//   }).then(function(dato){
//     console.log(dato);
//     dato.forEach(function(post){
//       const li = document.createElement('li');
//       li.innerText = post.name;
//       ul.append(li);
//     });
//     document.body.append(ul)
//   })
// console.log(datos);

//Segunda forma

// async function cargarDatos(){
//   const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const datos = await respuesta.json()
//   console.log(datos)
//   datos.forEach(function(post){
//       const li = document.createElement('li');
//       li.innerText = post.title;
//       ul.append(li);
//     });
//     document.body.append(ul)
// }
// cargarDatos();

//Ejemplos de fetch
//Api de Pokemon
// const numeroPokemon = prompt("Ingrese el ID del pokemon: ")
// const url = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`;

// fetch(url)
// .then(respuesta => respuesta.json())
// .then(datos => {
//   let contenedor1 = document.getElementById('pokemon');
//   contenedor1.innerHTML =`
//      <h3>${datos.id}</h3>
//      <h2>${datos.name}</h2>
//      <img src="${datos.sprites.front_default}"/>
//      <h2>Moviemientos</h2>
//      <ul>
//      <li>${datos.moves[0].move.name}</li>
//      <li>${datos.moves[1].move.name}</li>
//      <li>${datos.abilities[0].ability.name}</li>
//      <li>${datos.abilities[1].ability.name}</li>
//      </ul>
//      `
//   console.log(datos)
// })
// .catch(err => console.log(err))

//api de fake store
// const numeroProducto1 = prompt("Ingresa el numero del producto: ")
// const url2 = `https://fakestoreapi.com/products/${numeroProducto1}`

// fetch(url2)
// .then(respuesta => respuesta.json())
// .then(producto => {
//   let contenedor2 = document.getElementById("fakeStore");
//   contenedor2.innerHTML = `
//     <h2>${producto.id}</h2>
//     <h3>${producto.title}</h3>
//     <p>$${producto.price}</p>
//     <p>${producto.category}</p>
//     <p>${producto.description}</p>
//     <img src="${producto.image}" width="100"/>
//   `
// })
// .catch(error => console.log(error))

//Api platzi fakestore
// const numeroProducto2 = prompt("Ingrese el el numero de producto del catalogo del 1 al 7: ")
// const url3 = `https://api.escuelajs.co/api/v1/categories/${numeroProducto2}`
// console.log(url3)

// fetch(url3)
// .then(response => response.json())
// .then(product => {
//   let contenedor3 = document.getElementById("platzi")
//   contenedor3.innerHTML = `
//   <p>${product.id}</p>
//   <p>${product.name}</p>
//   <img src="${product.image}" width="100"/>
//   <p>${product.creationAt}</p>
//   <p>${product.updatedAt}</p>
//   `
// })
// .catch(error => console.log(error))

// console.log('Metodos de arreglos');

// const autos = [
//         {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
//         {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},{marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
//         {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},{marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
//         {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},{marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
//         {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},{marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
//         {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
//         {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},{marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
//         {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
//         {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},{marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
//         {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
//         {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},{marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
//         {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
//         {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
// ];

// console.log('Metodo for loop');
// for (let i = 0; i < autos.length; i++) {
//   console.log(autos[i])
// }

// console.log('Metodo ForEach');
// const autos1 = autos.forEach(auto => console.log(auto))

// console.log('Metodo map');

// const marcas = autos.map(auto => {
//   return auto.marca.toString().toUpperCase();
// });

// console.log(marcas)
// //Método sort sirve para ordenar los arrays en orden alfabético.
// console.log("Metodo sort");
// console.log( marcas.sort())

// console.log('Metodo filter');
// const autosRojos = autos.filter(auto => auto.color === 'Rojo'
// );
// console.log(autosRojos);

// const autos2018 = autos.filter(auto => auto.year ===2018);
// console.log(autos2018);

// const cuatroPuertas = autos.filter(auto => auto.puertas === 4);
// console.log(cuatroPuertas);

// const autoAutomatico = autos.filter(auto => auto.transmision === 'automatico');
// console.log(autoAutomatico);

// const marcaBMW = autos.filter(auto => auto.marca === 'BMW');
// console.log(marcaBMW);

// const mayores30mil = autos.filter(auto => auto.precio > 30000);
// console.log(mayores30mil);

// const rangoAutos = autos.filter(auto => auto.year >= 2015 && auto.year <=2017);
// console.log(rangoAutos);

// console.log('Metodo find');
// const primerResultado = autos.find(auto => auto.marca === 'BMW');
// console.log(primerResultado);

// console.log('Metodo reduce');
// const totalInventarios = autos.reduce((total,auto) => total + auto.precio,0);
// console.log(`$${totalInventarios}`);

// console.log('Metodo some');
// const existe1 = autos.some(auto => auto.marca === 'Ferrari');
// console.log(`Hay marca Ferrari ? ${existe1}`);

// const existe2 = autos.some(auto => auto.marca === 'BMW');
// console.log(`Hay marca BMW ? ${existe2}`);

// //Programacion Orientada a Objetos
// console.log("Programacion Orientada a Objetos");
// console.log("Clases");
// class Pelicula{
//  constructor(id, nombre){
//    this.id = id;
//    this.nombre = nombre;
//  }

//   reproducir(){
//     return `Reproduciendo pelicula ${this.nombre}`
//   }

// }

// const pelicula1 = new Pelicula(1,"Harry Potter");
// console.log(pelicula1);
// console.log(pelicula1.reproducir());

// const pelicula2 = new Pelicula(2,"Hombre Araña");
// console.log(pelicula2);
// console.log(pelicula2.reproducir());

// //Herencia
// console.log("Herencia");
// class Serie extends Pelicula{
//   constructor(id, nombre, genero, capitulo){
//     super(id, nombre)
//     this.genero = genero;
//     this.capitulo = capitulo;
//   }

//   reproducirCapitulo(){
//     return `Reproduciendo serie ${this.nombre} en el capitulo ${this.capitulo}`
//   }
// }

// const serie1 = new Serie(1,"Mr.Robot","Suspenso",10);
// console.log(serie1);
// console.log(serie1.reproducirCapitulo());

// const serie2 = new Serie(2,"El juego del calamar","Drama",23);
// console.log(serie2);
// console.log(serie2.reproducirCapitulo());

// //Introduccion a Arrays
// const array1 = [3,4,true,"Javascript", "React"];

// console.table(array1);
// console.log(array1[3]);
// console.log(array1.length);

// //Manipulacion de arrays
// const tecnologias = ["HTML","CSS","JavaScript","React"];
// //Añadir elementos
// tecnologias.push("GraphQL");//Lo agrega al final del arreglo
// console.table(tecnologias);
// //Añadirlo al inicio del arreglo
// tecnologias.unshift("Pseint");
// console.table(tecnologias);

// const nuevoArreglo1 = [...tecnologias, "Pseint"];//Lo añade al ultimo
// console.table(nuevoArreglo1);
// const nuevoArreglo2 = ["Pseint", ...tecnologias];//Lo añade al inicio
// console.table(nuevoArreglo2);

// //Eliminar elemento final de un arreglo
// nuevoArreglo1.pop();
// console.table(nuevoArreglo1);

//Proyecto 1. carrito de compras
//const carrito = document.querySelector('#carrito1');
//const contenedorCarrito = document.querySelector('#lista-carrito tbody');
//const vaciarCarrito = document.querySelector('#vaciar-carrito');
//const listaCursos = document.querySelector('#lista-cursos');
//let articulosCarrito = []; // Inicializar como un array vacío

//cargarEventos();
//function cargarEventos(){
//Cuando agrega un curso presionando "Agregar carrito".
//listaCursos.addEventListener('click', agregarCurso);

//Elimina cursos del carrito
//contenedorCarrito.addEventListener('click', eliminarCurso);

//Vaciar el carrito
//vaciarCarrito.addEventListener('click', () =>{
//articulosCarrito = [];
//limpiarHTML();//Eliminamos el HTML
//})
//}

//Funciones
//function agregarCurso(e){
//e.preventDefault();
//if(e.target.classList.contains('agregar-carrito')){
//const cursoSeleccionado = e.target.parentElement;
//leerDatosCurso(cursoSeleccionado);
//}
//}

//Elimina curso del carrito
//function eliminarCurso(e) {
//if (e.target.classList.contains('borrar-curso')) {
//const cursoId = e.target.getAttribute("data-id");

// Buscar el curso por su id en el carrito
//const cursoEnCarrito = articulosCarrito.find(curso => curso.id === cursoId);

//if (cursoEnCarrito) {
//if (cursoEnCarrito.cantidad > 1) {
// Si hay más de uno, simplemente reducir la cantidad
//cursoEnCarrito.cantidad--;
//} else {
// Si solo hay uno, eliminar el curso del carrito
//articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
//}
//carritoHTML(); // Actualizar la visualización del carrito
//}
//}
//}

//Click y extrae informacion del curso
//function leerDatosCurso(curso){
// Si el curso no existe, agrégalo al carrito
//const infoCurso = {
//imagen: curso.querySelector('img').src,
//titulo: curso.querySelector('h4').textContent,
//precio: curso.querySelector('.precio').textContent,
//id: curso.querySelector('a').getAttribute('data-id'),
//cantidad: 1
//};
// Verificar si el curso ya está en el carrito
//const cursoExistente = articulosCarrito.some(curso => curso.id === infoCurso.id);
//if(cursoExistente){
//Actualizamos la cantidad
//const cursos = articulosCarrito.map(curso => {
//if(curso.id === infoCurso.id){
//curso.cantidad++;
//return curso;//Retorna el objeto actualizado
//}else{
//return curso;
//Retorna los objetos que no son los duplicados.
//}
//});
//articulosCarrito = [...cursos];
//}else{
//Agrega elementos al arreglo del carrito
//articulosCarrito = [...articulosCarrito, infoCurso];
//}
//carritoHTML();
//}

//Muestra el carrito de compras en el HTML
//function carritoHTML(){
//Limpiar el HTML
//limpiarHTML();

//Recorre el carrito y general el HTML
//articulosCarrito.forEach(curso => {
//Destructuracion de curso
//const {imagen, titulo, precio, cantidad, id} = curso
//const row = document.createElement('tr');
//row.innerHTML = `
//<td>
//<img src="${imagen}" / width=50>
//</td>
//<td>${titulo}</td>
//<td>${precio}</td>
//<td>${cantidad}</td>
//<td>
//<a href="#" data-id="${id}" class="btn btn-danger borrar-curso"> X </a>
//</td>
//`;

//Agregar el HTML del carrito en el tbody
//contenedorCarrito.appendChild(row);
//})
//}

//Elimina los cursos del tbody
//function limpiarHTML(){
//Forma lenta
//contenedorCarrito.innerHTML = '';

//Forma rapida
//while (contenedorCarrito.firstChild) {
//contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//}
//}

//Fin del proyecto

//Proyecto 2. Simulador de envios de emails
// const email = document.querySelector('#email');
// const asunto = document.querySelector('#asunto');
// const mensaje = document.querySelector('#mensaje');
// const formulario = document.querySelector('#enviar-mail');
// const btnEnviar = document.querySelector('#enviar');
// const btnReset = document.querySelector('#resetBtn');
// const expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// eventListeners();
// function eventListeners(){
//   //Cuando inicia la app
//   document.addEventListener('DOMContentLoaded', iniciarApp);

//   //Campos del formulario
//   email.addEventListener('blur', validarFormulario);
//   asunto.addEventListener('blur', validarFormulario);
//   mensaje.addEventListener('blur', validarFormulario);

//   //Reinicia el formulario
//   btnReset.addEventListener('click', resetearFormulario);

//   //Enviar formulario
//   formulario.addEventListener('submit', enviarEmail);
// }

// //Funciones
// function iniciarApp(){
//   btnEnviar.disabled = true;
//   btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
// }

// function validarFormulario(e){
//   if(e.target.value.length > 0){
//     //console.log('Si hay algo');
//       //Elimina los errores...
//   const error = document.querySelector('p.error');
//   if(error){
//      error.remove();
//   }
//      e.target.classList.remove('border-2', 'border-rose-500')
//     e.target.classList.add('border-2', 'border-green-500');
//   }else{
//     e.target.classList.remove('border-2', 'border-green-500');
//     e.target.classList.add('border-2', 'border-rose-500');
//     mostrarError('Todos los campos son obligatorios');
//   }

//   if(e.target.type === 'email'){
//     if(expReg.test(e.target.value)){
//       //console.log('email valido');
//           //console.log('Si hay algo');
//           //Elimina los errores...
//           const error = document.querySelector('p.error');
//             if (error) {
//               error.remove();
//             }
//           e.target.classList.remove('border-2', 'border-rose-500')
//           e.target.classList.add('border-2', 'border-green-500');
//     }else{
//       e.target.classList.remove('border-2', 'border-green-500');
//     e.target.classList.add('border-2', 'border-rose-500');
//       mostrarError('Email no valido');
//     }
//   }

//   if(expReg.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
//     //console.log('Pasaste la validacion');
//     btnEnviar.disabled = false;
//     btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
//   }
// }

// function mostrarError(mensaje){
//   const mensajeError = document.createElement('p');
//   mensajeError.innerText = mensaje;
//   mensajeError.classList.add('border-2', 'border-rose-500', 'bg-red-200', 'text-red-600', 'p-3', 'mt-5', 'text-center', 'error');
//   const errores = document.querySelectorAll('.error');
//   if(errores.length === 0){
//     formulario.appendChild(mensajeError);
//   }
// }

// //Envia el email
// function enviarEmail(e){
//   e.preventDefault();
//   //console.log("Enviando...");
//   //Mostrar spinner
//   const spinner = document.querySelector('#spinner');
//   spinner.style.display = 'flex';

//   //Despues de 3 segundos ocultar el spinner y mostrar el mensaje
//   setTimeout( () => {
//     spinner.style.display = 'none';

//     //Mostrar mensaje que dice se envio correctamente
//     const parrafo = document.createElement('p');
//     parrafo.textContent = 'Se envio correctamente';
//     parrafo.classList.add('text-center', 'p-2', 'mt-8', 'bg-green-600', 'text-white', 'font-bold', 'uppercase')

//     //Inserta el parrafo antes del spinner
//     formulario.appendChild(parrafo, spinner);

//     setTimeout(() => {
//       parrafo.remove();//Elimina el mensaje de exito
//       resetearFormulario();
//       email.classList.remove('border-2', 'border-green-500');
//       asunto.classList.remove('border-2', 'border-green-500');
//       mensaje.classList.remove('border-2', 'border-green-500');
//     },4000);

//   }, 3000);
// }

//Funcion que resetea formulario
// function resetearFormulario(){
//   formulario.reset();

//   iniciarApp();
// }

//Fin de proyecto

//Proyecto 3. Filtrar y Buscar en base a diferentes Campos.
//Variables
// const marca = document.querySelector("#marca")
//  const year = document.querySelector("#year")
//  const minimo = document.querySelector("#minimo")
//  const maximo = document.querySelector("#maximo")
//  const puertas = document.querySelector("#puertas")
//  const transmision = document.querySelector("#transmision")
//  const color = document.querySelector("#color")
//  const resultado = document.querySelector("#resultado");

//  const max = new Date().getFullYear();
//  const min = max - 13 ;

//  const datosBusqueda = {
//    marca: '',
//    year: '',
//    minimo: '',
//    maximo: '',
//    puertas: '',
//    transmision: '',
//    color: ''
//  }

//  //Eventos
//  document.addEventListener('DOMContentLoaded', () => {
//    //Muestra los automoviles al cargar
//    mostrarAutos(autos);

//    //Llenar las opciones de años
//    llenarSelect();

//  });

//  marca.addEventListener('change', e => {
//    datosBusqueda.marca = e.target.value;
//    console.log(datosBusqueda);

//    filtrarAuto();
//  });
//  year.addEventListener('change', e => {
//    datosBusqueda.year = parseInt(e.target.value);
//    console.log(datosBusqueda);
//    filtrarAuto();
//  });
//  minimo.addEventListener('change', e => {
//    datosBusqueda.minimo = e.target.value;
//    console.log(datosBusqueda);
//    filtrarAuto();

//  });
//  maximo.addEventListener('change', e => {
//    datosBusqueda.maximo = e.target.value;
//    console.log(datosBusqueda);
//    filtrarAuto();

//  });
//  puertas.addEventListener('change', e => {
//    datosBusqueda.puertas = parseInt(e.target.value);
//    console.log(datosBusqueda);
//    filtrarAuto();

//  });
//  transmision.addEventListener('change', e => {
//    datosBusqueda.transmision = e.target.value;
//    console.log(datosBusqueda);
//    filtrarAuto();
//  });
//  color.addEventListener('change', e => {
//    datosBusqueda.color = e.target.value;
//    console.log(datosBusqueda);
//    filtrarAuto();
//  });

//  //Funciones
//  function mostrarAutos(autos){

//    limpiarHTML();

//    autos.forEach( auto => {
//    const {marca, modelo, year, precio, puertas, color, transmision} = auto;
//    const autosHTML = document.createElement('p');

//    autosHTML.textContent = `
//      ${marca} ${modelo} - ${year} - Precio $${precio} - ${puertas} Puertas - Transmision: ${transmision} - Color ${color}
//    `
//    resultado.appendChild(autosHTML);
//    });

//  }

//  function limpiarHTML(){
//    while(resultado.firstChild){
//      resultado.removeChild(resultado.firstElementChild);
//    }
//  }

//  function llenarSelect(){

//    for(let i = max; i >= min; i--){
//      const opcion = document.createElement('option');
//      opcion.value = i;
//      opcion.textContent = i;
//      year.appendChild(opcion);//Agregar las opciones del año al select
//    }
//  }

//  function filtrarAuto(){
//    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear).filter( filtrarMinimo).filter( filtrarMaximo).filter( filtrarPuertas).filter( filtrarTransmision).filter( filtrarColor);
//    console.log(resultado);

//    if(resultado.length){
//      mostrarAutos(resultado);
//    }else{
//      noResultado();
//    }
//  }

//  function noResultado(){
//    limpiarHTML();
//    const noResultado = document.createElement('div');
//    noResultado.classList.add('alerta', 'error');
//    noResultado.textContent = 'No hay resultados, intenta con otros terminos de búsqueda';
//    resultado.appendChild(noResultado);
//  }

//  function filtrarMarca(auto){
//    const {marca} = datosBusqueda;
//    if(marca){
//      return auto.marca === marca;
//    }

//    return auto;
//  }

//  function filtrarYear(auto){
//    const {year} = datosBusqueda;
//    if(year){
//      return auto.year === year;
//    }
//    return auto;
//  }

//  function filtrarMinimo(auto){
//    const {minimo} = datosBusqueda;
//    if(minimo){
//      return auto.precio >= minimo;
//    }
//    return auto;
//  }

//  function filtrarMaximo(auto){
//    const {maximo} = datosBusqueda;
//    if(maximo){
//      return auto.precio <= maximo;
//    }
//    return auto;
//  }

//  function filtrarPuertas(auto){
//    const {puertas} = datosBusqueda;
//    if(puertas){
//      return auto.puertas === puertas;
//    }
//    return auto
//  }

//  function filtrarTransmision(auto){
//    const {transmision} = datosBusqueda;
//    if(transmision){
//      return auto.transmision === transmision;
//    }
//    return auto;
//  }

//  function filtrarColor(auto){
//    const {color} = datosBusqueda;
//    if(color){
//      return auto.color === color;
//    }
//    return auto;
// }

// Fin del proyecto

//Local storage
//Ingresar datos en el local storage

// localStorage.setItem("Nombre", "Fernando");

// const producto = {
//   nombre: "Monitor 24 pulgadas",
//   precio: 2500
// }

// const productoString = JSON.stringify(producto);
// localStorage.setItem("Producto", productoString);

// const nombres = ["Fernando", "Elena", "Fatima", "Leonel"];

// const nombresString = JSON.stringify(nombres);
// localStorage.setItem("Nombres", nombresString);

// const carrosString = JSON.stringify(['Audi', 'BMW', 'Chevrolet', 'Ford']);
// localStorage.setItem('Carros', carrosString);

// //Obtener datos del local Storage

// const getNombre = localStorage.getItem("Nombre");
// console.log(getNombre);

// const getProducto = localStorage.getItem("Producto");
// console.log(getProducto);

// const getNombres = localStorage.getItem("Nombres");
// console.log(getNombres);

// const getCarros = localStorage.getItem('Carros');
// console.log(getCarros);

// const convertirNombres = JSON.parse(getNombres);
// console.log(convertirNombres);

// const convertirProducto = JSON.parse(getProducto);
// console.log(convertirProducto);

// const convertirCarros = JSON.parse(getCarros);
// console.log(convertirCarros);

// //Eliminar datos de local storage
// localStorage.removeItem("Nombre");

// //Actualizar un registro

// const nombresJSON = JSON.parse(localStorage.getItem("Nombres"));
// console.log(nombresJSON);
// nombresJSON.push("Nuevo nombre");
// console.log(nombresJSON);
// localStorage.setItem("Nombres", JSON.stringify(nombresJSON));

// const productoJSON = JSON.parse(localStorage.getItem("Producto"));
// productoJSON.color = "Negro";
// productoJSON.input = "HDMI";
// localStorage.setItem("Producto", JSON.stringify(productoJSON));

// const carrosJSON = JSON.parse(localStorage.getItem('Carros'));
// carrosJSON.push('Nuevo carro');
// console.log(carrosJSON);
// localStorage.setItem('Carros', JSON.stringify(carrosJSON));

// //Elimina todo el local storage
// //localStorage.clear();

// Fin local storage

//Proyecto 4. Almacenar textos en local storage

// const formulario = document.querySelector("#formulario");
// const listaTareas = document.querySelector("#lista-tareas");
// let tareas = [];

// //Event listeners
// eventListeners();

// function eventListeners(){
//   //Cuando el usuario agrega una nueva tarea
//   formulario.addEventListener('submit', agregarTarea);

//   //Cuando el documento esta listo
//   document.addEventListener('DOMContentLoaded', () =>{
//     tareas = JSON.parse(localStorage.getItem('Tareas')) || [];
//     console.log(tareas);
//     crearHTML();
//   });

// }

// //Funciones

// function agregarTarea(e){
//   e.preventDefault();
//   // console.log("CLick en el formulario")

//   //textArea donde el usuario escribe la tarea
//   const tarea = document.querySelector('#tarea').value;
//   console.log(tarea);

//   //Validacion
//   if(tarea === ''){
//     mostrarError("No puede ir tarea vacia");
//     return;//Evita que se ejecuten más lineas de codigo
//   }

//   const tareaObj = {
//     id: Date.now(),
//     tarea
//   }

//   // console.log("Agregando tarea...")
//   //Añadir el arreglo de tareas

//   tareas = [...tareas, tareaObj];
//   // console.log(tareas);

//   //Una vez agregado vamos a crear el HTML
//   crearHTML();

//   //Reiniciar el formulario
//   formulario.reset();
// }

// //Mostrar mensaje de error
// function mostrarError(error){
//   const mensajeError = document.createElement('p');
//   mensajeError.textContent = error
//   mensajeError.classList.add('error');

//   //Insertarlo en el contenido
//   const contenido = document.querySelector('#contenido');
//   contenido.appendChild(mensajeError);

//   setTimeout(() =>{
//     mensajeError.remove();
//   },3000)
// }

// //Muestra un listado de las tareas
// function crearHTML(){

//   limpiarHTML();

//   if(tareas.length > 0){
//     tareas.forEach( tarea => {
//       //Agregar un boton de eliminar
//       const btnEliminar = document.createElement('a');
//       btnEliminar.classList.add('borrar-tarea');
//       btnEliminar.innerText = 'X';

//       //Añadir la funcion de eliminar
//       btnEliminar.onclick = () => {
//         borrarTarea(tarea.id);
//       }

//       //Crear HMTL
//       const li = document.createElement('li');

//       //Añadir el texto
//       li.innerText = tarea.tarea;

//       //Asignar el boton de eliminar
//       li.appendChild(btnEliminar);

//       //Insertarlo en el HTML
//       listaTareas.appendChild(li);
//     });
//   }

//   sincronizarStorage();
// }

// //Agregar las tareas actuales a localStorage
// function sincronizarStorage(){
//   localStorage.setItem('Tareas', JSON.stringify(tareas))
// }

// //Eliminar una tarea
// function borrarTarea(id){
//   console.log("Borrando...", id);
//   tareas = tareas.filter( tarea => tarea.id !== id)
//   // console.log(tareas);
//   crearHTML();
// }

// //Limpiar HTML
// function limpiarHTML(){
//   while(listaTareas.firstChild){
//     listaTareas.removeChild(listaTareas.firstChild);
//   }
// }

//Proyecto 5. carrito de compras con local storage
// const carrito = document.querySelector('#carrito1');
// const contenedorCarrito = document.querySelector('#lista-carrito tbody');
// const vaciarCarrito = document.querySelector('#vaciar-carrito');
// const listaCursos = document.querySelector('#lista-cursos');
// let articulosCarrito = []; // Inicializar como un array vacío

// cargarEventos();
// function cargarEventos(){
//  // Cuando agrega un curso presionando "Agregar carrito".
//   listaCursos.addEventListener('click', agregarCurso);

//  // Elimina cursos del carrito
//   contenedorCarrito.addEventListener('click', eliminarCurso);

// //Agregar el carrito en el local storage
//   document.addEventListener('DOMContentLoaded', () => {
//     articulosCarrito = JSON.parse(localStorage.getItem('Carrito')) || [];
//     console.log(articulosCarrito);
//     carritoHTML();
//   });

//   //Vaciar el carrito
//   vaciarCarrito.addEventListener('click', () =>{
//     articulosCarrito = [];
//     limpiarHTML();//Eliminamos el HTML
//   })
// }

// //Funciones
// function agregarCurso(e){
//   e.preventDefault();
//   if(e.target.classList.contains('agregar-carrito')){
//     const cursoSeleccionado = e.target.parentElement;
//     leerDatosCurso(cursoSeleccionado);
//   }
// }

// //Elimina curso del carrito
// function eliminarCurso(e) {
//   if (e.target.classList.contains('borrar-curso')) {
//     const cursoId = e.target.getAttribute("data-id");

//     //Buscar el curso por su id en el carrito
//     const cursoEnCarrito = articulosCarrito.find(curso => curso.id === cursoId);

//     if (cursoEnCarrito) {
//       if (cursoEnCarrito.cantidad > 1) {
//        // Si hay más de uno, simplemente reducir la cantidad
//         cursoEnCarrito.cantidad--;
//       } else {
//        // Si solo hay uno, eliminar el curso del carrito
//         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
//       }
//       carritoHTML(); // Actualizar la visualización del carrito
//     }
//   }
// }

// //Click y extrae informacion del curso
// function leerDatosCurso(curso){
//    // Si el curso no existe, agrégalo al carrito
//     const infoCurso = {
//       imagen: curso.querySelector('img').src,
//       titulo: curso.querySelector('h4').textContent,
//       precio: curso.querySelector('.precio').textContent,
//       id: curso.querySelector('a').getAttribute('data-id'),
//       cantidad: 1
//     };
//   // Verificar si el curso ya está en el carrito
//   const cursoExistente = articulosCarrito.some(curso => curso.id === infoCurso.id);
//   if(cursoExistente){
//    // Actualizamos la cantidad
//     const cursos = articulosCarrito.map(curso => {
//       if(curso.id === infoCurso.id){
//         curso.cantidad++;
//         return curso;//Retorna el objeto actualizado
//       }else{
//         return curso;
// //Retorna los objetos que no son los duplicados.
//       }
//     });
//     articulosCarrito = [...cursos];
//   }else{
//      // Agrega elementos al arreglo del carrito
//     articulosCarrito = [...articulosCarrito, infoCurso];
//   }
//   carritoHTML();
// }

// //Muestra el carrito de compras en el HTML
// function carritoHTML(){
//   //Limpiar el HTML
//   limpiarHTML();

//   //Recorre el carrito y general el HTML
//   articulosCarrito.forEach(curso => {
//     //Destructuracion de curso
//     const {imagen, titulo, precio, cantidad, id} = curso
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>
//        <img src="${imagen}" / width=50>
//       </td>
//       <td>${titulo}</td>
//       <td>${precio}</td>
//       <td>${cantidad}</td>
//       <td>
//         <a href="#" data-id="${id}" class="btn btn-danger borrar-curso"> X </a>
//       </td>
//     `;

//     //Agregar el HTML del carrito en el tbody
//     contenedorCarrito.appendChild(row);
//   });

//   sincronizarLocalStorage();
// }

// function sincronizarLocalStorage(){
//   localStorage.setItem('Carrito', JSON.stringify(articulosCarrito));
// }

// //Elimina los cursos del tbody
// function limpiarHTML(){
//   //Forma lenta
//   contenedorCarrito.innerHTML = '';

//   //Forma rapida
//   while (contenedorCarrito.firstChild) {
//     contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//   }
// }

//Fin del proyecto

//Fechas en javaScript
// const diaHoy = new Date();
// let valor;

// valor = diaHoy;
// valor = diaHoy.getFullYear();
// valor = diaHoy.getMonth();
// valor = diaHoy.getMinutes();
// valor = diaHoy.getHours();
// valor = diaHoy.getTime();

// console.log(valor);

// //Uso de librería moment.js(Es para dar formato a fecha y hora)

// moment.locale('es');

// let mometFormat1 = moment().format('Do MMMM YYYY h:mm:ss a');
// console.log(mometFormat1);

// let momentFormat2 = moment().format('LLLL', diaHoy);
// console.log(momentFormat2);

// let momentFormat3 = moment().add(3, 'days').calendar();
// console.log(momentFormat3);

//Fin de fechas

//Prototypes o prototipos
// const cliente = {
//nombre: "Fernando",
// saldo: 900
// }

// console.log(cliente);
// console.log(typeof cliente);

// function Cliente(nombre, saldo){
//this.nombre = nombre;
//this.saldo = saldo;
// }

// const cliente1 = new Cliente("Fernando", 11000);
// console.log(cliente1);
// console.log(typeof cliente1);

// const cliente2 = new Cliente("Elena", 8500);
//console.log(cliente2);

// function formatearcliente(cliente){
// const {nombre, saldo} = cliente;
//return `${nombre} tiene un saldo de ${saldo} pesos`;
// }

// console.log(formatearcliente(cliente1));

// function formatearEmpresa(empresa){
// const {nombre, saldo, categoria} = empresa;
//  return `${nombre} tiene un saldo de ${saldo} pesos con categoria ${categoria}`;
// }

// function Empresa(nombre, saldo, categoria){
//this.nombre = nombre;
//this.saldo = saldo;
//this.categoria = categoria;
// }

//const empresa1 = new Empresa("Fernando", 10900, "Soporte TI");

//console.log(formatearEmpresa(empresa1));

//Cliente.prototype.tipoCliente = function(){
//console.log('Desde el nuevo prototype');
//  let tipo;
//  if(this.saldo > 10000){
//    tipo = 'Gold';
//  }else if(this.saldo > 5000){
//    tipo = 'Platino';
//  }else{
// tipo = 'Normal';
//  }
// return tipo;
//}

//Cliente.prototype.nombreClienteSaldo = function(){
//return `Nombre: ${this.nombre}, Saldo:$${this.saldo}, Tipo cliente: ${this.tipoCliente()}.`
//}

//Cliente.prototype.retirarSaldo = function(retiro){
//return this.saldo -= retiro;
//}

//console.log(cliente1.tipoCliente());
//console.log(cliente1.nombreClienteSaldo());
//cliente1.retirarSaldo(1000);
//console.log(cliente1.nombreClienteSaldo());

//Herencia de prototipos
//function Persona(nombre, saldo, telefono){
//Cliente.call(this, nombre, saldo);
//this.telefono = telefono;
//}

//Persona.prototype = Object.create(Cliente.prototype);
//Persona.prototype.constructor = Cliente;

//Persona.prototype.mostrarTelefono = function(){
//return `El telefono de esta persona es ${this.telefono}.`
//}

//const persona1 = new Persona('Fernando', 9500, 5566778899);
//console.log(persona1);
//console.log (persona1.mostrarTelefono());

//Fin de los prototipos

//Proyecto 6. Cotizador con prototypes
//constructor
// function Seguro(marca, year, tipo){
//   this.marca = marca;
//   this.year = year;
//   this.tipo = tipo;
// }

// //Realiza la cotización con los datos
// Seguro.prototype.cotizarSeguro = function(){
//   /*
//   1.Americano = 1.15
//   2.Asiatico = 1.05
//   3.Europeo = 1.35
//   */
//   console.log(this.marca);

//   let cantidad;
//   const base = 2000;

//   switch (this.marca) {
//     case '1':
//       cantidad = base * 1.15;
//       break;
//     case '2':
//       cantidad = base * 1.05
//       break;
//     case '3':
//       cantidad = base * 1.35
//       break;

//     default:
//       break;
//   }

//   //Leer el año
//   const diferencia = new Date().getFullYear() - this.year;

//   //Cada añoque la diferencia es mayor, el costo va a reducirse un 3%
//   cantidad -= ((diferencia * 3) * cantidad) / 100;

//   /*
//     Si el seguro es basico se multiplica por un 30% mas
//     Si el seguro es completo se multiplica por un 50% mas
//   */

//   if(this.tipo === 'basico'){
//     cantidad *= 1.30;
//   }else{
//     cantidad *= 1.50;
//   }

//   return Math.round(cantidad);

//   console.log(Math.floor(cantidad));
// }

// function UI(){}

// //Llena las opciones de los años
// UI.prototype.llenarOpciones = () => {
//   const max = new Date().getFullYear();
//   const min = max - 23;
//   const selectYear = document.querySelector('#year');

//   for(let i = max; i > min; i--){
//     let option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//     selectYear.appendChild(option);
//   }
// }

// UI.prototype.mostrarMensaje = (mensaje,tipo) => {
//   const div = document.createElement('div');

//   if(tipo === 'error'){
//     div.classList.add('error');
//   }else{
//     div.classList.add('correcto');
//   }

//   div.classList.add('mensaje', 'mt-10');
//   div.innerText = mensaje;

//   //Insertar en el html
//   const formulario = document.querySelector('#cotizar-seguro');
//   formulario.insertBefore(div, document.querySelector('#resultado'));

//   setTimeout(()=>{
//     div.remove();
//   },3000)
// }

// UI.prototype.mostrarResultado = (total, seguro) => {
//   //Crear resultado
//   const {marca, year, tipo} = seguro;

//   let textoMarca;

//   switch(marca){
//     case '1':
//       textoMarca = 'Americano';
//       break;
//     case '2':
//       textoMarca = 'Asiatico';
//       break;
//     case '3':
//       textoMarca = 'Europeo';
//     default:
//       break;
//   }

//   const div = document.createElement('div');
//   div.classList.add('mt-10');

//   div.innerHTML = `
//     <p class="header">Tu resumen</p>
//     <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
//     <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
//     <p class="font-bold">Tipo de seguro: <span class="font-normal capitalize">${tipo}</span></p>
//     <p class="font-bold">Total:$<span class="font-normal">${total}</span></p>
//   `;

//   const resultadoDiv = document.querySelector('#resultado');

//   const spinner = document.querySelector('#cargando');
//   spinner.style.display = 'block';

//   setTimeout(() =>{
//     spinner.style.display = 'none';//Se remueve el spinner
//     resultadoDiv.appendChild(div);//Se mostrara el resultado cuando se quite el spinner
//   },3000)
// }

// const ui = new UI();
// console.log(ui);

// document.addEventListener('DOMContentLoaded', () => {
//   ui.llenarOpciones(); //Llena el select con los años...
// })

// eventListeners();
// function eventListeners(){
//   const formulario = document.querySelector('#cotizar-seguro');
//   formulario.addEventListener('submit', cotizarSeguro);
// }

// function cotizarSeguro(e){
//   e.preventDefault();

//   //Leer la marca seleccionada
//   const marca = document.querySelector('#marca').value;

//   //Leer el año seleccionado
//   const year = document.querySelector('#year').value;

//   //Leer el tipo seleccionado
//   const tipo = document.querySelector('input[name="tipo"]:checked').value;
//   console.log(tipo);

//   if(marca === '' || year === '' || tipo === ''){
//    // console.log('No paso la prueba');
//    ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
//    return;
//   }
//   ui.mostrarMensaje('Cotizando...', 'exito');

//   //Ocultar las cotizaciones previas
//   const resultados = document.querySelector('#resultado div');
//   if(resultados != null){
//     resultados.remove();
//   }

//   //Instanciar el seguro
//   const seguro = new Seguro(marca, year, tipo);
//   const total = seguro.cotizarSeguro();
//   // console.log(seguro);
//   // seguro.cotizarSeguro();

//   //Utilizar el prototype que va a cotizar
//   ui.mostrarResultado(total, seguro);

// }

//Fin de proyecto

//Programación orientada a objetos

//Primera forma de declarar e instanciar una clase
// class Cliente1 {
//   constructor(nombre, saldo) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//   }
//   //Forma de crear metodos
//   mostrarInformacion() {
//     return `Cliente: ${this.nombre}, su saldo es de $${this.saldo}.`;
//   }
// }

// const fernando = new Cliente1("Fernando", 400);
// console.log(fernando);
// console.log(fernando.mostrarInformacion());

// //Segunda forma de declarar e instanciar una clase
// const Cliente2 = class {
//   constructor(nombre, saldo) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//   }
//   //Forma de crear metodos
//   mostrarInformacion() {
//     return `Cliente: ${this.nombre}, su saldo es de $${this.saldo}.`;
//   }
// };

// const fernando2 = new Cliente2("Fernando", 500);
// console.log(fernando2);
// console.log(fernando2.mostrarInformacion());

// //Herencia

// class Empresa extends Cliente1 {
//   constructor(nombre, saldo, telefono, categoria) {
//     super(nombre, saldo);
//     this.telefono = telefono;
//     this.categoria = categoria;
//   }
// }

// const empresa1 = new Empresa("Programador", 1200, 5566778899, "Programacion");
// console.log(empresa1);

// //Propiedades privadas
// class Persona{
//   #telefono//El # hace los atributos privados
//   constructor(nombre, telefono){
//     this.nombre = nombre;
//     this.#telefono = telefono;
//   }

//   mostrarInformacion(){
//     return `Cliente: ${this.nombre}, su telefono es ${this.#telefono}.`;
//   }
// }

// const persona1 = new Persona("Fernando", 5527283990);
// console.log(persona1);
//console.log(persona1.#telefono);//Private field #telefono must be declared in an enclosing class.
// console.log(persona1.mostrarInformacion());

//Fin de programacion orientada a objetos.

//Proyecto 7. Administracion de presupuesto con clases.















































































