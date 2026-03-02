import { CreateMessageTypeRequest, MessageTypeResponse } from "../models/messagetype_model";
export declare class MessageTypeService {
    static readAll(): Promise<MessageTypeResponse[]>;
    static getByUuid(uuid: string): Promise<MessageTypeResponse>;
    static deleteByUuid(uuid: string): Promise<MessageTypeResponse>;
    static create(data: CreateMessageTypeRequest): Promise<MessageTypeResponse>;
}
//# sourceMappingURL=messagetype_service.d.ts.map