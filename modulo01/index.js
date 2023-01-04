const express = require('express')

const server = express()

//Comando indicando que estamos recebendo e trabalhando com obejtos JSON
server.use(express.json())

//Query params - parametros que passamos na frente da roda

//Route params - paramentos de acesso enviado via rota

//Request Body - requisição de obejto contendo informações

const cursos = ['NodeJs', 'JavaScript', 'React Native']

//Middleware Global
server.use((req, res, next) => {
  console.log(`Url : ${req.url}`)

  return next()
})

//Middleware parte de codigo que fica entre a resposta e requisição
function checkCurso(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ error: 'Nome do curso não informado' })
  }

  return next()
}

//Middleware
function checkIndexCurso(req, res, next) {
  const curso = cursos[req.params.index]

  if (!curso) {
    return res.status(400).json({ error: 'Curso não achado' })
  }

  req.curso = curso
  return next()
}

//Pega todos os cursos do Array
server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

//Pega curso referenciando o index
server.get('/cursos/:index', checkIndexCurso, (req, res) => {
  return res.json(req.curso)
})

//Salvando um novo curso
server.post('/cursos', checkCurso, (req, res) => {
  const { nome } = req.body

  cursos.push(nome)

  return res.json(cursos)
})

//Atualizando cursos
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
  const { index } = req.params

  const { nome } = req.body

  cursos[index] = nome

  return res.json(cursos)
})

//Deletando cursos
server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
  const { index } = req.params

  cursos.splice(index, 1)

  return res.json(cursos)
})

//localhost:3000
server.listen(3000)
