import { ReactionType } from "../generated/prisma/client";
import { ReactionTypeResponse, toReactionTypeResponse } from "../models/reactiontype_model";
import { dbClient } from "../web/db";

export class ReactionTypeService {
    static async readAll(): Promise<ReactionTypeResponse[]> {
        let result = await dbClient.reactionType.findMany();
        return result.map((el: ReactionType): ReactionTypeResponse => {
            return toReactionTypeResponse(el);
        });
    }
}