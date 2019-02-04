const Cinemas = require('../CinemaEntity').Cinemas;

create = async (movie) => {
    try {
        return await Cinemas.create(movie);
    } catch (err) {
        throw err;
    }
}

update = async (movie) => {
    try {
        return await Cinemas.update(movie, {
            where: {
                id: movie.id
            }
        });
    } catch (err) {
        throw err;
    }
}

findById = async (id) => {
    try {
        return await Cinemas.findByPk(id);
    } catch (err) {
        throw err;
    }
}

findAll = async (page, size) => {
    try {
        return await Cinemas.findAll({
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

deleteMovie = async (id) => {
    try {
        return await Cinemas.destroy({
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
    delete: deleteMovie
}