import { Router } from 'express'
import baches from './v1/routes/baches.route.js'

export default () => {
  const app = Router()

  baches(app)

  return app
}
