class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    //metodo para depositar dinero
    depositar(cantidad: number): void {
        if (cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente: $${cantidad}`);
        }
    }

    //metodo para retirar dinero
    retirar(valor: number): void {
        if (valor > this.cantidad) {
            console.log('No hay suficiente dinero en la cuenta.');
        } else if (valor < 5) {
            console.log('El valor a retirar debe ser mayor a $5.00');
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado: $${valor}. Quedan: $${this.cantidad}`);
        }
    }

    //metodo para mostrar los datos
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`);
    }
}

//ejemplo de uso
const cuenta = new Cuenta('Juan Perez', 100, 'Ahorros', '12345678');
cuenta.mostrarDatos();
cuenta.depositar(50);
cuenta.retirar(20);
