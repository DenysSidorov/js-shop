import express from 'express';
const router = express.Router();



router.get('/*', (req, resp, next) => {
    let body = req.body;
    let query = req.query;
    let params = req.params;
    let headers = req.headers;

    // console.log(req, 'req'.toUpperCase());
    console.log(body, 'body'.toUpperCase());
    console.log(query, 'query'.toUpperCase());
    console.log(params, 'params'.toUpperCase());
    // console.log(headers, 'headers'.toUpperCase());
    // resp.next({message: 'lol', number: 303})
    resp.json('mockRDApi');
})
export default router;