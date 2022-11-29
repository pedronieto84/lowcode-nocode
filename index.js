console.log('hola mundo')
console.log('Segundo commit')
const express = require('express')
const app = express()
const port = 3000

let users = [
    {
        nombre: 'Pedro'
    }
    ,
    {
        nombre: 'Laura'
    }
    ,
    {
        nombre: 'Lluis'
    }
]
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})