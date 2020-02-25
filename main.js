import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"


class Main {
    
    probarFecha () {
        let fecha = new Fecha(22,5,2022)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    probarTiempo() {
        let hora1 = new Tiempo(7, 50, "am")
        let hora2 = new Tiempo(8, 23, "pm")

        console.log(hora1.getFormato12())
        console.log(hora2.getFormato24())

    }
}
let app = new Main()

app.probarFecha()
app.probarTiempo() 