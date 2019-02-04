const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const Rooms = sequelizer.define('rooms', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: Sequelize.STRING(500) },
    chairs: { type: Sequelize.TEXT }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    Rooms
}
