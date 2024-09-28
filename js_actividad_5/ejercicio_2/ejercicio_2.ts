class Calculadora {
    //sumar
    sumar(a: number, b: number): number {
        return a + b;
    }

    //restar
    restar(a: number, b: number): number {
        return a - b;
    }

    //multiplicar
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    //dividir
    dividir(a: number, b: number): number | string {
        if (b === 0) {
            return 'No se puede dividir entre 0';
        }
        return a / b;
    }

    //potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    //factorial
    factorial(n: number): number {
        if (n < 0) return -1;
        if (n === 0 || n === 1) return 1;
        return n * this.factorial(n - 1);
    }
}

//ejemplo de uso
const calc = new Calculadora();
console.log(calc.sumar(5, 3));  // 8
console.log(calc.dividir(10, 0));  //"No se puede dividir entre 0"
console.log(calc.factorial(5));  // 120
