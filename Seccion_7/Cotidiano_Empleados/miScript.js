 empleados = []; 


function Empleado(expediente, nombre, apellido, fechaNacimiento, cargo) {
    this.expediente = expediente;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}


function obtenerValoresFormulario() {
    return {
        expediente: document.getElementById("txtExpediente").value,
        nombre: document.getElementById("txtNombre").value,
        apellido: document.getElementById("txtApellido").value,
        fechaNacimiento: document.getElementById("txtNacimiento").value,
        cargo: document.getElementById("txtCargo").value
    };
}


function agregarEmpleado() {
     datos = obtenerValoresFormulario();

    if (datos.expediente && datos.nombre && datos.apellido && datos.fechaNacimiento && datos.cargo) {
         nuevoEmpleado = new Empleado(datos.expediente, datos.nombre, datos.apellido, datos.fechaNacimiento, datos.cargo);
        empleados.push(nuevoEmpleado);
        limpiarCampos();
        alert("Empleado registrado exitosamente.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
}


function mostrarEmpleados() {
    if (empleados.length === 0) {
        alert("No hay empleados registrados.");
        return;
    }

     mensaje = "Lista de empleados:\n";
    empleados.forEach(emp => {
        mensaje += `Expediente: ${emp.expediente}\nNombre: ${emp.nombre} ${emp.apellido}\nNacimiento: ${emp.fechaNacimiento}\nCargo: ${emp.cargo}\n\n`;
    });

    alert(mensaje);
}


function limpiarCampos() {
    document.getElementById("txtExpediente").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtNacimiento").value = "";
    document.getElementById("txtCargo").value = "";
}
