import Precio from "./precio.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Direccion from "./direccion.js"

class Main{
    pedido1;
    probarPrecio() {
        console.log('------Precio------')
        this.valores = new Precio(127.50)
        console.log(`${this.valores.getPrecio()}`)
    }

    probarFecha () {
        console.log('------Fecha------')
        let fecha = new Fecha(22,5,2022)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    probarTiempo() {
        console.log('------Tiempo------')
        let hora1 = new Tiempo(8, 30, "am")
        let hora2 = new Tiempo(8, 30, "pm")

        console.log(hora1.getFormato12())
        console.log(hora2.getFormato24())
    }
    probarDireccion(){
        console.log('------Direccion------')
        this.domicilios = new Direccion("Monthatlan", 249, 0, "Villa Izcalli", 28979, "Colima", "Villa de Alvarez")
        console.log(`${this.domicilios.getFormatoCorto()}`)
        console.log(`${this.domicilios.getFormatoExtendido()}`)
    }

    probarCliente() {
        console.log('------Cliente------')
        this.clientes = new Cliente("Jose Adrian Mendez Prado", this.domicilios, 3121115653)
        console.log(`${this.clientes.getPerfil()}`)
    }

    probarProducto(){
        console.log('------Producto------')
        this.productos = new Producto("Hamburguesa Especial", this.valores)
        console.log(`${this.productos.getDescripcion()}`)
    }

    probarElementoPedido(){
        console.log('------Elemento Pedido------')
        let pedido1 = new ElementoPedido(new Producto("Hamburguesa Suprema", new Precio(99.90)),3)
        console.log(pedido1.getDescripcion())
    }

    probarPedido(){
        console.log('------Pedido------')
        let elemento = new ElementoPedido(new Producto("Hamburguesa Costeña", new Precio (120.99)), 3)
        let elemento2 = new ElementoPedido(new Producto("Hamburguesa Costeña", new Precio (120.99)), 3)
        let aa = new Pedido(new Fecha(10,11,2020),new Tiempo(10,10,"AM"), new Cliente("Jose Adrian Mendez Prado"), new Direccion("Monthatlan", "249", "", "Villa Izcalli", "28979", "Colima", "Villa de Alvarez"))
        
        aa.agregarElemento(elemento)
        aa.agregarElemento(elemento2)
        aa.listarElementos()
        
    }

    probarRestaurante(){
        console.log('------Restaurante------')
        let cantidad1 = 2
        let cantidad2 = 4
        this.producto1 = new ElementoPedido(cantidad1,new Producto("Hamburguesa Suprema", new Precio(150))) 
        this.producto2 = new ElementoPedido(cantidad2, new Producto("Hamburguesa Clasica", new Precio(110)))
        let pedido1 = new Pedido(new Fecha(25,2,2020),new Tiempo(4,30,"pm"),new Cliente("Adrian Mendez Prado"),new Direccion ("Monthatlan","249","0","Villa Izcalli","28979","Colima","Villa de Alvarez"), "3121115653")
        let restaurante = new Restaurante("Serendipia", "3147049", new Direccion("Prolongacion Hidalgo","974","","Villas Bugambilias","28979","Colima", "Villa de Alvarez"))
        restaurante.registrarProducto(this.producto1)
        restaurante.registrarProducto(this.producto2)
        pedido1.agregarElemento(pedido1)
        restaurante.listarProductos()
        restaurante.listarPedidos()
        
        
    }
}

let app = new Main()

app.probarFecha()
app.probarTiempo()
app.probarPrecio()
app.probarDireccion()
app.probarCliente()
app.probarProducto()
app.probarElementoPedido()
app.probarPedido()
app.probarRestaurante()