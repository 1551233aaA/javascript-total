
class Matriz {
    constructor() {
        this.CANT_FILAS = 4;
        this.CANT_COLUMNAS = 3;
        this.datos = [];
        this.inicializarMatriz();
    }

    inicializarMatriz() {
        this.datos = Array(this.CANT_FILAS).fill(0).map(() => Array(this.CANT_COLUMNAS).fill(0));
    }

    llenarMatriz() {
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                this.datos[i][j] = Math.floor(Math.random() * 11) + 10; // números entre 10 y 20
            }
        }
    }

    promedio() {
        let suma = 0;
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                suma += this.datos[i][j];
            }
        }
        return suma / (this.CANT_FILAS * this.CANT_COLUMNAS);
    }

    sumaNumero(n) {
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                this.datos[i][j] += n;
            }
        }
    }

    duplicarFila(f) {
        if (f >= 0 && f < this.CANT_FILAS) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                this.datos[f][j] *= 2;
            }
            return true;
        }
        return false;
    }

    sumaDiagonalPrincipal() {
        let suma = 0;
        let lim = Math.min(this.CANT_FILAS, this.CANT_COLUMNAS);
        for (let i = 0; i < lim; i++) {
            suma += this.datos[i][i];
        }
        return suma;
    }

    sumaDiagonalInversa() {
        let suma = 0;
        let lim = Math.min(this.CANT_FILAS, this.CANT_COLUMNAS);
        for (let i = 0; i < lim; i++) {
            suma += this.datos[i][this.CANT_COLUMNAS - 1 - i];
        }
        return suma;
    }

    mayorMatriz() {
        let max = this.datos[0][0];
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                if (this.datos[i][j] > max) {
                    max = this.datos[i][j];
                }
            }
        }
        return max;
    }

    buscaNumero(x) {
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                if (this.datos[i][j] === x) {
                    return true;
                }
            }
        }
        return false;
    }

    buscaPosiciones(x) {
        let posiciones = [];
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                if (this.datos[i][j] === x) {
                    posiciones.push(`(${i},${j})`);
                }
            }
        }
        return posiciones.length > 0 ? posiciones.join(' ') : 'Número no encontrado';
    }

    modificaBajoDiagonal() {
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                if (i > j) {
                    this.datos[i][j] = 0;
                }
            }
        }
    }

    intercambiaFilas() {
        for (let f = 0; f + 1 < this.CANT_FILAS; f += 2) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                let temp = this.datos[f][j];
                this.datos[f][j] = this.datos[f + 1][j];
                this.datos[f + 1][j] = temp;
            }
        }
    }

    copiaCeldaSuperior() {
        for (let i = 1; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                this.datos[i][j] = 2 * this.datos[i - 1][j];
            }
        }
    }

    ordenarMatriz() {
        for (let i = 0; i < this.CANT_FILAS; i++) {
            this.datos[i].sort((a, b) => a - b);
        }
    }

    sumaFilas() {
        let resultado = [];
        for (let i = 0; i < this.CANT_FILAS; i++) {
            let suma = 0;
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                suma += this.datos[i][j];
            }
            resultado.push(suma);
        }
        return resultado;
    }

    mayorColumnas() {
        let resultado = [];
        for (let j = 0; j < this.CANT_COLUMNAS; j++) {
            let max = this.datos[0][j];
            for (let i = 1; i < this.CANT_FILAS; i++) {
                if (this.datos[i][j] > max) {
                    max = this.datos[i][j];
                }
            }
            resultado.push(max);
        }
        return resultado;
    }

    toString() {
        let resultado = "";
        for (let i = 0; i < this.CANT_FILAS; i++) {
            for (let j = 0; j < this.CANT_COLUMNAS; j++) {
                resultado += this.datos[i][j] + "\t";
            }
            resultado += "\n";
        }
        return resultado;
    }
}

const matriz = new Matriz();

function actualizarVisualizacion() {
    const table = document.getElementById('matrixTable');
    table.innerHTML = '';

    for (let i = 0; i < matriz.CANT_FILAS; i++) {
        const row = table.insertRow();
        for (let j = 0; j < matriz.CANT_COLUMNAS; j++) {
            const cell = row.insertCell();
            cell.textContent = matriz.datos[i][j];
        }
    }
}

function mostrarResultado(texto, type = 'info') {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.textContent = texto;
    resultadosDiv.className = '';
    resultadosDiv.classList.add('result-' + type);
}

function ocultarTodosInputs() {
    document.querySelectorAll('.input-form-container').forEach(div => {
        div.style.display = 'none';
    });
}

function mostrarInputContainer(id) {
    ocultarTodosInputs();
    document.getElementById(id).style.display = 'flex';
}

function handleLlenarMatriz() {
    matriz.llenarMatriz();
    actualizarVisualizacion();
    mostrarResultado("Matriz llenada con números aleatorios entre 10 y 20", 'success');
    ocultarTodosInputs();
}

function handleCalcularPromedio() {
    const prom = matriz.promedio();
    actualizarVisualizacion();
    mostrarResultado(`El promedio de la matriz es: ${prom.toFixed(2)}`, 'info');
    ocultarTodosInputs();
}

function handleSumarNumero() {
    const input = document.getElementById('numeroSuma');
    const n = parseInt(input.value);
    if (!isNaN(n)) {
        matriz.sumaNumero(n);
        actualizarVisualizacion();
        mostrarResultado(`Se sumó ${n} a todas las celdas de la matriz`, 'success');
        input.value = '';
        ocultarTodosInputs();
    } else {
        mostrarResultado('Por favor ingrese un número válido para sumar.', 'error');
    }
}

function handleDuplicarFila() {
    const input = document.getElementById('numeroFila');
    const f = parseInt(input.value);
    if (!isNaN(f)) {
        if (matriz.duplicarFila(f)) {
            actualizarVisualizacion();
            mostrarResultado(`Fila ${f} duplicada exitosamente`, 'success');
        } else {
            mostrarResultado(`Error: La fila ${f} está fuera de rango (0-${matriz.CANT_FILAS - 1})`, 'error');
        }
        input.value = '';
        ocultarTodosInputs();
    } else {
        mostrarResultado('Por favor ingrese un número de fila válido.', 'error');
    }
}

function handleSumaDiagonalPrincipal() {
    const suma = matriz.sumaDiagonalPrincipal();
    actualizarVisualizacion();
    mostrarResultado(`Suma de la diagonal principal: ${suma}`, 'info');
    ocultarTodosInputs();
}

function handleSumaDiagonalInversa() {
    const suma = matriz.sumaDiagonalInversa();
    actualizarVisualizacion();
    mostrarResultado(`Suma de la diagonal inversa: ${suma}`, 'info');
    ocultarTodosInputs();
}

function handleEncontrarMayor() {
    const mayor = matriz.mayorMatriz();
    actualizarVisualizacion();
    mostrarResultado(`El mayor elemento de la matriz es: ${mayor}`, 'info');
    ocultarTodosInputs();
}

function handleBuscarNumero() {
    const input = document.getElementById('numeroBuscar');
    const x = parseInt(input.value);
    if (!isNaN(x)) {
        const encontrado = matriz.buscaNumero(x);
        actualizarVisualizacion();
        if (encontrado) {
            mostrarResultado(`El número ${x} SÍ se encuentra en la matriz`, 'success');
        } else {
            mostrarResultado(`El número ${x} NO se encuentra en la matriz`, 'info');
        }
        input.value = '';
        ocultarTodosInputs();
    } else {
        mostrarResultado('Por favor ingrese un número válido para buscar.', 'error');
    }
}

function handleBuscarPosiciones() {
    const input = document.getElementById('numeroBuscarPos');
    const x = parseInt(input.value);
    if (!isNaN(x)) {
        const posiciones = matriz.buscaPosiciones(x);
        actualizarVisualizacion();
        if (posiciones === 'Número no encontrado') {
            mostrarResultado(`Posiciones del número ${x}: ${posiciones}`, 'info');
        } else {
            mostrarResultado(`Posiciones del número ${x}: ${posiciones}`, 'success');
        }
        input.value = '';
        ocultarTodosInputs();
    } else {
        mostrarResultado('Por favor ingrese un número válido para buscar posiciones.', 'error');
    }
}

function handleModificarBajoDiagonal() {
    matriz.modificaBajoDiagonal();
    actualizarVisualizacion();
    mostrarResultado("Elementos bajo la diagonal principal cambiados a cero", 'success');
    ocultarTodosInputs();
}

function handleIntercambiarFilas() {
    matriz.intercambiaFilas();
    actualizarVisualizacion();
    mostrarResultado("Filas pares intercambiadas con filas impares", 'success');
    ocultarTodosInputs();
}

function handleCopiarCeldaSuperior() {
    matriz.copiaCeldaSuperior();
    actualizarVisualizacion();
    mostrarResultado("Cada celda ahora contiene el doble de la celda superior", 'success');
    ocultarTodosInputs();
}

function handleOrdenarFilas() {
    matriz.ordenarMatriz();
    actualizarVisualizacion();
    mostrarResultado("Cada fila ha sido ordenada de menor a mayor", 'success');
    ocultarTodosInputs();
}

function handleSumaFilas() {
    const sumas = matriz.sumaFilas();
    actualizarVisualizacion();
    mostrarResultado(`Suma de cada fila: [${sumas.join(', ')}]`, 'info');
    ocultarTodosInputs();
}

function handleMayorColumnas() {
    const mayores = matriz.mayorColumnas();
    actualizarVisualizacion();
    mostrarResultado(`Mayor de cada columna: [${mayores.join(', ')}]`, 'info');
    ocultarTodosInputs();
}

function handleMostrarMatriz() {
    actualizarVisualizacion();
    mostrarResultado("Matriz actualizada en la visualización", 'info');
    ocultarTodosInputs();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnLlenarMatriz').addEventListener('click', handleLlenarMatriz);
    document.getElementById('btnCalcularPromedio').addEventListener('click', handleCalcularPromedio);
    document.getElementById('btnMostrarInputSuma').addEventListener('click', () => mostrarInputContainer('inputSumaContainer'));
    document.getElementById('btnSumarNumero').addEventListener('click', handleSumarNumero);
    document.getElementById('btnMostrarInputFila').addEventListener('click', () => mostrarInputContainer('inputFilaContainer'));
    document.getElementById('btnDuplicarFila').addEventListener('click', handleDuplicarFila);
    document.getElementById('btnSumaDiagonalPrincipal').addEventListener('click', handleSumaDiagonalPrincipal);
    document.getElementById('btnSumaDiagonalInversa').addEventListener('click', handleSumaDiagonalInversa);
    document.getElementById('btnEncontrarMayor').addEventListener('click', handleEncontrarMayor);
    document.getElementById('btnMostrarInputBuscar').addEventListener('click', () => mostrarInputContainer('inputBuscarContainer'));
    document.getElementById('btnBuscarNumero').addEventListener('click', handleBuscarNumero);
    document.getElementById('btnMostrarInputBuscarPos').addEventListener('click', () => mostrarInputContainer('inputBuscarPosContainer'));
    document.getElementById('btnBuscarPosiciones').addEventListener('click', handleBuscarPosiciones);
    document.getElementById('btnModificarBajoDiagonal').addEventListener('click', handleModificarBajoDiagonal);
    document.getElementById('btnIntercambiarFilas').addEventListener('click', handleIntercambiarFilas);
    document.getElementById('btnCopiarCeldaSuperior').addEventListener('click', handleCopiarCeldaSuperior);
    document.getElementById('btnOrdenarFilas').addEventListener('click', handleOrdenarFilas);
    document.getElementById('btnSumaFilas').addEventListener('click', handleSumaFilas);
    document.getElementById('btnMayorColumnas').addEventListener('click', handleMayorColumnas);
    document.getElementById('btnMostrarMatriz').addEventListener('click', handleMostrarMatriz);

    actualizarVisualizacion();
    mostrarResultado("Matriz inicializada. Selecciona una operación para comenzar.", 'info');
});