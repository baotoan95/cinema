const ResponseStatus = require('../constants/ResponseStatus');
const ResponseEntity = require('../core/ResponseEntity');

const _getResponseEntity = (code, message, data) => {
    if(code === ResponseStatus.OK) {
        return new ResponseEntity(code, message, data);
    } else {
        return new ResponseEntity(code, message);
    }
}

module.exports = {
    getResponseEntity: _getResponseEntity
}