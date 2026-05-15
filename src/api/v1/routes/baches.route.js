import { Router } from 'express'
import multer from 'multer'
import { crearBacheController, listarBachesController } from '../controllers/baches.controller.js'

const upload = multer({ storage: multer.memoryStorage() })

export default (app) => {
  const router = Router()
  app.use('/baches', router)

  router.get('/', listarBachesController)
  router.post('/', upload.single('imagen'), crearBacheController)
}

