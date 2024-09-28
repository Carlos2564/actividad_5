var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    //sumar
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    //restar
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    //multiplicar
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    //dividir
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            return 'No se puede dividir entre 0';
        }
        return a / b;
    };
    //potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    //factorial
    Calculadora.prototype.factorial = function (n) {
        if (n < 0)
            return -1;
        if (n === 0 || n === 1)
            return 1;
        return n * this.factorial(n - 1);
    };
    return Calculadora;
}());
//ejemplo de uso
var calc = new Calculadora();
console.log(calc.sumar(5, 3)); // 8
console.log(calc.dividir(10, 0)); //"No se puede dividir entre 0"
console.log(calc.factorial(5)); // 120
