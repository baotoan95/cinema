const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const Users = sequelizer.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: { type: Sequelize.STRING(255) },
    username: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
    },
    password: { type: Sequelize.STRING(255) },
    email: { type: Sequelize.STRING(255) },
    phone: { type: Sequelize.STRING(255) },
    active: { type: Sequelize.BOOLEAN }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    Users
}