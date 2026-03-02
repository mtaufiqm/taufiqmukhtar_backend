import { CreateMessageRequest, MessageResponse } from "../models/message_model";
export declare class MessageService {
    static getByUuid(uuid: string): Promise<MessageResponse>;
    static readAll(props?: {
        limit: number;
    }): Promise<MessageResponse[]>;
    static create(data: CreateMessageRequest): Promise<MessageResponse>;
}
//# sourceMappingURL=message_service.d.ts.map