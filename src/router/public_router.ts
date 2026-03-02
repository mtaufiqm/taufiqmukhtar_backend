import express from "express";
import { MessageTypeController } from "../controller/messagetype_controller";
import { MessageCotroller } from "../controller/message_controller";
import { ContentController } from "../controller/content_controller";
import { AuthController } from "../controller/auth_controller";
import { ReactionTypeController } from "../controller/reactiontype_controller";
import { ContentReactionController } from "../controller/contentreaction_controller";
import { CommentController } from "../controller/comment_controller";
export const publicRouter: express.Router = express.Router();

publicRouter.post("/authenticate", AuthController.login);

//MESSAGE TYPE
publicRouter.get("/api/messagetype", MessageTypeController.readAll);

//MESSAGE
publicRouter.get("/api/message", MessageCotroller.readAll);
publicRouter.post("/api/message", MessageCotroller.createMessage);
publicRouter.get("/api/message/:uuid", MessageCotroller.getMessageByUuid);

//content
publicRouter.get("/api/content", ContentController.readAll);
publicRouter.get("/api/content/:uuid", ContentController.getContentDetails);

//CONTENT COMMENT
publicRouter.post("/api/contentcomment", CommentController.createComment);
publicRouter.get("/api/content/:uuid/comments", ContentController.readAllCommentDetailsByContent);

//REACTION TYPE
publicRouter.get("/api/reactiontype", ReactionTypeController.readAll);

//CONTENT REACTION
publicRouter.post("/api/contentreaction", ContentReactionController.createReaction);
publicRouter.delete("/api/contentreaction/:uuid", ContentReactionController.deleteReaction);