const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const Cinemas = sequelizer.define('cinemas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: { type: Sequelize.STRING(500) },
    icon: { type: Sequelize.STRING(500) }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    Cinemas
}