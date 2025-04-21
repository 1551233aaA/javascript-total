const notas = [77, 85, 90, 80, 69];

function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    const promedio = suma / notas.length;
    document.getElementById("resultado").textContent = "Promedio: " + promedio.toFixed(2);
}

function notaMasAlta() {
    mayor = Math.max(...notas); 
    document.getElementById("resultado").textContent = "Nota más alta: " + mayor;
}

