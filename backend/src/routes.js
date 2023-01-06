import { Router } from 'express'
import multer from 'multer'

import HouseController from './controllers/HouseController'
import SessionController from './controllers/SessionController'
import upload from './config/upload'

const routes = new Router()
const uploads = new multer(upload)

routes.post('/sessions', SessionController.store)

routes.post('/houses', uploads.single('thumbnail'), HouseController.store)

export default routes
