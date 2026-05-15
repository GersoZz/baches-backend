import { crearBache } from '../services/baches.service.js'

export async function crearBacheController(req, res) {
  try {
    const bache = await crearBache(req.body)
    res.status(201).json({ success: true, data: bache })
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } })
  }
}

