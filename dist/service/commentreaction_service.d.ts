import { CommentReactionBridgeResponse, CreateCommentReactionBridgeRequest } from "../models/commentreactionbridge_model";
export declare class CommentReactionService {
    static createReaction(data: CreateCommentReactionBridgeRequest): Promise<CommentReactionBridgeResponse>;
    static deleteReaction(uuid: string): Promise<CommentReactionBridgeResponse>;
}
//# sourceMappingURL=commentreaction_service.d.ts.map