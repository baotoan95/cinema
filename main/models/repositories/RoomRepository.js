const Rooms = require('../RoomEntity').Rooms;
const ShowTime = require('../ShowTimeEntity').ShowTime;
const sequelizer = require('../../utils/sequelizer').sequelizer;

create = async (room) => {
    const txn = await sequelizer.transaction({
        autocommit: false
    });
    try {
        const newRoom = await Rooms.create(room, {transaction: txn});

        const showTimes = (room.showTimes && room.showTimes.filter(showTime => showTime.id).map(ST => ST.id)) || [];
        const newShowTimes = (room.showTimes && room.showTimes.filter(showTime => !showTime.id)) || [];

        // Create new showtime and add to room
        const createShowTimePromises = [];
        if (newShowTimes) {
            newShowTimes.forEach(showTime => {
                createShowTimePromises.push(ShowTime.create(showTime, {transaction: txn}));
            });
        }
        const createShowTimeResult = await Promise.all(createShowTimePromises);

        newRoom.setShowTimes(showTimes.concat(createShowTimeResult));

        txn.commit();

        return newRoom;
    } catch (err) {
        txn.rollback();
        throw err;
    }
}

update = async (room) => {
    const txn = await sequelizer.transaction({
        autocommit: true
    });
    try {
        const existingRoom = await Rooms.findById(room.id);
        if (existingRoom) {
            let upcomingRoom = existingRoom.get();
            upcomingRoom = {
                ...room
            }
            existingRoom.dataValues = upcomingRoom;

            const showTimes = (room.showTimes && room.showTimes.filter(showTime => showTime.id).map(ST => ST.id)) || [];
            const newShowTimes = (room.showTimes && room.showTimes.filter(showTime => !showTime.id)) || [];

            // Create new showtime and add to room
            const createShowTimePromises = [];
            if (newShowTimes) {
                newShowTimes.forEach(showTime => {
                    createShowTimePromises.push(ShowTime.create(showTime, txn));
                });
            }
            const createShowTimeResult = await Promise.all(createShowTimePromises);

            existingRoom.setShowTimes(showTimes.concat(createShowTimeResult));

            updatedRoom = existingRoom.get();
            delete updatedRoom.showTimes;

            txn.commit();
            return updatedRoom;
        } else {
            return null;
        }
    } catch (err) {
        txn.rollback();
        throw err;
    }
}

findById = async (id) => {
    try {
        return await Rooms.findByPk(id, {
            include: {
                model: ShowTime,
                as: 'ShowTimes',
                through: { attributes: [] } // this line will prevent mapping object from being added
            }
        });
    } catch (err) {
        throw err;
    }
}

findAll = async (room, size, filter) => {
    try {
        return await Rooms.findAll({
            offset: room,
            limit: size,
            order: [
                ['updated_at', 'DESC']
            ],
            where: filter
        });
    } catch (err) {
        throw err;
    }
}

deleteRoom = async (id) => {
    try {
        return await Rooms.destroy({
            where: {
                id: id
            }
        });
    } catch (err) {
        throw err;
    }
}

module.exports = {
    create,
    update,
    findById,
    findAll,
    delete: deleteRoom
}