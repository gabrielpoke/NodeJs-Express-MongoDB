const express = require('express')

const server = express()
//Query params - parametros que passamos na frente da roda

//Route params - paramentos de acesso enviado via rota

//Request Body - requisição de obejto contendo informações

server.get('/cursos/:id', (req, res) => {
  const id = req.params.id

  const nome = req.query.nome

  return res.json({
    cursos: `Nome do curso ${nome}`,
    id: `Id do curso ${id}`
  })
})

server.listen(3000)
