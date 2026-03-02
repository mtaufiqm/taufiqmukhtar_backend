import { CommentDetailsResponse, CommentResponse, CreateCommentRequest, UpdateCommentRequest } from "../models/comment_model";
export declare class CommentService {
    static getByUuid(uuid: string): Promise<CommentResponse>;
    static getDetailsByUuid(uuid: string): Promise<CommentDetailsResponse>;
    static readAllDetailsByContentUuid(uuid: string): Promise<CommentDetailsResponse[]>;
    static readAll(): Promise<CommentResponse[]>;
    static readAllByContentUuid(uuid: string): Promise<CommentResponse[]>;
    static createComment(data: CreateCommentRequest): Promise<CommentResponse>;
    static updateComment(uuid: string, data: UpdateCommentRequest): Promise<CommentResponse>;
    static deleteComment(uuid: string): Promise<CommentResponse>;
}
//# sourceMappingURL=comment_service.d.ts.map