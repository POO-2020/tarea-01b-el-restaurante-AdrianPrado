export default class Fecha {
    /**
     * @param {number} dia dia del año
     * @param {number} mes mes del año
     * @param {number} año año del año
     */
    constructor(dia, mes, año) {
        this.fecha = new Date(año, mes-1, dia);
        this.diaS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        this.mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    }

    getAños(){
        let result = this.fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return result
    }

    getMeses(){
        return this.getAños() * 12
    }

    getSemanas(){
        return this.getMeses() * 4
    }

    getDias(){
        return this.getSemanas() * 7
    }

    getFecha(){
        let fechaFormato = `${this.fecha.getDate()}/${this.mes[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`
        return fechaFormato
    }
    
    getDiaFecha(){
        let getDiaFecha = this.diaS[this.fecha.getDay()]
        return getDiaFecha
    }
}