var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }
    //metodo getter para autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    //metodo setter para autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    //metodo para mostrar los datos de la canción
    Cancion.prototype.mostrarDatos = function () {
        console.log("Titulo: ".concat(this.titulo, ", Genero: ").concat(this.genero, ", Autor: ").concat(this.autor));
    };
    return Cancion;
}());
//ejemplo de uso
var cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor('Queen');
cancion.mostrarDatos();
