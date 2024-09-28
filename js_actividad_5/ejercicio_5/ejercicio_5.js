var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    //metodo para verificar si es mayor de edad
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log('Es mayor de edad.');
        }
        else {
            console.log('No es mayor de edad.');
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    //metodo para cargar sueldo
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    //metodo para imprimir sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Sueldo: $".concat(this.sueldo));
    };
    //metodo para mostrar los datos personales
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido, ", Direcci\u00F3n: ").concat(this.direccion, ", Tel\u00E9fono: ").concat(this.telefono, ", Edad: ").concat(this.edad, ", Sueldo: $").concat(this.sueldo));
    };
    return Empleado;
}(Persona));
//ejemplo de uso
var empleado = new Empleado('Ana', 'Gómez', 'Calle Falsa 123', '123456789', 30, 5000);
empleado.mostrarDatos();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
