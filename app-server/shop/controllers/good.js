import Good from "../models/good";

export async function getAll(req, resp, next) {
    var filter = req.query ? req.query.sort : null;
    try {
        var goods;
        if(filter && filter != 'main'){
            goods = await Good.find({category: {$in : [filter] }}).limit(1000);
        } else {
             goods = await Good.find({}).limit(1000);
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
        var goods = await Good.find({category: {$in : categoryArr }});
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
            { $project: {
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
    //     var goods = await Good.distinct('category');
    //
    // } catch ({message}) {
    //     return next({
    //         status: 500,
    //         message
    //     });
    // }
    // resp.json(goods);
}

export async function getPopular(req, resp, next) {
    try {
        // Your logic
        // var goods = await Good.find({}).limit(6);
        var goods = await Good.aggregate([
            {$sort : {likes: -1 }},
            {$limit: 7},
        ]);
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

//
// export async function getAll(req, resp, next) {
//
//
//     try {
//         var pages = await Page.find({});
//     } catch ({ message }) {
//         return next({
//             status: 500,
//             message
//         });
//     }
//
//     resp.json({ pages });
// }
