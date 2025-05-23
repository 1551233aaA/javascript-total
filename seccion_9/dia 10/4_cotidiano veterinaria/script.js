class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return `${this.nombre}, ${this.peso}kg, ${this.edad} años`;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion() {
        return `${super.informacion()}, Raza: ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion() {
        return `${super.informacion()}, Sexo: ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion() {
        return `${super.informacion()}, Color: ${this.color}`;
    }
}


const perro1 = new Perro("simba", 11,4, "Shih Tzu");
const gato1 = new Gato("ringo", 4, 6, "Macho");
const conejo1 = new Conejo("dumbo", 2, 3, "Blanco");


const animales = [perro1, gato1, conejo1];

function mostrarAnimales() {
    const lista = document.getElementById("listaAnimales");
    lista.innerHTML = ""; 
    animales.forEach(animal => {
        const elemento = document.createElement("li");
        elemento.textContent = animal.informacion();
        lista.appendChild(elemento);
    });
}

