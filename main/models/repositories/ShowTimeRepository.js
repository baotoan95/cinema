const ShowTime = require('../ShowTimeEntity').ShowTime;

create = async (showTime) => {
    try {
        return await ShowTime.create(showTime);
    } catch (err) {
        throw err;
    }
}

update = async (showTime) => {
    try {
        return await ShowTime.update(showTime, {
            where: {
                id: showTime.id
            }
        });
    } catch (err) {
        throw err;
    }
}

findById = async (id) => {
    try {
        return await ShowTime.findByPk(id);
    } catch (err) {
        throw err;
    }
}

findAll = async (showTime, size) => {
    try {
        return await ShowTime.findAll({
            offset: showTime,
            limit: size,
            order: [
                ['updated_at', 'DESC']
            ]
        });
    } catch (err) {

    }
}

deleteShowTime = async (id) => {
    try {
        return await ShowTime.destroy({
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
    delete: deleteShowTime
}