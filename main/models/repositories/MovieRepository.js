const Movies = require('../MovieEntity').Movies;

create = async (movie) => {
    try {
        return await Movies.create(movie);
    } catch (err) {
        throw err;
    }
}

update = async (movie) => {
    try {
        return await Movies.update(movie, {
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
        return await Movies.findByPk(id);
    } catch (err) {
        throw err;
    }
}

findAll = async (page, size) => {
    try {
        return await Movies.findAll({
            offset: page,
            limit: size,
            order: [
                ['updated_at', 'DESC']
            ]
        });
    } catch (err) {

    }
}

deleteMovie = async (id) => {
    try {
        return await Movies.destroy({
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