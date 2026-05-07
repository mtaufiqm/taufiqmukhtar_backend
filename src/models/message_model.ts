import { Message, MessageType } from "../generated/prisma/client";
import { MessageTypeResponse, toMessageTypeResponse } from "./messagetype_model";

export type CreateMessageRequest = {
    body: string;
    type: string;
};

export type UpdateMessageRequest = {
    body?: string;
    type?: string;
};

export type MessageDetailsResponse = Omit<Message, "type"> & {type: MessageTypeResponse};

export type MessageResponse = {
    uuid: string;
    body: string;
    type: string;
    created_at: Date;
};

export function toMessageResponse(data: Message): MessageResponse {
    return data as MessageResponse;
}

export function toMessageDetailsResponse(data: Message, type: MessageType): MessageDetailsResponse {
    return {
        ...data, type: toMessageTypeResponse(type)
    };
}