import Good from "../models/good";

export async function getAll(req, resp, next) {
    try {
        var goods = await Good.find({}).limit(50);

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
