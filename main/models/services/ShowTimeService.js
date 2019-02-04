const ShowTimeRepo = require('../repositories/ShowTimeRepository');
const ResponseEntityFactory = require('../../core/ResponseEntityFactory');
const ResponseStatus = require('../../constants/ResponseStatus');
const pagination = require('../../utils/pagination');

create = async (req) => {
    try {
        const showTime = req.body;
        const newShowTime = await ShowTimeRepo.create(showTime);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, newShowTime);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

update = async (req) => {
    try {
        const existedShowTime = await ShowTimeRepo.findById(req.body.id);

        if(existedShowTime) {
            const updatedShowTime = await ShowTimeRepo.update(req.body);
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, updatedShowTime);
        } else {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, 'ShowTime is not existed in the system');
        }
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findAll = async (req) => {
    const paging = pagination(req);
    try {
        const data = await ShowTimeRepo.findAll(paging.page, paging.size);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, data);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findById = async (req) => {
    const id = req.params.id;
    if (id) {
        const showTime = await ShowTimeRepo.findById(id);
        if(showTime) {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, showTime);
        } else {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, null, null);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param');
    }
}

deleteShowTime = async (req) => {
    const id = req.params.id;
    if(id) {
        try {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, ShowTimeRepo.delete(id));
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
    delete: deleteShowTime
}