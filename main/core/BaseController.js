_excute = (req, res, interceptors, asynInterceptors, businessService) => {
    businessService(req, res).then(rs => {
        res.status(rs.code);
        res.json(rs.data);
    }).catch(err => {
        console.log(err);
        res.status(err.code);
        res.json(err.message);
    });
}

module.exports = {
    excute: _excute
}