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
    var filter = req.query ? req.query.kind : null;
    try {
        var goods;
        if(filter){
            goods = await Good.find({category: {$in : [filter] }}).limit(1000);
            if(filter == 'main'){
                goods = await Good.find({}).limit(350);
            } else {
                goods = await Good.find({category: {$in : [filter] }}).limit(1000);
            }

        } else {
            goods = await Good.find({}).limit(1000);
        }


    } catch ({message}) {
        return next({
            status: 500,
            message
        });
    }
    resp.json(orders);
}


