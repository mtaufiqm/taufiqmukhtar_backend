import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Roles
 *
 */
export type Roles = Prisma.RolesModel;
/**
 * Model UserRolesBridge
 *
 */
export type UserRolesBridge = Prisma.UserRolesBridgeModel;
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model RolesPermissionsBridge
 *
 */
export type RolesPermissionsBridge = Prisma.RolesPermissionsBridgeModel;
/**
 * Model Content
 *
 */
export type Content = Prisma.ContentModel;
/**
 * Model ContentType
 *
 */
export type ContentType = Prisma.ContentTypeModel;
/**
 * Model ContentTypeBridge
 *
 */
export type ContentTypeBridge = Prisma.ContentTypeBridgeModel;
/**
 * Model ReactionType
 *
 */
export type ReactionType = Prisma.ReactionTypeModel;
/**
 * Model ContentReactionBridge
 *
 */
export type ContentReactionBridge = Prisma.ContentReactionBridgeModel;
/**
 * Model Comment
 *
 */
export type Comment = Prisma.CommentModel;
/**
 * Model CommentReactionBridge
 *
 */
export type CommentReactionBridge = Prisma.CommentReactionBridgeModel;
/**
 * Model MessageType
 *
 */
export type MessageType = Prisma.MessageTypeModel;
/**
 * Model Message
 *
 */
export type Message = Prisma.MessageModel;
//# sourceMappingURL=client.d.ts.map