"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toContentDetailsResponse = toContentDetailsResponse;
exports.toContentResponse = toContentResponse;
function toContentDetailsResponse(data, comments, reactions) {
    return {
        ...data,
        comments: comments,
        reactions: reactions
    };
}
function toContentResponse(data) {
    return data;
}
//# sourceMappingURL=content_model.js.map