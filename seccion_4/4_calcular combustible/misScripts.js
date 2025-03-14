function calcularlitros(){
    var elementoKM = document.getElementById("textokm");
    var textoKM = elementoKM.value;
    var cantkm = Number(textoKM);

    var cantlitros = Math.ceil(cantkm / 8.8);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "carga " + cantlitros + " litros de combustible";

}