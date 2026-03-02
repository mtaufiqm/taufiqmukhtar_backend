import { Message } from "../generated/prisma/client";
import { ResponseError } from "../models/error_model";
import { CreateMessageRequest, MessageResponse, toMessageResponse } from "../models/message_model";
import { dbClient } from "../web/db";

export class MessageService {
    static async getByUuid(uuid: string): Promise<MessageResponse>{
        let result = await dbClient.message.findUnique({
            where: {uuid: uuid}
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        return toMessageResponse(result);
    }

    static async readAll(props?: {limit: number;}): Promise<MessageResponse[]>{
        let result = await dbClient.message.findMany({
            orderBy: {
                created_at: "desc"
            },
            ...(props?{take: props.limit}:{}),
        });
        return result.map((el: Message): MessageResponse => {
            return toMessageResponse(el);
        });
    }
    static async create(data: CreateMessageRequest): Promise<MessageResponse>{
        let result = await dbClient.message.create({
            data: data
        });
        return toMessageResponse(result);
    }
}