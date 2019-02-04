const CinemaBranches = require('../CinemaBranchEntity').CinemaBranches;

create = async (cinemaBranch) => {
    try {
        return await CinemaBranches.create(cinemaBranch);
    } catch (err) {
        throw err;
    }
}

update = async (cinemaBranch) => {
    try {
        return await CinemaBranches.update(cinemaBranch, {
            where: {
                id: cinemaBranch.id
            }
        });
    } catch (err) {
        throw err;
    }
}

findById = async (id) => {
    try {
        return await CinemaBranches.findByPk(id);
    } catch (err) {
        throw err;
    }
}

findAll = async (page, size, filter) => { 
    try {
        return await CinemaBranches.findAll({
            offset: page,
            limit: size,
            order: [
                ['updated_at', 'DESC']
            ],
            where: filter
        });
    } catch (err) {

    }
}

deleteCinemaBranch = async (id) => {
    try {
        return await CinemaBranches.destroy({
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
    delete: deleteCinemaBranch
}