const MovieRepo = require('../repositories/MovieRepository');
const ResponseEntityFactory = require('../../core/ResponseEntityFactory');
const ResponseStatus = require('../../constants/ResponseStatus');
const pagination = require('../../utils/pagination');

create = async (req) => {
    try {
        const movie = req.body;
        const newMovie = await MovieRepo.create(movie);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, newMovie);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

update = async (req) => {
    try {
        const existedMovie = await MovieRepo.findById(req.body.id);

        if(existedMovie) {
            const updatedMovie = await MovieRepo.update(req.body);
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, updatedMovie);
        } else {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, 'Page is not existed in the system');
        }
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findAll = async (req) => {
    const paging = pagination(req);
    try {
        const data = await MovieRepo.findAll(paging.page, paging.size);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, data);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findById = async (req) => {
    const id = req.params.id;
    if (id) {
        const movie = await MovieRepo.findById(id);
        if(movie) {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, movie);
        } else {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, null, null);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param');
    }
}

deleteMovie = async (req) => {
    const id = req.params.id;
    if(id) {
        try {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, MovieRepo.delete(id));
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
    delete: deleteMovie
}