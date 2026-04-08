
const express = require('express') // importar el módulo express
const app = express() // crea instancia express
const port = 3000 // definición del puerto donde se levanta al app
const fs = require("fs") // acceder al file system

const archivo = "todos.json"

if (!fs.existsSync(archivo)) {
    fs.writeFileSync(archivo, "[]")
}

// Leer tareas desde el archivo
const leerTareas = () => {

    const data = fs.readFileSync(archivo, "utf8");
    return JSON.parse(data);

}

// Guardar tareas en el archivo (técnicamente esteremos sobreescribiendo el archivo)
const guardarTareas = (tareas) => {
    fs.writeFileSync(archivo, JSON.stringify(tareas));

};



// middleware
app.use(express.json()) // parsea el body a json

// rutas para la gestion de tareas

// listar las tareas
app.get('/todos', (req, res)=>{
    const tareas = leerTareas();
    res.json(tareas)
})

// agregar una tarea
app.post('/todos', (req, res) => {
    const { text } = req.body; // recibimos datos del cliente en el body

    // lógica de negocio
    const tareas = leerTareas();
    const nuevaTarea = {
        id: Date.now(),
        text,
        completada: false
    };

    tareas.push(nuevaTarea);
    guardarTareas(tareas)

    res.status(201).json(nuevaTarea) // respondemos al cliente con la resolución de su petición

})


// completar una tarea
app.put('/todos/:id', (req, res)=>{
    const { id } = req.params

    //lógica
    const tareas = leerTareas();
    const tarea = tareas.find(tarea => tarea.id == id);

    tarea.completada = true;

    guardarTareas(tareas)

    // respuesta
    res.status(200).json(tarea)

})















//        requets, response
app.get('/', (req, res) => {
    // lógica de negocio
    // una función controladora o manejadora de una ruta siempre debe responder
  res.status(201).json({
    msg: "Hola mundo."
  })
})

app.get('/home', (req, res)=>{
    // una función controladora o manejadora de una ruta siempre debe responder
    res.json({
        text: "Home"
    })
})

app.get('/oficinas', (req, res)=>{
    // una función controladora o manejadora de una ruta siempre debe responder
    res.json({
        oficinas: [{id: 1, oficina: "Oficina 1"}, {id: 2, oficina: "Oficina 2"}]
    })
})

app.get('/prueba', (req, res)=> {
    res.sendFile(__dirname + '/prueba.html')
})






// método para leventar el servidor y escuchar en el puerto indicado
app.listen(port, () => {
  console.log(`Aplicación live en el puerto: ${port}`)
})
