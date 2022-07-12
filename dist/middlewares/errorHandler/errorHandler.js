"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const ERROR_CODES_1 = require("src/constants/ERROR_CODES");
const errorHandler = ({ err_code, req, res, }) => {
    if (err_code && ERROR_CODES_1.ERROR_CODES[err_code]) {
        const resultError = ERROR_CODES_1.ERROR_CODES[err_code];
        return res.json({
            status: resultError.status,
            message: resultError.message,
        });
    }
    return res.json({
        status: 500,
        message: "Something went wrong",
    });
};
exports.errorHandler = errorHandler;
