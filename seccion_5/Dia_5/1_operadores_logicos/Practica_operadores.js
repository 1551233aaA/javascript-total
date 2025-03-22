function hacerComparacion(){
    let Numero1=document.getElementById("numero1");
    let Numero2=document.getElementById("numero2");
    let textoDiv=document.getElementById("TextoEnPantalla");

    let numero1=Numero1.value;
    let numero2=Numero2.value;

    let comparacion= numero1 > numero2;
    textoDiv.textContent = comparacion;

}