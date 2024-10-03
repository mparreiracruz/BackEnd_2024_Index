const express = require('express'); // Importando a ferramenta express.js
const app = express(); // Instanciando o express na constante app
const port = 3000; // Declarando uma constante port. Qual porta iremos utilizar no exemplo 

// Habilitar para utilizar json
app.use(express.json());

let users = []; // Inicializando uma lista vazia de usuários

// Rota GET para obter todos os usuários
app.get('/usuario', (req, res) => {
    if (users.length === 0) { // Verifica se o array de usuários está vazio
        console.log("O campo BODY na opção JSON está vazio");
        return res.status(404).send('Nenhum usuário foi encontrado'); // Retorna 404 se não houver usuários
    }
    
    res.json(users); // Envia a resposta como JSON
    console.log("---------------------------------------- /usuario/get");
    console.log(users);
});

// Rota POST para adicionar um novo usuário
app.post('/usuario', (req, res) => {
    const user = req.body; // Obtém o usuário do corpo da requisição
    // Verificação se o usuário já existe
    if (!user.nome || !user.email) {
        return res.status(400).send('Nome e email são obrigatórios'); // Resposta se o nome ou email estiver ausente
    }
    users.push(user); // Armazenando um usuario na lista users
    res.status(201).send(user); // Retorna o usuário adicionado com status 201
    console.log("---------------------------------------- /usuario/post");
    console.log(user); // Loga o usuário adicionado no console
});

// Rota DELETE para remover um usuário
app.delete('/usuario', (req, res) => {
    const user = req.body; // Obtém o usuário a ser deletado do corpo da requisição
    const index = users.findIndex(x => x.nome === user.nome); // Encontra o índice do usuário pelo nome
    if (index === -1) {
        return res.status(404).send(`Usuário ${user.nome} não encontrado`); // Retorna erro se o usuário não existir
    }
    console.log(`O usuario ${user.nome} foi encontrado na posição ${index}`);
    users.splice(index, 1); // Remove o usuário da lista
    res.send(`Usuário ${user.nome} deletado!`); // Retorna uma mensagem de confirmação
    console.log("---------------------------------------- /usuario/delete");
    console.log(`O usuário ${user.nome} foi deletado com sucesso!`);
});

// Rota PUT para atualizar um usuário
app.put('/usuario', (req, res) => {
    const user = req.body; // Obtém o usuário a ser atualizado do corpo da requisição
    const index = users.findIndex(x => x.nome === user.nome); // Encontra o índice do usuário pelo nome
    if (index === -1) {
        return res.status(404).send(`Usuário ${user.nome} não encontrado`); // Retorna erro se o usuário não existir
    }
    console.log(`O usuario ${user.nome} foi encontrado na posição ${index}`);
    users[index] = { nome: user.nome, email: user.email }; // Atualiza o usuário na lista
    res.send(`Usuário ${user.nome} agora tem e-mail ${user.email}`); // Retorna a confirmação da atualização
    console.log("---------------------------------------- /usuario/put");
    console.log(`O e-mail do usuário ${user.nome} foi atualizado com sucesso`);
});

// Deixar a aplicação ativa, escutando a porta "port"
app.listen(port, () => {
    console.log(`Server ativo na Porta: ${port}`);
});
