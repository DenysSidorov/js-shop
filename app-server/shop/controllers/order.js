import Order from "../models/order";


export async function create(req, resp, next) {
    var order = req.params;
    var body = req.body.order;
console.log(order, 'ORDERS');
console.log(body, 'BODY');
    // try {
    //     var order = await Order.create({order: order});
    // } catch ({message}) {
    //     return next({
    //         status: 400,
    //         message
    //     });
    // }
    resp.json(body);
}

