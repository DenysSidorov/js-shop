import Order from "../models/order";


export async function create(req, resp, next) {
    var params = req.params;
    var query = req.query;
    var body = req.body;
console.log(params, 'params');
console.log(query, 'query');
//console.log(body, 'body');
    try {
        var order = await Order.create(body);
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }
    resp.json(order);
}

