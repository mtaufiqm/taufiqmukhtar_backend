import { MessageType } from "../generated/prisma/client";


export type CreateMessageTypeRequest = {
    description: string;
};

export type UpdateMessageTypeRequest = {
    description?: string;
};

export type MessageTypeResponse = {
    uuid: string;
    description: string;
};

export function toMessageTypeResponse(data: MessageType): MessageTypeResponse {
    return data as MessageTypeResponse;
}