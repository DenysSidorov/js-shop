module.exports = function errors(err, req, resp, next) {
    let {status = 500, message = 'Server Error'} = err;
    if (!err) {
        next();
    } else {
       return resp.status(status)
            .json({
                message
            })
    }
}
