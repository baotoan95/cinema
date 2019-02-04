const UserRepo = require('../repositories/UserRepository');
const ResponseEntityFactory = require('../../core/ResponseEntityFactory');
const ResponseStatus = require('../../constants/ResponseStatus');
const pagination = require('../../utils/pagination');

create = async (req) => {
    try {
        const existedUser = await UserRepo.findByUsername(req.body.username);
        if (existedUser) {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Username is existed in the system');
        }
        const user = req.body;
        const newUser = await UserRepo.create(user);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, newUser);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

update = async (req) => {
    try {
        const existedUser = await UserRepo.findById(req.body.id);

        if(existedUser) {
            const newUser = req.body;
            delete newUser.username;
            const updatedUser = await UserRepo.update(req.body);
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, null);
        } else {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, 'User is not existed in the system');
        }
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findAll = async (req) => {
    const paging = pagination(req);
    try {
        if (size <= 0) {
            size = Number.MAX_SAFE_INTEGER;
        }
        const data = await UserRepo.findAll(paging.page, pagingsize);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, data);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findById = async (req) => {
    const id = req.params.id;
    if (id) {
        const user = await UserRepo.findById(id);
        if(user) {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, user);
        } else {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, null, null);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param');
    }
}

deleteUser = async (req) => {
    const id = req.params.id;
    if(id) {
        try {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, UserRepo.delete(id));
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
    delete: deleteUser
}