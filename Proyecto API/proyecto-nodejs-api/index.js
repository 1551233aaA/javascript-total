import express from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();


app.use(cors());


app.use(bodyParser.json());


app.use(express.static('./public'));
 
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });


const readData = () => {
    try {
        const data = fs.readFileSync("./db.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer el archivo:", error.message);
        return { pacientes: [] };
    }
};


const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error al escribir el archivo:", error.message);
    }
};


app.get("/pacientes", (req, res) => {
    const data = readData();
    res.json(data.pacientes);
});

app.get("/pacientes/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const paciente = data.pacientes.find(p => p.id === id);
    if (!paciente) {
        return res.status(404).json({ error: "Paciente no encontrado" });
    }
    res.json(paciente);
});

app.post("/pacientes", (req, res) => {
    const data = readData();
    const body = req.body;
    const newPaciente = {
        id: data.pacientes.length + 1,
        ...body
    };
    data.pacientes.push(newPaciente);
    writeData(data);
    res.status(201).json(newPaciente);
});

app.put("/pacientes/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const body = req.body;
    const index = data.pacientes.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Paciente no encontrado" });
    }

    data.pacientes[index] = { ...data.pacientes[index], ...body };
    writeData(data);
    res.json({ message: "Paciente actualizado exitosamente" });
});

app.delete("/pacientes/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const index = data.pacientes.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Paciente no encontrado" });
    }

    data.pacientes.splice(index, 1);
    writeData(data);
    res.json({ message: "Paciente eliminado exitosamente" });
});


app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
