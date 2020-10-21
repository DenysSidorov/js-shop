import Order from '../models/order';
import {sendMailWithOrder} from '../services/sendMailWithOrder';

export const getTypes = async (req, resp, next) => {
  let result = {};
  try {
    // let resMongo = await Order.find({},{_id:false, type: true});
    result = await Order.aggregate([
      {
        $match: {
          type: {$not: {$size: 0}}
        }
      },
      {$unwind: '$type'},
      {
        $group: {
          _id: {$toLower: '$type'},
          count: {$sum: 1}
        }
      }
    ]);
  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(result);
};

export async function create(req, resp, next) {
  const order = req.body;
  order.site = 'doshki.com';
  try {
    const newOrder = await Order.create(order);
    console.log(newOrder, 'New Order');

    setTimeout(() => {
      sendMailWithOrder({email: undefined, order: newOrder});
    }, 0);
  } catch ({message}) {
    return next({
      status: 400,
      message
    });
  }
  resp.json(order);
}

export const createFromLand = create;

export async function getAll(req, resp, next) {
  const filter = req.query ? req.query.type : null;
  let orders = [];
  try {
    if (filter && filter !== 'main') {
      orders = await Order.find({type: {$in: [filter]}}).limit(1000);
    } else {
      orders = await Order.find({}).limit(1000);
    }
  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(orders);
}

export const changeType = async (req, resp, next) => {
  const orderId = req.body._id;
  const orderType = req.body.type;
  if (['new', 'progress', 'done', 'delivery'].indexOf(orderType) !== -1) {
    console.log(req.token._id, "admin's token id");
    let result = false;
    try {
      const resMongo = await Order.update({_id: orderId}, {type: orderType});
      console.log(resMongo, 'resMongo');
      result = true;
    } catch ({message}) {
      return next({
        status: 500,
        message
      });
    }
    resp.json(result);
  } else {
    return next({
      status: 400,
      message: 'Bad request, unusable type of order'
    });
  }
};
