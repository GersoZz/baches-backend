import Bache from '../../../models/bache.model.js'

export async function insertBache(bacheData) {
  const bache = new Bache(bacheData)
  return await bache.save()
}

export async function getAllBaches() {
  return await Bache.find().sort({ fecha: -1 })
}

