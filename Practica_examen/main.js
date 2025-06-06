let estudiantes = [];
let notas = [];
 

fetch("estudiantes.json")
  .then(response => response.json())
  .then(data => {
    estudiantes = data;
  })
  .catch(error => console.error("Error al cargar estudiantes:", error));
 

function registrarNota(nombre) {
  let nota;
  do {
    nota = parseInt(prompt(`Ingrese la nota de ${nombre} (0-100):`));
  } while (isNaN(nota) || nota < 0 || nota > 100);
  return nota;
}
 

function clasificarNota(nota) {
  if (nota >= 90) return "Excelente";
  if (nota >= 80) return "Buena";
  if (nota >= 70) return "Aprobada";
  return "Reprobada";
}
 

function registrarNotas() {
  notas = [];
  estudiantes.forEach(nombre => {
    let nota = registrarNota(nombre);
    let clasificacion = clasificarNota(nota);
    notas.push({ nombre, nota, clasificacion });
  });
  mostrarResultados();
}
 

function mostrarResultados() {
  const div = document.getElementById("resultado");
  div.innerHTML = "<h2>Resultados:</h2>";
  notas.forEach(est => {
    const clase = est.nota >= 70 ? "aprobado" : "reprobado";
    div.innerHTML += `
      <div class="estudiante ${clase}">
        <strong>${est.nombre}</strong> - Nota: ${est.nota} - Clasificación: ${est.clasificacion}
      </div>`;
  });
}
 

function generarResumen() {
  if (notas.length === 0) {
    alert("Primero debes registrar las notas.");
    return;
  }
 
  let aprobados = notas.filter(e => e.nota >= 70).length;
  let reprobados = notas.length - aprobados;
  let suma = notas.reduce((acc, e) => acc + e.nota, 0);
  let promedio = (suma / notas.length).toFixed(2);
  let max = Math.max(...notas.map(e => e.nota));
  let min = Math.min(...notas.map(e => e.nota));
 
  const div = document.getElementById("resumen");
  div.innerHTML = `
    <h2>Resumen General</h2>
    <p>Aprobados: ${aprobados}</p>
    <p>Reprobados: ${reprobados}</p>
    <p>Promedio general: ${promedio}</p>
    <p>Nota más alta: ${max}</p>
    <p>Nota más baja: ${min}</p>
  `;
}