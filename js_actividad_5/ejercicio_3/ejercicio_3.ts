class Cancion {
    titulo: string;
    genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }

    //metodo getter para autor
    getAutor(): string {
        return this.autor;
    }

    //metodo setter para autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    //metodo para mostrar los datos de la canción
    mostrarDatos(): void {
        console.log(`Titulo: ${this.titulo}, Genero: ${this.genero}, Autor: ${this.autor}`);
    }
}

//ejemplo de uso
const cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor('Queen');
cancion.mostrarDatos();
