const express = require('express')

const server = express()

server.get('/cursos', (req, res) => {
  return res.json({
    curso: 'Node.Js'
  })
})

server.listen(3000)
