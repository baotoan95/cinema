const PageRepo = require('../repositories/PageRepository');
const ResponseEntityFactory = require('../../core/ResponseEntityFactory');
const ResponseStatus = require('../../constants/ResponseStatus');
const pagination = require('../../utils/pagination');

create = async (req) => {
    try {
        const page = req.body;
        const newPage = await PageRepo.create(page);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, newPage);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

update = async (req) => {
    try {
        const existedpage = await PageRepo.findById(req.body.id);

        if(existedpage) {
            const updatedpage = await PageRepo.update(req.body);
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, updatedpage);
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
        const data = await PageRepo.findAll(paging.page, paging.size);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, data);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findById = async (req) => {
    const id = req.params.id;
    if (id) {
        const page = await PageRepo.findById(id);
        if(page) {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, page);
        } else {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, null, null);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param');
    }
}

deletePage = async (req) => {
    const id = req.params.id;
    if(id) {
        try {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, PageRepo.delete(id));
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
    delete: deletePage
}