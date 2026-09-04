import express, { Request, Response } from "express";
import { MessageTypeController } from "../controller/messagetype_controller";
import { MessageCotroller } from "../controller/message_controller";
import { ContentController } from "../controller/content_controller";
import { AuthController } from "../controller/auth_controller";
import { ReactionTypeController } from "../controller/reactiontype_controller";
import { ContentReactionController } from "../controller/contentreaction_controller";
import { CommentController } from "../controller/comment_controller";
import { ExpirePeriodController } from "../controller/share/expireperiod_controller";
import { SharelinkController } from "../controller/share/sharelink_controller";
export const publicRouter: express.Router = express.Router();

publicRouter.get("/", (req: Request, resp: Response) => {
    resp.status(200).json({
        message: "Welcome to Muh. Taufiq Mukhtar Site API"
    });
    return;
});
publicRouter.post("/authenticate", AuthController.login);

//MESSAGE TYPE
publicRouter.get("/api/messagetype", MessageTypeController.readAll);

//MESSAGE
publicRouter.get("/api/message", MessageCotroller.readAllDetails);
publicRouter.post("/api/message", MessageCotroller.createMessage);
publicRouter.get("/api/message/:uuid", MessageCotroller.getMessageDetailsByUuid);

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

//SHARE LINK
publicRouter.get("/api/sharelink/key/:key", SharelinkController.getByKey);
publicRouter.get("/api/sharelink/expireperiod", ExpirePeriodController.readAll);
publicRouter.post("/api/sharelink", SharelinkController.createData);