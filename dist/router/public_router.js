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
exports.publicRouter = express_1.default.Router();
exports.publicRouter.post("/authenticate", auth_controller_1.AuthController.login);
//MESSAGE TYPE
exports.publicRouter.get("/api/messagetype", messagetype_controller_1.MessageTypeController.readAll);
//MESSAGE
exports.publicRouter.get("/api/message", message_controller_1.MessageCotroller.readAll);
exports.publicRouter.post("/api/message", message_controller_1.MessageCotroller.createMessage);
exports.publicRouter.get("/api/message/:uuid", message_controller_1.MessageCotroller.getMessageByUuid);
//content
exports.publicRouter.get("/api/content", content_controller_1.ContentController.readAll);
exports.publicRouter.get("/api/content/:uuid", content_controller_1.ContentController.getContentDetails);
//# sourceMappingURL=public_router.js.map