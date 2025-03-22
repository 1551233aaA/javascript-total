function mostrarFruta(){
    let nombreFruta= document.getElementById("nombrefruta")
    let fruta=nombreFruta.value;

    let Manzana=15;
    let Naranja=20;
    let Banana=25;
    switch (fruta){
        case "Manzana":
            alert("el precio de la fruta es: " + Manzana);
            break;
        case "Naranja":
            alert("el precio de la fruta es: " + Naranja);
            break;
        case "Banana":
            alert("el precio de la fruta es: " + Banana);
            break;
        default:
            alert("Esa fruta no está disponible");
            break;
    }

}