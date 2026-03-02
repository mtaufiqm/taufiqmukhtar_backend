import { ContentDetailsResponse, ContentResponse, CreateContentRequest, UpdateContentRequest } from "../models/content_model";
export declare class ContentService {
    static getByUuid(uuid: string): Promise<ContentResponse>;
    static getDetailsByUuid(uuid: string): Promise<ContentDetailsResponse>;
    static readAll(props?: {
        limit: number;
    }): Promise<ContentResponse[]>;
    static createContent(data: CreateContentRequest): Promise<ContentResponse>;
    static updateContent(uuid: string, data: UpdateContentRequest): Promise<ContentResponse>;
    static deleteContent(uuid: string): Promise<ContentResponse>;
}
//# sourceMappingURL=content_service.d.ts.map