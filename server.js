const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appConfig = require('./main/config/app').configs;

var app = express();

// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

// Integrate controller
require('./main/controller')(app);

// Init database
require('./main/models/orm/orm-mapper');

// Start app
app.listen(appConfig.cinema.port, () => {
    console.log(`App listening on port ${appConfig.cinema.port}`);
});
