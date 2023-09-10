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

console.log('Metodos de arreglos');

const autos = [
        {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
        {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},{marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
        {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},{marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
        {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},{marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
        {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},{marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
        {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
        {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},{marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
        {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
        {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},{marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
        {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
        {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},{marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
        {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
        {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

console.log('Metodo for loop');
for (let i = 0; i < autos.length; i++) {
  console.log(autos[i])
}

console.log('Metodo ForEach');
const autos1 = autos.forEach(auto => console.log(auto))

console.log('Metodo map');

const marcas = autos.map(auto => {
  return auto.marca.toString().toUpperCase();
});

console.log(marcas)
//Método sort sirve para ordenar los arrays en orden alfabético.
console.log("Metodo sort");
console.log( marcas.sort())

console.log('Metodo filter');
const autosRojos = autos.filter(auto => auto.color === 'Rojo'
);
console.log(autosRojos);

const autos2018 = autos.filter(auto => auto.year ===2018);
console.log(autos2018);

const cuatroPuertas = autos.filter(auto => auto.puertas === 4);
console.log(cuatroPuertas);

const autoAutomatico = autos.filter(auto => auto.transmision === 'automatico');
console.log(autoAutomatico);

const marcaBMW = autos.filter(auto => auto.marca === 'BMW');
console.log(marcaBMW);

const mayores30mil = autos.filter(auto => auto.precio > 30000);
console.log(mayores30mil);

const rangoAutos = autos.filter(auto => auto.year >= 2015 && auto.year <=2017);
console.log(rangoAutos);

console.log('Metodo find');
const primerResultado = autos.find(auto => auto.marca === 'BMW');
console.log(primerResultado);

console.log('Metodo reduce');
const totalInventarios = autos.reduce((total,auto) => total + auto.precio,0);
console.log(`$${totalInventarios}`);

console.log('Metodo some');
const existe1 = autos.some(auto => auto.marca === 'Ferrari');
console.log(`Hay marca Ferrari ? ${existe1}`);

const existe2 = autos.some(auto => auto.marca === 'BMW');
console.log(`Hay marca BMW ? ${existe2}`);

//Programacion Orientada a Objetos
console.log("Programacion Orientada a Objetos");
console.log("Clases");
class Pelicula{
 constructor(id, nombre){
   this.id = id;
   this.nombre = nombre;
 } 

  reproducir(){
    return `Reproduciendo pelicula ${this.nombre}`
  }
  
}

const pelicula1 = new Pelicula(1,"Harry Potter");
console.log(pelicula1);
console.log(pelicula1.reproducir());

const pelicula2 = new Pelicula(2,"Hombre Araña");
console.log(pelicula2);
console.log(pelicula2.reproducir());

//Herencia
console.log("Herencia");
class Serie extends Pelicula{
  constructor(id, nombre, genero, capitulo){
    super(id, nombre)
    this.genero = genero;
    this.capitulo = capitulo;
  }

  reproducirCapitulo(){
    return `Reproduciendo serie ${this.nombre} en el capitulo ${this.capitulo}`
  }
}

const serie1 = new Serie(1,"Mr.Robot","Suspenso",10);
console.log(serie1);
console.log(serie1.reproducirCapitulo());

const serie2 = new Serie(2,"El juego del calamar","Drama",23);
console.log(serie2);
console.log(serie2.reproducirCapitulo());

//Introduccion a Arrays
const array1 = [3,4,true,"Javascript", "React"];

console.table(array1);
console.log(array1[3]);
console.log(array1.length);

//Manipulacion de arrays
const tecnologias = ["HTML","CSS","JavaScript","React"];
//Añadir elementos
tecnologias.push("GraphQL");//Lo agrega al final del arreglo
console.table(tecnologias);
//Añadirlo al inicio del arreglo
tecnologias.unshift("Pseint");
console.table(tecnologias);

const nuevoArreglo1 = [...tecnologias, "Pseint"];//Lo añade al ultimo
console.table(nuevoArreglo1);
const nuevoArreglo2 = ["Pseint", ...tecnologias];//Lo añade al inicio
console.table(nuevoArreglo2);

//Eliminar elemento final de un arreglo
nuevoArreglo1.pop()
console.table(nuevoArreglo1)













































































































































