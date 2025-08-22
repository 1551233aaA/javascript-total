function enviarformulario(){
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const anio = document.getElementById("anio").value
 
    const xmlData = `
    <Usuario>
        <nombre>${nombre}</nombre>
        <email>${email}</email>
        <anio>${anio}</anio>
     </Usuario>`;
   
     localStorage.setItem('usuarioXML', xmlData)
    window.location.href = 'visualizar.html'
    return false
}