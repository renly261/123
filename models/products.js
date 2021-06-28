import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
})

// model('products') 裡面的 products 要和 users.js 裡面的 OrderItemSchema 裡面的 p_id 裡面的 ref: 'products' 一樣
const products = mongoose.model('products', productSchema)

export default products
