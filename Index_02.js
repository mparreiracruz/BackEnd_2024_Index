const express = require('express')
const app = express()
const porta = 1000

app.get('/', function (req, res) {
  res.send('Olá!')
  console.log('Feito')
})

app.listen(porta, ()=> {
  console.log(`Server ativo na porta ${porta}`)
})