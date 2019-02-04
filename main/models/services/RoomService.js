const RoomRepo = require('../repositories/RoomRepository');
const ResponseEntityFactory = require('../../core/ResponseEntityFactory');
const ResponseStatus = require('../../constants/ResponseStatus');
const pagination = require('../../utils/pagination');

create = async (req) => {
    try {
        const room = req.body;
        const newRoom = await RoomRepo.create(room);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, newRoom);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

update = async (req) => {
    try {
        const existedRoom = await RoomRepo.findById(req.body.id);

        if(existedRoom) {
            const updatedRoom = await RoomRepo.update(req.body);
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, updatedRoom);
        } else {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, 'Room is not existed in the system');
        }
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findAll = async (req) => {
    const paging = pagination(req);
    try {
        const data = await RoomRepo.findAll(paging.page, paging.size);
        return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, data);
    } catch (err) {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
    }
}

findById = async (req) => {
    const id = req.params.id;
    if (id) {
        const room = await RoomRepo.findById(id);
        if(room) {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, room);
        } else {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.NOT_FOUND, null, null);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param');
    }
}

deleteRoom = async (req) => {
    const id = req.params.id;
    if(id) {
        try {
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, RoomRepo.delete(id));
        } catch (err) {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing id param', null);
    }
}

findRoomByCinemaBranch = async (req) => {
    const cinemaBranchId = req.params.id;
    const paging = pagination(req);
    if (cinemaBranchId) {
        try {
            const rooms = await RoomRepo.findAll(paging.page, paging.size, {cinema_branch_id: cinemaBranchId});
            return ResponseEntityFactory.getResponseEntity(ResponseStatus.OK, null, rooms);
        } catch (err) {
            throw ResponseEntityFactory.getResponseEntity(ResponseStatus.SERVER_INTERNAL_ERROR, err);
        }
    } else {
        throw ResponseEntityFactory.getResponseEntity(ResponseStatus.BAD_REQUEST, 'Missing cinema branch ID', null);
    }
}

module.exports = {
    create,
    update,
    findAll,
    findById,
    delete: deleteRoom,
    findRoomByCinemaBranch
}