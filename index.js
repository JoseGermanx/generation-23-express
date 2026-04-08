
const express = require('express') // importar el módulo express
const app = express() // crea instancia express
const port = 3000 // definición del puerto donde se levanta al app

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
