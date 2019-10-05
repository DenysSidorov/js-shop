import Good from "../models/good";


export async function getAll(req, resp, next) {
  var filter = req.query && req.query.sort ? req.query.sort : null;
  // db.users.find().skip(pagesize*(n-1)).limit(pagesize)
  var pageSize = req.query && req.query.pagesize ? req.query.pagesize : null;
  var numberPage = req.query && req.query.numberpage ? req.query.numberpage : null;
  pageSize = Number(pageSize);
  numberPage = Number(numberPage);
  console.log(filter, pageSize, numberPage);
  try {
    var goods;
    if (filter && filter != 'main') {
      let goodsResponse;
      if (pageSize && numberPage) {
        console.log(111);
        goodsResponse = await Good
          .find({category: {$in: [filter]}})
          .sort()
          .skip(pageSize * (numberPage - 1))
          .limit(pageSize)
      } else {
        console.log(222);
        goodsResponse = await Good.find({category: {$in: [filter]}}).sort().limit(50);
      }
      let countResponse = await Good.find({category: {$in: [filter]}}).count();
      goods = {goods: goodsResponse, count: countResponse}
    } else {

      let goodsResponse;
      if (pageSize && numberPage) {
        console.log(333);
        goodsResponse = await Good.find({}).sort().skip(pageSize * (numberPage - 1)).limit(pageSize)
      } else {
        console.log(444);
        goodsResponse = await Good.find({}).sort().limit(50);
      }
      let countResponse = await Good.find({}).count();
      goods = {goods: goodsResponse, count: countResponse}
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
  var id = req.params.id;
  try {
    var good = await Good.find({_id: id});
    console.log('============', id, good);
    if (good) {
      setTimeout(async () => {
        try {
          var climbResult = await Good.update({_id: id}, {$inc: {"views": 1}});
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
  resp.json(good);
}

export async function getSimilar(req, resp, next) {
  var categoryArr = req.body.params.category;
  try {
    var goods = await Good.find({category: {$in: categoryArr}}).limit(10);
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
    // var goods = await Good.distinct('category');
    // let resMongo = await Order.find({},{_id:false, type: true});
    let resMongo = await Good.aggregate([
      {
        $match: {
          category: {$not: {$size: 0}}
        }
      },
      {$unwind: "$category"},
      {
        $group: {
          _id: {$toLower: '$category'},
          count: {$sum: 1,}
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          count: 1,
        }
      }

    ]);
    // console.log(resMongo, 'resMongo');
    result = resMongo;

  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(result);
  // try {
  //       var goods = await Good.distinct('category');
  //   } catch ({message}) {
  //       return next({
  //           status: 500,
  //           message
  //       });
  //   }
  //   resp.json(goods);
}

// /categories-with-top-products'
export async function getCategoriesWithTopProducts(req, resp, next) {

  let result = {};
  try {
    // var goods = await Good.distinct('category');
    // let resMongo = await Order.find({},{_id:false, type: true});
    let resMongo = await Good.aggregate([
      { // поиск по критерию
        $match: {
          category: {$not: {$size: 0}}
        }
      },
      {$unwind: "$category"}, // разбивает массив на отдельные документы
      {
        $group: { // ...
          _id: {$toLower: '$category'},
          count: {$sum: 1,}
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          count: 1,
        }
      }

    ]);
    // console.log(resMongo, 'resMongo');
    result = resMongo;

  } catch ({message}) {
    return next({
      status: 500,
      message
    });
  }
  resp.json(result);
  // try {
  //       var goods = await Good.distinct('category');
  //   } catch ({message}) {
  //       return next({
  //           status: 500,
  //           message
  //       });
  //   }
  //   resp.json(goods);
}

export async function getPopular(req, resp, next) {
  const category = req.query.category;
  let items = req.query.items || 7;
  items = Number.parseInt(items, 10);
  // console.log('===========', category);
  try {
    // Your logic
    var goods = await Good
      .find(category ? { category: {$in: [category]}} : {})
      .sort('views')
      .limit(items);
    // var goods = await Good.find({}).limit(6);
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
  var name = req.body.name;

  try {
    var name = await Good.create({name: name});
  } catch ({message}) {
    return next({
      status: 400,
      message
    });
  }
  resp.json(name);
}
