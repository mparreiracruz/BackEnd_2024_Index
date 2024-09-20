const express = require('express') //Importando a ferramenta express.js
const app = express() //Instanciando o express na constante app
const port = 3000 //Declarando uma constante port. Qual porta iremos utilizar no exemplo 
//Habilitar para utilizar json
app.use(express.json())
/*
let user = {
  "nome": "José Wilson",
  "email": "email@dominio.com"
}
*/
let users = []
app.get('/usuario', (req,res) => {
    res.send(users)
    console.log("---------------------------------------- /usuario/get")
    console.log(users)
})

app.post('/usuario', (req,res) => {
    const user = req.body
    users.push(user) //Armazenando um usuario na lista users
    res.status(201).send(user)
    console.log("---------------------------------------- /usuario/post")
    console.log(user)
})

app.delete('/usuario', (req,res) => {
  const user = req.body
  const index = users.findIndex(x => x.nome === user.nome)
  console.log(`O usuario ${user.nome} foi encontrado na posição ${index}`)
  users.splice(index,1)
  res.send(`Usuário ${user.nome} deletado !`)
  console.log("---------------------------------------- /usuario/delete")
  console.log(`O usuário ${user.nome} foi deletado com sucesso !`)
})

app.put('/usuario', (req,res) => {
  const user = req.body
  const index = users.findIndex(x => x.nome === user.nome)
  console.log(`O usuario ${user.nome} foi encontrado na posição ${index}`)
  users[index] = {nome: user.nome, email: user.email}
  res.send(`Usuário ${user.nome} agora tem e-mail ${user.email}`)
  console.log("---------------------------------------- /usuario/put")
  console.log(`O e-mail do usuário ${user.nome} foi atualizado com sucesso`)
})

//Deixar a aplicação ativa, escutando a porta "port"
app.listen(port, () => {
  console.log(`Server ativo na Porta: ${port}`)
})