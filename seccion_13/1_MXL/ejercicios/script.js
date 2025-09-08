// ==================================
// Clase Matriz
// ==================================
 
class Matriz {
    static CANT_FILAS = 2;
    static CANT_COLUMNAS = 3;
 
    constructor() {
        this.datos = [];
        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            this.datos[i] = [];
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                this.datos[i][j] = 0;
            }
        }
    }
 
    // (1) Llenar matriz con números aleatorios 10-20
    llenarMatriz() {
        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                this.datos[i][j] = Math.floor(Math.random() * 11) + 10;
            }
        }
    }
 
    // Imprimir matriz en consola
    imprimirMatriz() {
        console.log("Contenido de la matriz:");
        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            let filaTexto = "";
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                filaTexto += this.datos[i][j] + (j < Matriz.CANT_COLUMNAS - 1 ? " " : "");
            }
            console.log(filaTexto);
        }
    }

}