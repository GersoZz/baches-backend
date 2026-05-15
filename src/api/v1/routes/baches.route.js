import { Router } from 'express'
import { crearBacheController } from '../controllers/baches.controller.js'

export default (app) => {
  const router = Router()
  app.use('/baches', router)

  router.post('/', crearBacheController)
}

