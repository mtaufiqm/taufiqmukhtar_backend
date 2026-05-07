import { Message, MessageType } from "../generated/prisma/client";
import { MessageTypeResponse } from "./messagetype_model";
export type CreateMessageRequest = {
    body: string;
    type: string;
};
export type UpdateMessageRequest = {
    body?: string;
    type?: string;
};
export type MessageDetailsResponse = Omit<Message, "type"> & {
    type: MessageTypeResponse;
};
export type MessageResponse = {
    uuid: string;
    body: string;
    type: string;
    created_at: Date;
};
export declare function toMessageResponse(data: Message): MessageResponse;
export declare function toMessageDetailsResponse(data: Message, type: MessageType): MessageDetailsResponse;
//# sourceMappingURL=message_model.d.ts.map