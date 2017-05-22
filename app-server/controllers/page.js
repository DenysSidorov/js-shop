import Page from '../models/page';

export async function create(req, resp, next) {
    const pageData = req.body;
    const userId = req.user._id;

    pageData.userId = userId;

    try {
        var page = await Page.create(pageData);
    } catch ({ message }) {
        return next({
            status: 400,
            message
        });
    }

    resp.json(page);
}

export async function getAll(req, resp, next) {


    try {
        var pages = await Page.find({});
    } catch ({ message }) {
        return next({
            status: 500,
            message
        });
    }

    resp.json({ pages });
}