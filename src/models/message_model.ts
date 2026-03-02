import { Message } from "../generated/prisma/client";

export type CreateMessageRequest = {
    body: string;
    type: string;
};

export type UpdateMessageRequest = {
    body?: string;
    type?: string;
};

export type MessageResponse = {
    uuid: string;
    body: string;
    type: string;
    created_at: Date;
};

export function toMessageResponse(data: Message): MessageResponse {
    return data as MessageResponse;
}