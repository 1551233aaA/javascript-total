function agregarRegistro(nombre, datos) {
  fetch('https://api.restful-api.dev/objects', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nombre,
      data: datos
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("✅ Registro creado:", data);
    alert("Registro exitoso. Consulta la consola para ver el resultado.");
  })
  .catch(error => {
    console.error("❌ Error al agregar el registro:", error);
    alert("Hubo un error al agregar el registro.");
  });
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const ciudad = document.getElementById("ciudad").value;
  const ocupacion = document.getElementById("ocupacion").value;

  const datos = {
    edad: edad,
    ciudad: ciudad,
    ocupacion: ocupacion
  };

  agregarRegistro(nombre, datos);
});