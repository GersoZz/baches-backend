import { Router } from 'express'
import { crearBacheController, listarBachesController } from '../controllers/baches.controller.js'

export default (app) => {
  const router = Router()
  app.use('/baches', router)

  router.get('/', listarBachesController)
  router.post('/', crearBacheController)
}

