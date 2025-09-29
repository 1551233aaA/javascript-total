// script.js
class Monstruo {
  constructor(nombre) {
    this.nombre = nombre;
    this.vida = 100;
    this.turnos = 3;
    this.poderes = Array.from({ length: 3 }, () => Math.floor(Math.random() * 21) + 10);
  }
}
 
let monstruos = [
  new Monstruo("Drako"),
  new Monstruo("ZombieX"),
  new Monstruo("Furia"),
  new Monstruo("Golem")
];
 
let ultimoAtacado = null;

function mostrarTablero() {
  let html = "<table><tr>";
  monstruos.forEach(m => html += `<th>${m.nombre}</th>`);
  html += "</tr>";
 
  for (let i = 2; i >= 0; i--) {
    html += "<tr>";
    monstruos.forEach(m => html += `<td>Ataque ${i + 1}: ${m.poderes[i]}</td>`);
    html += "</tr>";
  }
 
  html += "<tr>";
  monstruos.forEach((m, i) => {
    let clase = (i === ultimoAtacado) ? "red" : "";
    html += `<td class="${clase}">Vida: ${m.vida}</td>`;
  });
  html += "</tr><tr>";
  monstruos.forEach(m => html += `<td>Turnos: ${m.turnos}</td>`);
  html += "</tr></table>";
 
  document.getElementById("game-board").innerHTML = html;
}