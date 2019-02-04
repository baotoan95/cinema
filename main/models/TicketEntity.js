const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const Tickets = sequelizer.define('tickets', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    amount: { type: Sequelize.INTEGER },
    chairs: { type: Sequelize.TEXT }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    Tickets
}