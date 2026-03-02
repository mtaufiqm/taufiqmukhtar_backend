"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCommentReactionBridgeDetailsResponse = toCommentReactionBridgeDetailsResponse;
exports.toCommentReactionBridgeResponse = toCommentReactionBridgeResponse;
function toCommentReactionBridgeDetailsResponse(data, reactionData) {
    let { reaction, ...restData } = data;
    return { ...restData, reaction: reactionData };
}
function toCommentReactionBridgeResponse(data) {
    return data;
}
//# sourceMappingURL=commentreactionbridge_model.js.map