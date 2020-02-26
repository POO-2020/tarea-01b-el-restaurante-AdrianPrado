import Precio from "./precio.js"

export default class Producto{
    /**
     * 
     * @param {string} nombre 
     * @param {Precio} precio 
     */
    constructor(nombre, precio){
        this.nombres = nombre
        this.precios = precio
    }
    getDescripcion(){
        return `${this.nombres} ${this.precios.getPrecio()}`
    }
}