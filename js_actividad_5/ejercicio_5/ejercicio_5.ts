abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    //metodo para verificar si es mayor de edad
    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log('Es mayor de edad.');
        } else {
            console.log('No es mayor de edad.');
        }
    }

    //metodo abstracto para mostrar los datos personales
    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    //metodo para cargar sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    //metodo para imprimir sueldo
    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    //metodo para mostrar los datos personales
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}, Sueldo: $${this.sueldo}`);
    }
}

//ejemplo de uso
const empleado = new Empleado('Ana', 'Gómez', 'Calle Falsa 123', '123456789', 30, 5000);
empleado.mostrarDatos();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
