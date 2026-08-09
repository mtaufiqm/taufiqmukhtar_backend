"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const messagetype_controller_1 = require("../controller/messagetype_controller");
const message_controller_1 = require("../controller/message_controller");
const content_controller_1 = require("../controller/content_controller");
const auth_controller_1 = require("../controller/auth_controller");
const reactiontype_controller_1 = require("../controller/reactiontype_controller");
const contentreaction_controller_1 = require("../controller/contentreaction_controller");
const comment_controller_1 = require("../controller/comment_controller");
exports.publicRouter = express_1.default.Router();
exports.publicRouter.get("/", (req, resp) => {
    resp.status(200).json({
        message: "Welcome to Muh. Taufiq Mukhtar Site API"
    });
    return;
});
exports.publicRouter.post("/authenticate", auth_controller_1.AuthController.login);
//MESSAGE TYPE
exports.publicRouter.get("/api/messagetype", messagetype_controller_1.MessageTypeController.readAll);
//MESSAGE
exports.publicRouter.get("/api/message", message_controller_1.MessageCotroller.readAllDetails);
exports.publicRouter.post("/api/message", message_controller_1.MessageCotroller.createMessage);
exports.publicRouter.get("/api/message/:uuid", message_controller_1.MessageCotroller.getMessageDetailsByUuid);
//content
exports.publicRouter.get("/api/content", content_controller_1.ContentController.readAll);
exports.publicRouter.get("/api/content/:uuid", content_controller_1.ContentController.getContentDetails);
//CONTENT COMMENT
exports.publicRouter.post("/api/contentcomment", comment_controller_1.CommentController.createComment);
exports.publicRouter.get("/api/content/:uuid/comments", content_controller_1.ContentController.readAllCommentDetailsByContent);
//REACTION TYPE
exports.publicRouter.get("/api/reactiontype", reactiontype_controller_1.ReactionTypeController.readAll);
//CONTENT REACTION
exports.publicRouter.post("/api/contentreaction", contentreaction_controller_1.ContentReactionController.createReaction);
exports.publicRouter.delete("/api/contentreaction/:uuid", contentreaction_controller_1.ContentReactionController.deleteReaction);
//# sourceMappingURL=public_router.js.map