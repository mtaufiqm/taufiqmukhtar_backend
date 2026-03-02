"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCommentDetailsResponse = toCommentDetailsResponse;
exports.toCommentResponse = toCommentResponse;
function toCommentDetailsResponse(data, reactions) {
    return {
        ...data,
        reactions: reactions
    };
}
function toCommentResponse(data) {
    return data;
}
//# sourceMappingURL=comment_model.js.map