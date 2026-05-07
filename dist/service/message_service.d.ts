import { CreateMessageRequest, MessageDetailsResponse, MessageResponse } from "../models/message_model";
export declare class MessageService {
    static getByUuid(uuid: string): Promise<MessageResponse>;
    static getDetailsByUuid(uuid: string): Promise<MessageDetailsResponse>;
    static readAll(props?: {
        limit: number;
    }): Promise<MessageResponse[]>;
    static readAllDetails(props?: {
        limit: number;
    }): Promise<MessageDetailsResponse[]>;
    static create(data: CreateMessageRequest): Promise<MessageResponse>;
}
//# sourceMappingURL=message_service.d.ts.map