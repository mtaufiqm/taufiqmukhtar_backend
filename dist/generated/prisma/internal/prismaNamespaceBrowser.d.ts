import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Roles: "Roles";
    readonly UserRolesBridge: "UserRolesBridge";
    readonly Permission: "Permission";
    readonly RolesPermissionsBridge: "RolesPermissionsBridge";
    readonly Content: "Content";
    readonly ContentType: "ContentType";
    readonly ContentTypeBridge: "ContentTypeBridge";
    readonly ReactionType: "ReactionType";
    readonly ContentReactionBridge: "ContentReactionBridge";
    readonly Comment: "Comment";
    readonly CommentReactionBridge: "CommentReactionBridge";
    readonly MessageType: "MessageType";
    readonly Message: "Message";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly username: "username";
    readonly password: "password";
    readonly is_active: "is_active";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly description: "description";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const UserRolesBridgeScalarFieldEnum: {
    readonly username: "username";
    readonly roles: "roles";
};
export type UserRolesBridgeScalarFieldEnum = (typeof UserRolesBridgeScalarFieldEnum)[keyof typeof UserRolesBridgeScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly description: "description";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const RolesPermissionsBridgeScalarFieldEnum: {
    readonly roles: "roles";
    readonly permission: "permission";
};
export type RolesPermissionsBridgeScalarFieldEnum = (typeof RolesPermissionsBridgeScalarFieldEnum)[keyof typeof RolesPermissionsBridgeScalarFieldEnum];
export declare const ContentScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly title: "title";
    readonly body: "body";
    readonly last_updated: "last_updated";
    readonly created_at: "created_at";
    readonly created_by: "created_by";
};
export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum];
export declare const ContentTypeScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly description: "description";
};
export type ContentTypeScalarFieldEnum = (typeof ContentTypeScalarFieldEnum)[keyof typeof ContentTypeScalarFieldEnum];
export declare const ContentTypeBridgeScalarFieldEnum: {
    readonly content: "content";
    readonly type: "type";
};
export type ContentTypeBridgeScalarFieldEnum = (typeof ContentTypeBridgeScalarFieldEnum)[keyof typeof ContentTypeBridgeScalarFieldEnum];
export declare const ReactionTypeScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly description: "description";
    readonly label: "label";
};
export type ReactionTypeScalarFieldEnum = (typeof ReactionTypeScalarFieldEnum)[keyof typeof ReactionTypeScalarFieldEnum];
export declare const ContentReactionBridgeScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly content: "content";
    readonly reaction: "reaction";
    readonly name: "name";
    readonly created_at: "created_at";
};
export type ContentReactionBridgeScalarFieldEnum = (typeof ContentReactionBridgeScalarFieldEnum)[keyof typeof ContentReactionBridgeScalarFieldEnum];
export declare const CommentScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly name: "name";
    readonly body: "body";
    readonly content: "content";
    readonly created_at: "created_at";
};
export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];
export declare const CommentReactionBridgeScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly comment: "comment";
    readonly reaction: "reaction";
    readonly name: "name";
    readonly created_at: "created_at";
};
export type CommentReactionBridgeScalarFieldEnum = (typeof CommentReactionBridgeScalarFieldEnum)[keyof typeof CommentReactionBridgeScalarFieldEnum];
export declare const MessageTypeScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly description: "description";
};
export type MessageTypeScalarFieldEnum = (typeof MessageTypeScalarFieldEnum)[keyof typeof MessageTypeScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly body: "body";
    readonly type: "type";
    readonly created_at: "created_at";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map