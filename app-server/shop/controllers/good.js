import Good from '../models/good';

export async function getAll(req, resp, next) {
  const filter = req.query && req.query.sort ? req.query.sort : null;
  // db.users.find().skip(pagesize*(n-1)).limit(pagesize)
  let pageSize = req.query && req.query.pagesize ? req.query.pagesize : null;
  let numberPage = req.query && req.query.numberpage ? req.query.numberpage : null;
  pageSize = Number(pageSize);
  numberPage = Number(numberPage);
  let goods = {goods: [], count: 0};

  try {
    if (filter && filter !== 'main') {
      let goodsResponse;
      if (pageSize && numberPage) {
        goodsResponse = await Good.find({category: {$in: [filter]}})
          .sort()
          .skip(pageSize * (numberPage - 1))
          .limit(pageSize);
      } else {
        goodsResponse = await Good.find({category: {$in: [filter]}})
          .sort()
          .limit(50);
      }
      const countResponse = await Good.find({category: {$in: [filter]}}).count();
      goods = {goods: goodsResponse, count: countResponse};
      console.log('++', goods);
    } else {
      let goodsResponse;
      if (pageSize && numberPage) {
        goodsResponse = await Good.find({})
          .sort()
          .skip(pageSize * (numberPage - 1))
          .limit(pageSize);
      } else {
        goodsResponse = await Good.find({}).sort().limit(50);
      }
      const countResponse = await Good.find({}).count();
      goods = {goods: goodsResponse, count: countResponse};
    }
  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(goods);
}

export async function getById(req, resp, next) {
  const {id} = req.params;
  let goods = [];
  try {
    goods = await Good.find({_id: id});
    if (goods) {
      setTimeout(async () => {
        try {
          await Good.update({_id: id}, {$inc: {views: 1}});
        } catch ({message}) {
          console.log(message);
        }
      }, 10);
    }
  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(goods);
}

export async function getSimilar(req, resp, next) {
  const categoryArr = req.body.params.category;
  let goods = [];
  try {
    goods = await Good.find({category: {$in: categoryArr}}).limit(10);
  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(goods);
}

export async function getUniqCategory(req, resp, next) {
  let result = {};
  try {
    // let goods = await Good.distinct('category');
    // let resMongo = await Order.find({},{_id:false, type: true});
    result = await Good.aggregate([
      {
        $match: {
          category: {$not: {$size: 0}}
        }
      },
      {$unwind: '$category'},
      {
        $group: {
          _id: {$toLower: '$category'},
          count: {$sum: 1}
        }
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: 1
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
}

/** categories-with-top-products' */
export async function getCategoriesWithTopProducts(req, resp, next) {
  let result = {};
  try {
    // var goods = await Good.distinct('category');
    // let resMongo = await Order.find({},{_id:false, type: true});
    result = await Good.aggregate([
      {
        // search by criteria
        $match: {
          category: {$not: {$size: 0}}
        }
      },
      {$unwind: '$category'}, // split array on distinct parts
      {
        $group: {
          _id: {$toLower: '$category'},
          count: {$sum: 1}
        }
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: 1
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
}

export async function getPopular(req, resp, next) {
  const {category} = req.query;
  let items = req.query.items || 7;
  items = Number.parseInt(items, 10);
  let goods = [];
  try {
    goods = await Good.find(category ? {category: {$in: [category]}} : {})
      .sort('views')
      .limit(items);
    // var goods = await Good.aggregate([
    //   // {cursor: { batchSize: 1024 }},
    //   {$sort: {views: -1}},
    //   {$limit: 7},
    // ]);
  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(goods);
}

export async function create(req, resp, next) {
  const {name} = req.body;
  let newItemName = '';
  try {
    newItemName = await Good.create({name});
  } catch ({message}) {
    return next({
      status: 400,
      message
    });
  }
  resp.json(newItemName);
}
