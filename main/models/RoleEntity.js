const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const Roles = sequelizer.define('roles', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: { type: Sequelize.STRING(255) }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    Roles
}