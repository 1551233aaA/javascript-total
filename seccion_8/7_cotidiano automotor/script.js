function Coche(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}
 

Coche.prototype.verAutomovil = function() {
    return `${this.marca} ${this.modelo} - ${this.color}, ${this.anio}. Titular: ${this.titular}`;
};
 

const coche1 = new Coche("Toyota", "Corolla", "Rojo", 2020, "Carlos Pérez");
const coche2 = new Coche("Honda", "Civic", "Azul", 2022, "María Gómez");
const coche3 = new Coche("Ford", "Mustang", "Negro", 2021, "Luis Rodríguez");

const listaCoches = [coche1, coche2, coche3];
 

function mostrarAutomoviles() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
 
    listaCoches.forEach(coche => {
        const item = document.createElement("li");
        item.textContent = coche.verAutomovil();
        lista.appendChild(item);
    });
}
 
 