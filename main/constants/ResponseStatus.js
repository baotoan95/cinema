const ResponseStatus = () => {}

ResponseStatus.OK = 200;
ResponseStatus.BAD_REQUEST = 400;
ResponseStatus.SERVER_INTERNAL_ERROR = 500;
ResponseStatus.NOT_FOUND = 404;
ResponseStatus.UNAUTHORIZED = 401;

module.exports = ResponseStatus;