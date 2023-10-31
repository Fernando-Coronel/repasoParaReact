// (function(){
//   console.log('Desde un iife')
//   })();

export const nombreCliente = 'Fernando';
export const ahorro = 200

//Exportar funciones
export function mostrarInformacion(nombre, ahorro){
  return `Cliente: ${nombre} - Ahorro:$${ahorro}.`;
}

export function tieneSaldo(ahorro){
  if(ahorro > 0){
    console.log('Si tiene saldo');
  }else{
    console.log('No tiene saldo');
  }
}

//Exportar una clase
export class Cliente{
  constructor(nombre, ahorro){
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarInformacion(){
    return `Cliente: ${this.nombre} - Ahorro:$${this.ahorro}.`;
  }
}

//Exportar un default y alias a los imports
export default function nuevaFuncion(){
  console.log('Este es el export default');
}






















































































