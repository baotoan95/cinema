const Sequelize = require('sequelize');
const appConfig = require('../config/app').configs;

function _init() {
    const sequelizer = new Sequelize(
        appConfig.cinema.database.name,
        appConfig.cinema.database.username,
        appConfig.cinema.database.password,
        {
            host: appConfig.cinema.database.host,
            port: appConfig.cinema.database.port,
            dialect: appConfig.cinema.database.dialect,
            pool: {
                max: appConfig.cinema.database.maxConn,
                min: appConfig.cinema.database.minConn,
                acquire: appConfig.cinema.database.acquire,
                idle: appConfig.cinema.database.idle
            },
            logging: appConfig.cinema.database.logging
        }
    );

    sequelizer.authenticate().then(() => {
        console.log('Database connection has been established');
    }).catch((err) => {
        console.log('Unable to connect to the database', err);
    });

    this.sequelizer = sequelizer;
}

function Sequelizer() {
    this.sequelizer = _init;
    this.sequelizer();
}

module.exports = new Sequelizer();