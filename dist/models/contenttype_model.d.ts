import { ContentType } from "../generated/prisma/client";
export type CreateContentTypeRequest = {
    description: string;
};
export type UpdateContentTypeRequest = {
    description?: string;
};
export type ContentTypeResponse = {
    uuid: string;
    description: string;
};
export declare function toContentTypeResponse(data: ContentType): ContentTypeResponse;
//# sourceMappingURL=contenttype_model.d.ts.map