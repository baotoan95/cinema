const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const CinemaBranches = sequelizer.define('cinema_branches', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: Sequelize.STRING(500) },
    address: { type: Sequelize.STRING(500) },
    image: { type: Sequelize.STRING(500) }
}, {
    underscored: true,
    freezeTableName: true
});

module.exports = {
    CinemaBranches
}