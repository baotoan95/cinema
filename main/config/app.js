const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

function _init() {
    let configs;
    try {
        let configPath = path.resolve(__dirname, './application.yml');
        configs = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
        if(configs) {
            this.configs = configs;
        } else {
            throw new Error('There is no configs from application.yml');
        }
    } catch (ex) {
        throw new Error('Can\'t read the configs from application.yml');
    }
}

function AppConfig() {
    this.init = _init;
    this.init();
}

module.exports = new AppConfig();