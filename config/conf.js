/* eslint-disable no-undef */
/* eslint-disable no-magic-numbers */
module.exports = {
    BAD_REQUEST: 400,
    CONFLICT: 409,
    CREATE: 201,
    DB_MONGO: process.env.DB_MONGO || 'mongodb://localhost:27017/inoxoft',
    FORBIDDEN: 403,
    InternalServerError: 500,
    NOT_FOUND: 404,
    OK: 200,
    PORT: process.env.PORT || 5001,
    SALT: 7,
    ZERO: 0
}
