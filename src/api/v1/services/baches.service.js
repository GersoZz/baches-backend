import { v2 as cloudinary } from 'cloudinary'
import config from '../../../config/index.js'
import { insertBache, getAllBaches } from '../data/baches.data.js'

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret
})

function subirImagen(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'baches' },
      (error, result) => {
        if (error) return reject(error)
        resolve(result.secure_url)
      }
    )
    stream.end(buffer)
  })
}

export async function crearBache(datos, archivo) {
  let imageUrl = ''
  if (archivo) {
    imageUrl = await subirImagen(archivo.buffer)
  }
  return await insertBache({ ...datos, imageUrl })
}

export async function listarBaches() {
  return await getAllBaches()
}

