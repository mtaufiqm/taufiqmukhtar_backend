import { Content } from "../generated/prisma/client";
import { CommentDetailsResponse } from "./comment_model";
import { ContentReactionBridgeDetailsResponse } from "./contentreactionbridge_model";
export type CreateContentRequest = {
    title: string;
    body: string;
    created_by: string;
};

export type UpdateContentRequest = {
    title?: string;
    body?: string;
};

export type ContentResponse = Content;

export type ContentDetailsResponse = Content & {
    comments: CommentDetailsResponse[];
    reactions: ContentReactionBridgeDetailsResponse[];
};

export function toContentDetailsResponse(data: Content, comments: CommentDetailsResponse[], reactions: ContentReactionBridgeDetailsResponse[]): ContentDetailsResponse {
    return {
        ...data,
        comments: comments,
        reactions: reactions
    };
}

export function toContentResponse(data: Content): ContentResponse {
    return data as ContentResponse;
}