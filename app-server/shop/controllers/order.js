import Order from "../models/order";


export async function create(req, resp, next) {
    var order = req.body;
    try {
        var order = await Order.create(order);
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }
    resp.json(order);
}

export async function getAll(req, resp, next) {
    var filter = req.query ? req.query.type : null;
    try {
        var orders;
        if(filter && filter != 'main'){
            orders = await Order.find({type: {$in : [filter] }}).limit(1000);
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


