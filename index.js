
const express = require('express') // importar el módulo express
const app = express() // crea instancia express
const port = 3000 // definición del puerto donde se levanta al app

//        requets, response
app.get('/', (req, res) => {
    // lógica de negocio
  res.send('Hello World!')
})

// método para leventar el servidor y escuchar en el puerto indicado
app.listen(port, () => {
  console.log(`Aplicación live en el puerto: ${port}`)
})
