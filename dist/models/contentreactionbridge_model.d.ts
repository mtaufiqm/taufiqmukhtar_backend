import { ContentReactionBridge, ReactionType } from "../generated/prisma/client";
import { ReactionTypeResponse } from "./reactiontype_model";
export type UpdateContentReactionBridgeRequest = {
    content?: string;
    reaction?: string;
    name?: string | null;
};
export type CreateContentReactionBridgeRequest = {
    content: string;
    reaction: string;
    name?: string | null;
};
export type ContentReactionBridgeResponse = {
    uuid: string;
    content: string;
    reaction: string;
    name: string | null;
    created_at: Date;
};
export type ContentReactionBridgeDetailsResponse = {
    uuid: string;
    content: string;
    reaction: ReactionTypeResponse;
    name: string | null;
    created_at: Date;
};
export declare function toContentReactionBridgeDetailsResponse(data: ContentReactionBridge, reactionData: ReactionType): ContentReactionBridgeDetailsResponse;
export declare function toContentReactionBridgeResponse(data: ContentReactionBridge): ContentReactionBridgeResponse;
//# sourceMappingURL=contentreactionbridge_model.d.ts.map