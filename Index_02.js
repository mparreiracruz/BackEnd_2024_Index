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

/*
Aqui estão alguns dos comandos de navegação de pasta no CMD (Prompt de Comando do Windows):

Listar o conteúdo da pasta atual:

Comando: dir
Exibe todos os arquivos e pastas dentro da pasta atual.
Mudar para outra pasta:

Comando: cd [nome_da_pasta]
Exemplo: cd Documentos
Esse comando leva você para a pasta especificada.
Voltar uma pasta:

Comando: cd ..
Retorna para a pasta anterior no diretório.
Mudar para uma unidade diferente:

Comando: [letra_da_unidade]:
Exemplo: D:
Isso muda para a unidade especificada (C:, D:, etc.).
Mudar para um caminho completo de pasta:

Comando: cd [caminho_completo]
Exemplo: cd C:\Users\Matheus\Desktop
Limpar a tela do terminal:

Comando: cls
Limpa o conteúdo visível no CMD.
*/