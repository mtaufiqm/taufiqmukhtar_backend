import { Comment } from "../generated/prisma/client";
import { CommentReactionBridgeDetailsResponse } from "./commentreactionbridge_model";
export type CreateCommentRequest = {
    name?: string | null;
    body: string;
    content: string;
};

export type UpdateCommentRequest = {
    name?: string | null;
    body?: string;
    content?: string;
};

export type CommentResponse = {
    uuid: string;
    name: string | null;
    body: string;
    content: string;
    created_at: Date;
};

export type CommentDetailsResponse = Comment & {
    reactions: CommentReactionBridgeDetailsResponse[];
};



export function toCommentDetailsResponse(data: Comment, reactions: CommentReactionBridgeDetailsResponse[]): CommentDetailsResponse {
    return {
        ...data,
        reactions: reactions
    };
}

export function toCommentResponse(data: Comment): CommentResponse {
    return data;
}