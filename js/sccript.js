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
    actualizarSalario(){
        this.salario = nuevoSalario;
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

// let m = new Empleado();

// document.addEventListener('DOMContentLoaded', function (){
//     const modificarBtn = document.getElementById('modificar_salario');

//     modificarBtn.addEventListener('click', function (){
//         const nuevoSalario = document.getElementById('salario').value;
//         // Logica para actualizar el salario con el nuevo valor ingresado por el usuario
//         console.log('Nuevo salario:', nuevoSalario);
//     })
// })

const btnModificarSalario = document.getElementById("modificar_salario");
const btnCalcularEdad = document.getElementById("calcular_edad");
const btnCalcularAntiguedad = document.getElementById("calcular_antiguedad");
const btnCalcularPrestaciones = document.getElementById("calcular_prestaciones");

btnModificarSalario.addEventListener("click", modificarSalario);
btnCalcularEdad.addEventListener("click", CalcularEdad);
btnCalcularAntiguedad.addEventListener("click", btnCalcularAntiguedad);
btnCalcularPrestaciones.addEventListener("click", calcularPrestaciones);

function modificarSalario(){
    const salarioInput = document.getElementById("salario");
    const nuevoSalario = salarioInput.value;
    console.log("Nuevo salario:", nuevoSalario)
}
