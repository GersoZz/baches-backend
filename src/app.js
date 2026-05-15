import express from 'express'
import config from './config/index.js'
import loaders from './loaders/index.js'

async function startServer() {
  const app = express()

  await loaders(app)

  app.listen(config.port, () => {
    console.log(`Server is now running on http://localhost:${config.port}/`)
  })
}

void startServer()
