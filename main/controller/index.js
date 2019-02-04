const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const swaggerUI = require('swagger-ui-express');
const swaggerDocsPath = path.resolve(__dirname, '../api-docs/swagger.yaml');
const swaggerDocs = yaml.safeLoad(fs.readFileSync(swaggerDocsPath, 'utf8'));

const userController = require('./UserController');
const pageController = require('./PageController');
const movieController = require('./MovieController');
const cinemaController = require('./CinemaController');
const cinemaBranchController = require('./CinemaBranchController');
const roomController = require('./RoomController');
const showTimeController = require('./ShowTimeController');

module.exports = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    app.use('/users', userController);
    app.use('/pages', pageController);
    app.use('/movies', movieController);
    app.use('/cinemas', cinemaController);
    app.use('/cinemaBranches', cinemaBranchController);
    app.use('/rooms', roomController);
    app.use('/showTime', showTimeController);
}