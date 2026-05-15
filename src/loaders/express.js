import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from '../api/index.js'
import config from '../config/index.js'

export default async (app) => {
  console.log('🚀 ~ config.frontendURL:', config.frontendURL)
  app.use(
    cors({
      credentials: true,
      origin: config.frontendURL
    })
  )
  app.use(morgan('dev'))
  app.use(cookieParser())

  // Transforms the raw string of req.body into json
  app.use(express.json())

  // mdiddleware for parsing URL-encoded data sent from HTML forms.
  app.use(express.urlencoded({ extended: false }))

  app.get('/ping', (_req, res) => {
    res.send('pong')
  })

  // Load API routes
  app.use(config.api.prefix, routes())

  app.get('*', (_req, res) => {
    res.status(404).json({
      success: false,
      data: { message: 'Not Found' }
    })
  })

  return app
}
