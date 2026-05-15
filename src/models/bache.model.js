import { Schema, model } from 'mongoose'

const bacheSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    ubicacion: { type: String, required: true },
    imageUrl: { type: String, default: '' },
    fecha: { type: Date, default: Date.now }
  },
  { versionKey: false }
)

export default model('Bache', bacheSchema)

