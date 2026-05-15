import { insertBache } from '../data/baches.data.js'

export async function crearBache(datos) {
  return await insertBache(datos)
}

