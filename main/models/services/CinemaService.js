const CinemaRepo = require('../repositories/CinemaRepository');
const ResponseEntityFactory = require('../../core/ResponseEntityFactory');
const ResponseStatus = require('../../constants/ResponseStatus');
const pagination = require('../../utils/pagination');

create = async (req) => {
    try {
        const cinema = req.body;
        const newCinema = await CinemaRepo.create(cinema);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, newCinema);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

update = async (req) => {
    try {
        const existedCinema = await CinemaRepo.findById(req.body.id);

        if(existedCinema) {
            const updatedMovie = await CinemaRepo.update(req.body);
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, updatedMovie);
        } else {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, 'Cinema is not existed in the system');
        }
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findAll = async (req) => {
    const paging = pagination(req);
    try {
        const data = await CinemaRepo.findAll(paging.page, paging.size);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, data);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findById = async (req) => {
    const id = req.params.id;
    if (id) {
        const cinema = await CinemaRepo.findById(id);
        if(cinema) {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, cinema);
        } else {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, null, null);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param');
    }
}

deleteCinema = async (req) => {
    const id = req.params.id;
    if(id) {
        try {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, CinemaRepo.delete(id));
        } catch (err) {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param', null);
    }
}

module.exports = {
    create,
    update,
    findAll,
    findById,
    delete: deleteCinema
}