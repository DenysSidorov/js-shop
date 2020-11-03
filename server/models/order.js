import mongoose, {Schema} from 'mongoose';

const OrderSchema = new Schema({
  payment: {type: Object, require: true, default: {}},
  price: {type: Number, require: true, default: 0},
  delivery: {type: String, require: true, default: '-'},
  name: {type: String, require: true, default: '-'},
  address: {type: String, require: true, default: '-'},
  phone: {type: String, require: true},
  email: {type: String},
  createdAt: {type: Date, require: true, default: Date.now},
  type: {type: String, require: true, default: 'new'}, // TYPES: new, progress, done, delivery
  goods: [
    {
      _id: {type: String, require: true},
      count: {type: Number, require: true},
      name: {type: String, require: true},
      model: {type: String, require: true},
      sail: {type: Number, require: true},
      price: {type: Number, require: true}
    }
  ]
});

export default mongoose.model('Order', OrderSchema);
