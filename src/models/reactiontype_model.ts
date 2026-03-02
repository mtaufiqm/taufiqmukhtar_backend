import { ReactionType } from "../generated/prisma/client";

export type CreateReactionTypeRequest = {
    description: string;
    label?: string | null;
};

export type UpdateReactionTypeRequest = {
    description?: string;
    label?: string | null;
};

export type ReactionTypeResponse = {
    uuid: string;
    description: string;
    label: string | null;
};

export function toReactionTypeResponse(data: ReactionType): ReactionTypeResponse {
    return data as ReactionTypeResponse;
}