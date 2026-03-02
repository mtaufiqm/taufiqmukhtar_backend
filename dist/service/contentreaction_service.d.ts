import { ContentReactionBridgeDetailsResponse, ContentReactionBridgeResponse, CreateContentReactionBridgeRequest, UpdateContentReactionBridgeRequest } from "../models/contentreactionbridge_model";
export declare class ContentReactionService {
    static createReaction(data: CreateContentReactionBridgeRequest): Promise<ContentReactionBridgeResponse>;
    static deleteReaction(uuid: string): Promise<ContentReactionBridgeResponse>;
    static updateReaction(uuid: string, data: UpdateContentReactionBridgeRequest): Promise<ContentReactionBridgeResponse>;
    static readAllDetailsByContentUuid(uuid: string): Promise<ContentReactionBridgeDetailsResponse[]>;
}
//# sourceMappingURL=contentreaction_service.d.ts.map