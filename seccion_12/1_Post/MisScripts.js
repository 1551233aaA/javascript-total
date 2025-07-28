async function crearPost(titulo, contenido) {
  try {
    const respuesta = await fetch('https://api.restful-api.dev/objects', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: titulo,
        data: contenido,
      }),
    });

    if (!respuesta.ok) {
      throw new Error("Error en la solicitud: " + respuesta.statusText);
    }

    const data = await respuesta.json();
    console.log("Resgistro creado:", data);
    return data;
  } catch (error) {
    console.error("algo salio mal a crear el registro:", error);
  }
}

crearPost("Mi título de ejemplo", {
  contenido1: "mi contenido1 de ejemplo",
  contenido2: "mi contenido2 de ejemplo"
});