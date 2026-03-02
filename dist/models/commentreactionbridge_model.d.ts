import { CommentReactionBridge, ReactionType } from "../generated/prisma/client";
export type CreateCommentReactionBridgeRequest = {
    comment: string;
    reaction: string;
    name: string | null;
};
export type UpdateCommentReactionBridgeRequest = {
    comment?: string;
    reaction?: string;
    name?: string | null;
};
export type CommentReactionBridgeResponse = {
    uuid: string;
    comment: string;
    reaction: string;
    name: string | null;
    created_at: Date;
};
export type CommentReactionBridgeDetailsResponse = Omit<CommentReactionBridge, "reaction"> & {
    reaction: ReactionType;
};
export declare function toCommentReactionBridgeDetailsResponse(data: CommentReactionBridge, reactionData: ReactionType): CommentReactionBridgeDetailsResponse;
export declare function toCommentReactionBridgeResponse(data: CommentReactionBridge): CommentReactionBridgeResponse;
//# sourceMappingURL=commentreactionbridge_model.d.ts.map