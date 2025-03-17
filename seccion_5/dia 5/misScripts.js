function calcular(){
 
 
    let elementorespuesta1 = document.getElementById("respuesta1");
    let elementorespuesta2 = document.getElementById("respuesta2");
    let elementorespuesta3 = document.getElementById("respuesta3");
 
    let elementoEdad = document.getElementById("textoEdad");
    let edad = elementoEdad.value;
 
    let puedeBeber = edad >= 18;
    elementorespuesta1.textContent = puedeBeber;
 
    let puedeIngresar = edad >= 18 && edad <= 30;
    elementorespuesta2.textContent = puedeIngresar;
 
    let entradaGratis = edad == 20 || edad == 25;
    elementorespuesta3.textContent = entradaGratis;
 
 
 
 
 
}
 