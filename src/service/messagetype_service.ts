import { MessageType } from "../generated/prisma/client";
import { ResponseError } from "../models/error_model";
import { CreateMessageTypeRequest, MessageTypeResponse, toMessageTypeResponse } from "../models/messagetype_model";
import { dbClient } from "../web/db";

export class MessageTypeService {
    static async readAll(): Promise<MessageTypeResponse[]> {
        let result = await dbClient.messageType.findMany();
        return result.map((el: MessageType): MessageTypeResponse => {
            return toMessageTypeResponse(el);
        });
    }
    
    static async getByUuid(uuid: string): Promise<MessageTypeResponse> {
        let result = await dbClient.messageType.findUnique({
            where: {uuid: uuid}
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        return toMessageTypeResponse(result);
    }

    static async deleteByUuid(uuid: string): Promise<MessageTypeResponse> {
        if(!uuid){
            throw new ResponseError(400, "Empty Field");
        }
        let result = await dbClient.messageType.delete({
            where: {uuid: uuid}
        });
        return toMessageTypeResponse(result);
    }

    static async create(data: CreateMessageTypeRequest): Promise<MessageTypeResponse> {
        let result = await dbClient.messageType.create({
            data: data
        });
        return toMessageTypeResponse(result);
    }
}