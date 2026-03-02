import express from "express";
import { authMiddleware } from "../middleware/auth_middleware";
import { ContentController } from "../controller/content_controller";
export const privateRouter = express.Router();
privateRouter.use("/api", authMiddleware);

privateRouter.post("/api/content", ContentController.createContent);
privateRouter.patch("/api/content/:uuid", ContentController.updateContent);