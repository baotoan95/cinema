const CinemaBranchRepo = require('../repositories/CinemaBranchRepository');
const ResponseEntityFactory = require('../../core/ResponseEntityFactory');
const ResponseStatus = require('../../constants/ResponseStatus');

create = async (req) => {
    try {
        const cinemaBranch = req.body;
        const newCinemaBranch = await CinemaBranchRepo.create(cinemaBranch);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, newCinemaBranch);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

update = async (req) => {
    try {
        const existedCinemaBranch = await CinemaBranchRepo.findById(req.body.id);

        if(existedCinemaBranch) {
            const updatedCinemaBranch = await CinemaBranchRepo.update(req.body);
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, updatedCinemaBranch);
        } else {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, 'Cinema branch is not existed in the system');
        }
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findAll = async (req) => {
    const page = req.query.page || 0;
    let size = req.query.size || 0;
    try {
        if (size <= 0) {
            size = Number.MAX_SAFE_INTEGER;
        }
        const data = await CinemaBranchRepo.findAll(page, size);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, data);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findById = async (req) => {
    const id = req.params.id;
    if (id) {
        const cinemaBranch = await CinemaBranchRepo.findById(id);
        if(cinemaBranch) {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, cinemaBranch);
        } else {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, null, null);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param');
    }
}

deleteCinemaBranch = async (req) => {
    const id = req.params.id;
    if(id) {
        try {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, CinemaBranchRepo.delete(id));
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
    delete: deleteCinemaBranch
}