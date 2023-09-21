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
nuevoArreglo1.pop();
console.table(nuevoArreglo1);


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

//Base de datos empleados
const empleados = [
  {
    "nombre": "Juan Pérez",
    "puesto": "Gerente de Ventas",
    "salario": 60000,
    "departamento": "Ventas"
  },
  {
    "nombre": "María García",
    "puesto": "Desarrollador Senior",
    "salario": 75000,
    "departamento": "Tecnología"
  },
  {
    "nombre": "Pedro López",
    "puesto": "Contador",
    "salario": 55000,
    "departamento": "Finanzas"
  },
  {
    "nombre": "Ana Rodríguez",
    "puesto": "Diseñadora Gráfica",
    "salario": 48000,
    "departamento": "Diseño"
  },
  {
    "nombre": "Luis Torres",
    "puesto": "Analista de Datos",
    "salario": 62000,
    "departamento": "Tecnología"
  },
  {
    "nombre": "Carmen Martínez",
    "puesto": "Recursos Humanos",
    "salario": 50000,
    "departamento": "Recursos Humanos"
  },
  {
    "nombre": "Javier Sánchez",
    "puesto": "Especialista en Marketing",
    "salario": 58000,
    "departamento": "Marketing"
  },
  {
    "nombre": "Laura González",
    "puesto": "Asistente Administrativo",
    "salario": 42000,
    "departamento": "Administración"
  },
  {
    "nombre": "Miguel Ríos",
    "puesto": "Ingeniero de Soporte",
    "salario": 56000,
    "departamento": "Tecnología"
  },
  {
    "nombre": "Isabel Castro",
    "puesto": "Analista de Finanzas",
    "salario": 59000,
    "departamento": "Finanzas"
  }
];

empleados.map(empleado => console.log(empleado));


//Bases de datos de autos
const carros = [
  {
    "marca": "Toyota",
    "modelo": "Corolla",
    "año": 2022,
    "precio": 25000,
    "color": "Blanco"
  },
  {
    "marca": "Honda",
    "modelo": "Civic",
    "año": 2022,
    "precio": 26000,
    "color": "Negro"
  },
  {
    "marca": "Ford",
    "modelo": "F-150",
    "año": 2022,
    "precio": 35000,
    "color": "Gris"
  },
  {
    "marca": "Chevrolet",
    "modelo": "Camaro",
    "año": 2022,
    "precio": 42000,
    "color": "Rojo"
  },
  {
    "marca": "Volkswagen",
    "modelo": "Jetta",
    "año": 2022,
    "precio": 28000,
    "color": "Plata"
  },
  {
    "marca": "Nissan",
    "modelo": "Altima",
    "año": 2022,
    "precio": 27000,
    "color": "Azul"
  },
  {
    "marca": "BMW",
    "modelo": "X5",
    "año": 2022,
    "precio": 55000,
    "color": "Blanco"
  },
  {
    "marca": "Mercedes-Benz",
    "modelo": "C-Class",
    "año": 2022,
    "precio": 52000,
    "color": "Negro"
  },
  {
    "marca": "Audi",
    "modelo": "A4",
    "año": 2022,
    "precio": 49000,
    "color": "Gris"
  },
  {
    "marca": "Hyundai",
    "modelo": "Elantra",
    "año": 2022,
    "precio": 26000,
    "color": "Plateado"
  }
];

carros.map(carro => console.log(carro));

const gris = carros.filter( carro => carro.color === "Gris");
console.log(gris)

const ford = carros.some(carro => carro.marca === 'Ford');
console.log(`Hay marca Ford ? ${ford}`);

const marcas1 = carros.map(carro => {
  return carro.marca.toString().toUpperCase();
});
console.log(marcas1.sort());
// console.log(marcas1.sort());

const libros = [
  {
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "genero": "Realismo mágico",
    "anio_publicacion": 1967,
    "isbn": "978-84-376-0494-7"
  },
  {
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "Ciencia ficción",
    "anio_publicacion": 1949,
    "isbn": "978-0451524935"
  },
  {
    "titulo": "El Gran Gatsby",
    "autor": "F. Scott Fitzgerald",
    "genero": "Ficción",
    "anio_publicacion": 1925,
    "isbn": "978-0-7432-7356-5"
  },
  {
    "titulo": "Matar un ruiseñor",
    "autor": "Harper Lee",
    "genero": "Novela",
    "anio_publicacion": 1960,
    "isbn": "978-0061120084"
  },
  {
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "Novela de caballerías",
    "anio_publicacion": 1605,
    "isbn": "978-8491041882"
  },
  {
    "titulo": "En busca del tiempo perdido",
    "autor": "Marcel Proust",
    "genero": "Novela",
    "anio_publicacion": 1913,
    "isbn": "978-84-376-0494-7"
  },
  {
    "titulo": "Crimen y castigo",
    "autor": "Fyodor Dostoevsky",
    "genero": "Novela",
    "anio_publicacion": 1866,
    "isbn": "978-0143107637"
  },
  {
    "titulo": "Ulises",
    "autor": "James Joyce",
    "genero": "Ficción",
    "anio_publicacion": 1922,
    "isbn": "978-0394700135"
  },
  {
    "titulo": "Los juegos del hambre",
    "autor": "Suzanne Collins",
    "genero": "Ciencia ficción",
    "anio_publicacion": 2008,
    "isbn": "978-8427202122"
  },
  {
    "titulo": "Orgullo y prejuicio",
    "autor": "Jane Austen",
    "genero": "Novela",
    "anio_publicacion": 1813,
    "isbn": "978-0141439518"
  }
];

libros.map( libro => console.log(libro));

























































































































