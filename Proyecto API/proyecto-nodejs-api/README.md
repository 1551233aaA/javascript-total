
#  API - Registro de Pacientes

EL proyecto es una API REST construida con Node.js y Express para gestionar pacientes. Permite registrar, editar, consultar y eliminar pacientes, incluyendo si tienen una cita médica asignada.

---

##  Estructura del proyecto

```
proyecto-nodejs-api/
├── db.json               
├── index.js              
├── package.json          
└── public/               
    ├── index.html
    ├── app.js
    ├── index.css
    └── MisEstilos.css
```

---

## 🚀 Requisitos

Se debe instalar:

- [Node.js](https://nodejs.org/) 
- [Nodemon](https://www.npmjs.com/package/nodemon) 

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/TU_USUARIO/nombre-del-repo.git
cd nombre-del-repo
```

2. Instala las dependencias:

```bash
npm install
```

---

## ▶️ Ejecución del servidor

Para iniciar el servidor en modo desarrollo con `nodemon`:

```bash

Set-ExecutionPolicy Bypass -Scope Process -Force ( Para esto, debe ejecutar PowerShell como administrador. Este paso es solo necesario si la terminal no le funciona, es una forma de solucionarlo. En mi caso, tuve que hacerlo. )
```

```bash
npm run dev
```
O para ejecutarlo directamente:

```bash
node index.js
```
---

##  Acceso a la Interfaz Web

1. Asegúrar de que el servidor esté corriendo.
2. Abre tu navegador en:

```
http://localhost:3000/index.html
```

Desde ahí puedes:
- Ver la lista de pacientes.
- Agregar nuevos pacientes.
- Editar pacientes existentes.
- Eliminar pacientes.
- Marcar si tienen cita.

---

##  Endpoints de la API

- `GET /pacientes` - Lista todos los pacientes.
- `GET /pacientes/:id` - Muestra un paciente por ID.
- `POST /pacientes` - Crea un nuevo paciente.
- `PUT /pacientes/:id` - Actualiza un paciente existente.
- `DELETE /pacientes/:id` - Elimina un paciente.

---

##  Persistencia

Todos los datos se guardan en el archivo `db.json`. 

---

## ¿Cómo funciona app.js?

- El archivo app.js conecta la página web con la API. En palabras simples:
- Cuando abrís la página, el archivo pide la lista de pacientes a la API y los muestra.
- Si llenás el formulario y le das a guardar, se envían los datos a la API:
- Si es un nuevo paciente, se agrega.
- Si es uno existente (modo edición), se actualiza.
- Cada paciente se muestra con botones para Editar y Eliminar.
- Todo esto ocurre sin recargar la página, gracias al uso de fetch(). 

##  Tecnologías o herramientas usadas

- Node.js
- Express
- JavaScript
- HTML/CSS
- Fetch API
- JSON para persistencia