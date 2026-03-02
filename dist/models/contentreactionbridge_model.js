"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toContentReactionBridgeDetailsResponse = toContentReactionBridgeDetailsResponse;
exports.toContentReactionBridgeResponse = toContentReactionBridgeResponse;
const reactiontype_model_1 = require("./reactiontype_model");
function toContentReactionBridgeDetailsResponse(data, reactionData) {
    let { reaction, ...restData } = data;
    return {
        ...restData, reaction: (0, reactiontype_model_1.toReactionTypeResponse)(reactionData)
    };
}
;
function toContentReactionBridgeResponse(data) {
    return data;
}
//# sourceMappingURL=contentreactionbridge_model.js.map