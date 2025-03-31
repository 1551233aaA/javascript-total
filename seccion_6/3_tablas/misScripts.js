function multiplicar() {
    // Obtener el número
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    // Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    // Vaciar la tabla antes de ejecutar
    elementoTablaMultiplicar.innerText = "";

    // Producir y mostrar resultados
    for (let x = 1; x <= 10; x++) {
        // Calcular el resultado
        let numeroResultado = numeroTabla * x;

        // Armar el string con el resultado
        let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado;

        // Mostrar el resultado en la tabla
        let elementoResultado = document.createElement("li");
        elementoResultado.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(elementoResultado);
    }
}
