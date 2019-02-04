const Sequelize = require('sequelize');
const sequelizer = require('../utils/sequelizer').sequelizer;

const Pages = sequelizer.define('pages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: { type: Sequelize.STRING(500) },
    content: { type: Sequelize.TEXT },
    active: { type: Sequelize.BOOLEAN },
    order: { type: Sequelize.INTEGER }
}, {
    underscored: true,
    freezeTableName: true
})

module.exports = {
    Pages
}