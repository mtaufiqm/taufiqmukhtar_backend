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
export declare function toReactionTypeResponse(data: ReactionType): ReactionTypeResponse;
//# sourceMappingURL=reactiontype_model.d.ts.map