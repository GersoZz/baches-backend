import Bache from '../../../models/bache.model.js'

export async function insertBache(bacheData) {
  const bache = new Bache(bacheData)
  return await bache.save()
}

