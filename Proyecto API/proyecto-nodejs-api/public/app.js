document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("paciente-form");
    const container = document.getElementById("pacientes-container");
    const API_URL = "http://localhost:3000/pacientes";

    let modoEdicion = false;
    let pacienteEnEdicionId = null;

    const cargarPacientes = () => {
        fetch(API_URL)
            .then(res => {
                if (!res.ok) throw new Error("No se pudo obtener los pacientes");
                return res.json();
            })
            .then(data => {
                container.innerHTML = data.map(paciente => `
                    <div class="paciente-card">
                        <h2>${paciente.nombre}</h2>
                        <p>ID: ${paciente.id}</p>
                        <p>Edad: ${paciente.edad}</p>
                        <p>Diagnóstico: ${paciente.diagnostico}</p>
                        <p>Cita: ${paciente.tieneCita ? "Agendada" : "No agendada"}</p>
                        <button onclick="editarPaciente(${paciente.id})">Editar</button>
                        <button onclick="eliminarPaciente(${paciente.id})">Eliminar</button>
                    </div>
                `).join("");
            })
            .catch(error => {
                console.error("Error al cargar pacientes:", error.message);
                container.innerHTML = `<p style="color: red;">No se pudieron cargar los pacientes.</p>`;
            });
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const datosPaciente = {
            id: parseInt(form.id.value),
            nombre: form.nombre.value.trim(),
            edad: parseInt(form.edad.value),
            diagnostico: form.diagnostico.value.trim(),
            tieneCita: form.tieneCita.checked
        };

        if (modoEdicion) {
            
            fetch(`${API_URL}/${pacienteEnEdicionId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosPaciente)
            })
            .then(res => {
                if (!res.ok) throw new Error("Error al actualizar el paciente");
                return res.json();
            })
            .then(() => {
                modoEdicion = false;
                pacienteEnEdicionId = null;
                form.querySelector("button").textContent = "Agregar Paciente";
                form.reset();
                cargarPacientes();
            })
            .catch(error => {
                console.error("Error al actualizar paciente:", error.message);
            });
        } else {
           
            fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosPaciente)
            })
            .then(res => {
                if (!res.ok) throw new Error("Error al guardar el paciente");
                return res.json();
            })
            .then(() => {
                form.reset();
                cargarPacientes();
            })
            .catch(error => {
                console.error("Error al agregar paciente:", error.message);
                alert("Hubo un problema al guardar el paciente.");
            });
        }
    });

    window.eliminarPaciente = (id) => {
        fetch(`${API_URL}/${id}`, { method: "DELETE" })
            .then(() => cargarPacientes())
            .catch(error => {
                console.error("Error al eliminar paciente:", error.message);
                alert("No se pudo eliminar el paciente.");
            });
    };

    window.editarPaciente = (id) => {
        fetch(`${API_URL}/${id}`)
            .then(res => res.json())
            .then(paciente => {
                form.id.value = paciente.id;
                form.nombre.value = paciente.nombre;
                form.edad.value = paciente.edad;
                form.diagnostico.value = paciente.diagnostico;
                form.tieneCita.checked = paciente.tieneCita;

                pacienteEnEdicionId = paciente.id;
                modoEdicion = true;
                form.querySelector("button").textContent = "Actualizar Paciente";
            })
            .catch(error => {
                console.error("Error al cargar paciente para edición:", error.message);
            });
    };

    cargarPacientes();
});
