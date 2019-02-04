const Users = require('../UserEntity').Users;

create = async (user) => {
    try {
        return await Users.create(user);
    } catch (err) {
        throw err;
    }
}

update = async (user) => {
    try {
        return await Users.update(user, {
            where: {
                id: user.id
            }
        });
    } catch (err) {
        throw err;
    }
}

findById = async (id) => {
    try {
        return await Users.findByPk(id);
    } catch (err) {
        throw err;
    }
}

findByUsername = async (username) => {
    try {
        return await Users.findOne({
            where: {
                username: username
            }
        });
    } catch (err) {
        throw err;
    }
}

findAll = async (page, size) => {
    try {
        return await Users.findAll({
            offset: page,
            limit: size,
            order: [
                ['updated_at', 'DESC']
            ]
        });
    } catch (err) {
        throw err;
    }
}

deleteUser = async (id) => {
    try {
        return await Users.destroy({
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
    findByUsername,
    findAll,
    delete: deleteUser
}