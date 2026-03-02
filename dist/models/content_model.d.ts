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
export declare function toContentDetailsResponse(data: Content, comments: CommentDetailsResponse[], reactions: ContentReactionBridgeDetailsResponse[]): ContentDetailsResponse;
export declare function toContentResponse(data: Content): ContentResponse;
//# sourceMappingURL=content_model.d.ts.map