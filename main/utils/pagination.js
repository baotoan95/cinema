function standardizer(req) {
    let page = req.query.page ? req.query.page - 1 : 0;
    let size = req.query.size ? req.query.size : 10;
    if (page < 0) {
        page = 0;
    }
    if (size < 0) {
        size = Number.MAX_SAFE_INTEGER;
    }
    return {page, size};
}

module.exports = standardizer;