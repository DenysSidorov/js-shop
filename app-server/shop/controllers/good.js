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
    var idPar = req.params.id;
    console.log(idPar, " --idPar-- ");
    var idBody = req.body.id;
    console.log(idBody, " --idBody-- ");
    try {
        var good = await Good.find({_id: 1});

    } catch ({message}) {
        return next({
            status: 500,
            message
        });
    }
    resp.json(good);
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
