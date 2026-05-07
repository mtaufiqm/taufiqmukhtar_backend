"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMessageResponse = toMessageResponse;
exports.toMessageDetailsResponse = toMessageDetailsResponse;
const messagetype_model_1 = require("./messagetype_model");
function toMessageResponse(data) {
    return data;
}
function toMessageDetailsResponse(data, type) {
    return {
        ...data, type: (0, messagetype_model_1.toMessageTypeResponse)(type)
    };
}
//# sourceMappingURL=message_model.js.map