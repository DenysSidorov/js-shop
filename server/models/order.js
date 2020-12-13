import mongoose, {Schema} from 'mongoose';

const OrderSchema = new Schema({
  payment: {type: Object, required: true, default: {}},
  price: {type: Number, required: true, default: 0},
  name: {type: String, required: true},
  phone: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now},
  type: {type: String, required: true, default: 'new'}, // TYPES: new, progress, done, delivery
  delivery: {type: String, default: '-'},
  address: {type: String, default: '-'},
  email: {type: String, default: '-'},
  goods: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Good',
      // _id: {type: String, required: true},
      // count: {type: Number, required: true},
      // name: {type: String},
      // model: {type: String, required: true},
      // sail: {type: Number, required: true},
      // price: {type: Number, required: true}
    }
  ]
});

export default mongoose.model('Order', OrderSchema);
