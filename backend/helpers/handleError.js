const { validationResult } = require('express-validator');

exports.withErrorRequest = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return {
            state: true, errors: errors
        }
    }
    return { state: false, errors: errors }
}