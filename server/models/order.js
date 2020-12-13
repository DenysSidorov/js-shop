import mongoose, {Schema} from 'mongoose';

const OrderSchema = new Schema({
  payment: {type: Object, default: {}},
  price: {type: Number, default: 0},
  delivery: {type: String, default: '-'},
  name: {type: String, default: '-'},
  address: {type: String, default: '-'},
  phone: {type: String, required: true},
  email: {type: String},
  createdAt: {type: Date, default: Date.now},
  type: {type: String, default: 'new'}, // TYPES: new, progress, done, delivery
  goods: [
    {
      _id: {type: String},
      count: {type: Number},
      name: {type: String},
      model: {type: String},
      sail: {type: Number},
      price: {type: Number}
    }
  ]
});

export default mongoose.model('Order', OrderSchema);
