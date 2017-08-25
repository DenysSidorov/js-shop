import mongoose, {Schema} from "mongoose";

const OrderSchema = new Schema({

    payment: {type: Object, require: true},
    delivery: {type: String, require: true},
    name: {type: String, require: true},
    address: {type: String, require: true},
    phone: {type: String, require: true},
    email: {type: String},
    goods: [{
        _id: {type: Number, require: true},
        count: {type: Number, require: true},
        name: {type: String, require: true},
        model: {type: String, require: true},
        sail: {type: Number, require: true},
        price: {type: Number, require: true},
        createdAt: { type: Date, require: true, default: Date.now }
    }]


    // name: { type: String, require: true },
    // model: { type: String, require: true },
    // createdAt: { type: Date, require: true, default: Date.now },
    // size : {type : Array, require: true},
    // comments : {type : Array, require: true},
    // price : { type: Number, require: true },
    // photo : {type : Array, require: true},
    // code : { type: String, require: true },
    // 'desc-short' : {type: String, require: true},
    // 'desc-full' : {type: String, require: true},
    // tags : {type : Array, require: true},
    // sail : {type : Number, require: true},
    // isNewGood : {type: Boolean, require: true},
    // category : {type : Array, require: true },
    // isExists : {type: Boolean, require: true},
    // producer: {type: String, require: true}
});

export default mongoose.model('Order', OrderSchema);