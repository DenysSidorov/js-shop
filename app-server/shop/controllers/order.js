import Order from "../models/order";


export async function create(req, resp, next) {
    var params = req.params;
    var query = req.query;
    var order = req.body;
console.log(params, 'params');
console.log(query, 'query');
console.log(order, 'order2');


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

