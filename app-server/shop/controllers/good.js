import Good from "../models/good";




export async function getAll(req, resp, next) {

    var filter = req.query ? req.query.sort : null;
    console.log(filter, 'filter2');
    // encodeURI('школа')
    // "%D1%88%D0%BA%D0%BE%D0%BB%D0%B0"
    // decodeURI('%D1%88%D0%BA%D0%BE%D0%BB%D0%B0')
    // "школа"
    try {
        var goods;
        if(filter){
            // filter = decodeURI(filter);
            console.log(filter, 'RESULT BAD');
            goods = await Good.find({category: {$in : [filter] }}).limit(50);
            if(filter == 'main'){
                goods = await Good.find({}).limit(50);
            } else {
                goods = await Good.find({category: {$in : [filter] }}).limit(50);
            }

        } else {
            console.log('RESULT Good');
             goods = await Good.find({}).limit(50);
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
    try {
        var goods = await Good.distinct('category');
    } catch ({message}) {
        return next({
            status: 500,
            message
        });
    }
    resp.json(goods);
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
