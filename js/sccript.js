class Empleado{
    constructor(nombre, apellido, genero, fechaNacimiento, foto, fechaIngreso, salarioBasico){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.foto = foto;
        this.fechaIngreso = fechaIngreso;
        this.salario = salario;
    }
    calcularEdad(){
        const fechaNacimiento = new Date(this.fechaNacimiento);
        const ahora = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        return edad;
    }
    calcularAntiguedad(){
        const fechaIngreso = new Date(this.fechaIngreso);
        const hoy = new Date();
        const antiguedad = hoy.getFullYear() - fechaIngreso.getFullYear();
        return antiguedad;
    }
    calcularPrestaciones(){
        const antiguedad = this.calcularAntiguedad();
        const prestaciones = this.salario * (antiguedad / 12);
        return prestaciones.toFixed(2);
    }
}

let m = new Empleado();

function modificar_salario(){
    let cant = prompt("Nuevo salario");
    m.salario(parseInt(cant));
}