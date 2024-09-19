const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World !')
})

app.listen(3000)

/*
Acessar no navegador:
Abra seu navegador e vá para http://localhost:3000
Você verá a mensagem 'Olá Mundo!' na tela.
Quando quiser parar o servidor, use Ctrl + C no terminal.
*/