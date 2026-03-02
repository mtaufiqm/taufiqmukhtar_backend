"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const zod_1 = require("zod");
const error_model_1 = require("../models/error_model");
const errorMiddleware = async (error, req, resp, next) => {
    if (error instanceof zod_1.ZodError) {
        resp.status(400).json({
            message: `Validation Error : ${JSON.stringify(error)}`
        });
    }
    else if (error instanceof error_model_1.ResponseError) {
        resp.status(error.status).json({
            message: error.message
        });
    }
    else {
        console.info(`Error ${error.message}`);
        resp.status(500).json({
            message: "Error Occurred"
        });
    }
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error_middleware.js.map