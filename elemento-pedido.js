import Producto from "./producto.js"
import Precio from "./precio.js"
export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    getDescripcion(){
        let precioFinal = this.cantidad * this.producto.precios.valor
        return `${this.cantidad} x ${this.producto.nombres} $${new Intl.NumberFormat("en-US").format(precioFinal)}`
    }
}