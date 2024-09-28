var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    //metodo para obtener titulo, color y fuente
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente);
    };
    //metodo para definir alineacion del titulo
    CabeceraPagina.prototype.definirAlineacion = function (alineacion) {
        return "El t\u00EDtulo aparecer\u00E1 alineado a la ".concat(alineacion);
    };
    //metodo para imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    return CabeceraPagina;
}());
//ejemplo de uso
var cabecera = new CabeceraPagina('Bienvenido', 'Azul', 'Arial');
console.log(cabecera.obtenerPropiedades());
console.log(cabecera.definirAlineacion('centrado'));
cabecera.imprimirPropiedades();
