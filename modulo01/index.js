const express = require('express')

const server = express()
//Query params - parametros que passamos na frente da roda

//Route params - paramentos de acesso enviado via rota

//Request Body - requisição de obejto contendo informações

const cursos = ['NodeJs', 'JavaScript', 'React Native']

server.get('/cursos/:index', (req, res) => {
  const { index } = req.params

  return res.json(cursos[index])
})

server.get('/cursos', (req, res) => {
  const { nome } = req.query

  return res.json({ nome: `Nome do curso ${nome}` })
})

//localhost:3000
server.listen(3000)
