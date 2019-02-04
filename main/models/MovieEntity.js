const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const Movies = sequelizer.define('movies', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: Sequelize.STRING(500) },
    duration: { type: Sequelize.INTEGER },
    type: { type: Sequelize.STRING(255) },
    published_date: { type: Sequelize.DATE },
    director: { type: Sequelize.STRING(255) },
    category: { type: Sequelize.STRING(255) },
    actors: { type: Sequelize.STRING(500) },
    made_in: { type: Sequelize.STRING(255) },
    introduction: { type: Sequelize.TEXT }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    Movies
}