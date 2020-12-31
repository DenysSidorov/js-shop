import mongoose, {Schema} from 'mongoose';

const GoodSchema = new Schema({
  _id: {type: String, required: true},
  name: {type: String},
  model: {type: String},
  createdAt: {type: Date, default: Date.now}, // timestamps: true - will add createdAt, updatedAt
  size: {type: Array},
  comments: {type: Array},
  price: {type: Number},
  photo: {type: Array},
  code: {type: String},
  'desc-short': {type: String},
  'desc-full': {type: String},
  tags: {type: Array},
  sail: {type: Number},
  isNewGood: {type: Boolean},
  category: {type: Array},
  isExists: {type: Boolean},
  producer: {type: String},
  views: {type: Number, default: 0}
});

export default mongoose.model('Good', GoodSchema);

/**
{
  _id: 1,
  name: 'Victory',
  model: 'Classic',
  size: [28, 35, 44],
  comments: [
    {
      _id: 1,
      message: 'Хороший практичный портфель, купил себе и очень остался доволен!'
    },
    {
      _id: 2,
      message: 'Качество нормальное, взял ездить на работу, уже пол года служит. Все отлично'
    }
  ],
  price: 650,
  photo: ['/1-1.jpg', '/1-2.jpg', '/1-3.jpg', '/1-4.jpg'],
  code: '68000',
  'desc-short': 'Мужской портфель, подходит как для школы та и для работы',
  'desc-full':
    'Портфель на все случаи жизни. Удобный, легкий, вместительный. Мужской портфель, подходит как для школы та и для работы',
  tags: ['портфель', 'черный', 'мужской', 'город', 'школа', 'работа', 'спорт'],
  sail: 5,
  isNew: true,
  category: ['мужской', 'городской', 'школа'],
  isExists: true,
  producer: 'China'
}
*/
