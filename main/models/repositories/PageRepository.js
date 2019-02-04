const Pages = require('../PageEntity').Pages;

create = async (page) => {
    try {
        return await Pages.create(page);
    } catch (err) {
        throw err;
    }
}

update = async (page) => {
    try {
        return await Pages.update(page, {
            where: {
                id: page.id
            }
        });
    } catch (err) {
        throw err;
    }
}

findById = async (id) => {
    try {
        return await Pages.findByPk(id);
    } catch (err) {
        throw err;
    }
}

findAll = async (page, size) => {
    try {
        return await Pages.findAll({
            offset: page,
            limit: size,
            order: [
                ['updated_at', 'DESC']
            ]
        });
    } catch (err) {

    }
}

deletePage = async (id) => {
    try {
        return await Pages.destroy({
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
    delete: deletePage
}