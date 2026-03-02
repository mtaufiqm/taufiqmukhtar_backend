"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const error_middleware_1 = require("../middleware/error_middleware");
const node_path_1 = __importDefault(require("node:path"));
const cors_1 = __importDefault(require("cors"));
const private_router_1 = require("../router/private_router");
const public_router_1 = require("../router/public_router");
(0, dotenv_1.configDotenv)({ override: true });
const web = (0, express_1.default)();
web.use((0, cors_1.default)({
    origin: "*",
    allowedHeaders: "*",
    exposedHeaders: "*"
}));
web.use(express_1.default.static(node_path_1.default.resolve("../public")));
web.use(express_1.default.json());
web.use(public_router_1.publicRouter);
web.use(private_router_1.privateRouter);
web.use(error_middleware_1.errorMiddleware);
web.listen(Number.parseInt(process.env.SERVER_PORT ?? "80"));
//# sourceMappingURL=web.js.map