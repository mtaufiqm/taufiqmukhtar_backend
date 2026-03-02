import { ContentReactionBridge, ReactionType } from "../generated/prisma/client";
import { ReactionTypeResponse, toReactionTypeResponse } from "./reactiontype_model";

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

export function toContentReactionBridgeDetailsResponse(data: ContentReactionBridge, reactionData: ReactionType): ContentReactionBridgeDetailsResponse{
    let {reaction, ...restData} = data;
    return {
        ...restData, reaction: toReactionTypeResponse(reactionData)
    };
};

export function toContentReactionBridgeResponse(data: ContentReactionBridge) : ContentReactionBridgeResponse {
    return data as ContentReactionBridgeResponse;
}