export default class Tiempo {

    /**
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
    constructor(hora, minutos, periodo = "am") {
        this.hora = hora
        this.minutos = minutos
        this.periodo = periodo.toLowerCase()
    }

    getFormato12() {
        return `${this.hora}:${this.minutos} ${this.periodo}`
    }

    getFormato24() {
        let hora = this.hora
        if(this.periodo === "pm"){
            hora = hora + 12
            return `${hora}: ${this.minutos} ${this.periodo}`
        }
        else{
            return `${this.hora}:${this.minutos} ${this.periodo}`
        }
    }

}