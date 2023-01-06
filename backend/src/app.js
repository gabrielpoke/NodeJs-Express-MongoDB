//yarn add express -D
import express from 'express'

//yarn add mongoose -D
import mongoose from 'mongoose'

import routes from './routes'

class App {
  constructor() {
    this.server = express()

    //Remove o warning do mongoose
    mongoose.set('strictQuery', true)

    //Parte de conecção com o Banco MongoDB
    mongoose.connect(
      'mongodb+srv://devhouse:devhouse@devhouse.do5qb8h.mongodb.net/devhouse?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
