var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    //metodo para depositar dinero
    Cuenta.prototype.depositar = function (cantidad) {
        if (cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        }
        else {
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente: $".concat(cantidad));
        }
    };
    //metodo para retirar dinero
    Cuenta.prototype.retirar = function (valor) {
        if (valor > this.cantidad) {
            console.log('No hay suficiente dinero en la cuenta.');
        }
        else if (valor < 5) {
            console.log('El valor a retirar debe ser mayor a $5.00');
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado: $".concat(valor, ". Quedan: $").concat(this.cantidad));
        }
    };
    //metodo para mostrar los datos
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, ", Tipo de Cuenta: ").concat(this.tipoCuenta, ", N\u00FAmero de Cuenta: ").concat(this.numeroCuenta));
    };
    return Cuenta;
}());
//ejemplo de uso
var cuenta = new Cuenta('Juan Perez', 100, 'Ahorros', '12345678');
cuenta.mostrarDatos();
cuenta.depositar(50);
cuenta.retirar(20);
