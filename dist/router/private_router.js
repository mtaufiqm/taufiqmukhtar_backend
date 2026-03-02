"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth_middleware");
const content_controller_1 = require("../controller/content_controller");
exports.privateRouter = express_1.default.Router();
exports.privateRouter.use("/api", auth_middleware_1.authMiddleware);
exports.privateRouter.post("/api/content", content_controller_1.ContentController.createContent);
exports.privateRouter.patch("/api/content/:uuid", content_controller_1.ContentController.updateContent);
//# sourceMappingURL=private_router.js.map