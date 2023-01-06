import { Schema, model } from 'mongoose'

const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  Status: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model('House', HouseSchema)
