import { insertBache, getAllBaches } from '../data/baches.data.js'

export async function crearBache(datos) {
  return await insertBache(datos)
}

export async function listarBaches() {
  return await getAllBaches()
}

