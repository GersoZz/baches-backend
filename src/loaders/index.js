import expressLoader from './express.js'
import mongooseLoader from './mongoose.js'

export default async (expressApp) => {
  await mongooseLoader().then(() => {
    console.log('Database Conexion Ready')
  })
  await expressLoader(expressApp)
  console.log('Express Initialized')
}
