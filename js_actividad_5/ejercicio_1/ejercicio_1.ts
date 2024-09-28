class CabeceraPagina {
    titulo: string;
    color: string;
    fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    //metodo para obtener titulo, color y fuente
    obtenerPropiedades(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    //metodo para definir alineacion del titulo
    definirAlineacion(alineacion: 'centrado' | 'izquierda' | 'derecha'): string {
        return `El título aparecerá alineado a la ${alineacion}`;
    }

    //metodo para imprimir todas las propiedades
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
}

//ejemplo de uso
const cabecera = new CabeceraPagina('Bienvenido', 'Azul', 'Arial');
console.log(cabecera.obtenerPropiedades());
console.log(cabecera.definirAlineacion('centrado'));
cabecera.imprimirPropiedades();
