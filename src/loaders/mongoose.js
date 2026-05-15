import mongoose from 'mongoose'
import config from '../config/index.js'

async function dbConnect() {
  const DB_URI = config.databaseURL
  await mongoose.connect(DB_URI)
}

export default dbConnect
