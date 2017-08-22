import Order from "../models/order";


export async function create(req, resp, next) {
    var order = req.body.order;

    try {
        var order = await Order.create({order: order});
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }
    resp.json(order);
}

