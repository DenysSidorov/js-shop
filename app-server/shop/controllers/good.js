import Good from "../models/good";

export async function getAll(req, resp, next) {
    try {
        var goods = await Good.find({}, {'_id': 1, 'sail': 1} );

    } catch ({message}) {
        return next({
            status: 500,
            message
        });
    }
console.log(goods);
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
