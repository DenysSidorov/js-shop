import mongoose, { Schema } from 'mongoose';

const GoodSchema = new Schema({
    name: { type: String, require: true },
    model: { type: String, require: true },
    createdAt: { type: Date, require: true, default: Date.now },
    size : {type : Array},
    comments : {type : Array},
    price : { type: Number, require: true },
    photo : {type : Array},
    code : { type: String, require: true },
    descShort: {type: String},
    descFull: {type: String},
    tags : {type : Array},
    sail : {type : Number},

    body: { type: String, require: true },
    url: { type: String, require: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Good', GoodSchema);
var t = {
    "_id" : 1,
    "name" : "Victory",
    "model" : "Classic",
    "size" : [
    28,
    35,
    44
],
    "comments" : [
    {
        "_id" : 1,
        "message" : "Хороший практичный портфель, купил себе и очень остался доволен!"
    },
    {
        "_id" : 2,
        "message" : "Качество нормальное, взял ездить на работу, уже пол года служит. Все отлично"
    }
],
    "price" : 650,
    "photo" : [
    "/1-1.jpg",
    "/1-2.jpg",
    "/1-3.jpg",
    "/1-4.jpg"
],
    "code" : "68000",
    "desc-short" : "Мужской портфель, подходит как для школы та и для работы",
    "desc-full" : "Портфель на все случаи жизни. Удобный, легкий, вместительный. Мужской портфель, подходит как для школы та и для работы",
    "tags" : [
    "портфель",
    "черный",
    "мужской",
    "город",
    "школа",
    "работа",
    "спорт"
],
    "sail" : 5,
    "isNew" : true,
    "category" : [
    "мужской",
    "городской",
    "школа"
],
    "isExists" : true,
    "producer" : "China"
}