import { crearBache, listarBaches } from '../services/baches.service.js'

export async function crearBacheController(req, res) {
  try {
    const bache = await crearBache(req.body, req.file)
    res.status(201).json({ success: true, data: bache })
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } })
  }
}

export async function listarBachesController(req, res) {
  try {
    const baches = await listarBaches()
    res.status(200).json({ success: true, data: baches })
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } })
  }
}

