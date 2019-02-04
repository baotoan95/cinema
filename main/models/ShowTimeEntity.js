const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const ShowTime = sequelizer.define('showtime', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    time: { type: Sequelize.DATE }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    ShowTime
}