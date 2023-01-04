const express = require('express')

const server = express()

//Comando indicando que estamos recebendo e trabalhando com obejtos JSON
server.use(express.json())

//Query params - parametros que passamos na frente da roda

//Route params - paramentos de acesso enviado via rota

//Request Body - requisição de obejto contendo informações

const cursos = ['NodeJs', 'JavaScript', 'React Native']

//Pega todos os cursos do Array
server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

//Pega curso referenciando o index
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params

  return res.json(cursos[index])
})

//Salvando um novo curso
server.post('/cursos', (req, res) => {
  const { nome } = req.body

  cursos.push(nome)

  return res.json(cursos)
})

//Atualizando cursos
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params

  const { nome } = req.body

  cursos[index] = nome

  return res.json(cursos)
})

//Deletando cursos
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params

  cursos.splice(index, 1)

  return res.json(cursos)
})

//localhost:3000
server.listen(3000)
