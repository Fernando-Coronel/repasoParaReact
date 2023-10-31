import {Cliente} from './cliente.js'

//Herencia de clase Cliente
export class Empresa extends Cliente{
  constructor(nombre, ahorro, categoria){
    super(nombre, ahorro)
    this.categoria = categoria
  }
}
































































