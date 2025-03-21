function evaluarCompra(cantidadDisponible){
    let elementoRespuesta = document.getElementById("decicion");

    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadCompra = elementoCantidad.value;

    if(cantidadComprada < cantidadDisponible) {
        elementoRespuesta.textContent = "Compraste " + cantidadComprada
        + "hay disponible aun" +
        (cantidadDisponible - parseInt(cantidadComprada)).toString();;
    }
}