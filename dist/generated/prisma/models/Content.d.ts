import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Content
 *
 */
export type ContentModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentPayload>;
export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
};
export type ContentMinAggregateOutputType = {
    uuid: string | null;
    title: string | null;
    body: string | null;
    last_updated: Date | null;
    created_at: Date | null;
    created_by: string | null;
};
export type ContentMaxAggregateOutputType = {
    uuid: string | null;
    title: string | null;
    body: string | null;
    last_updated: Date | null;
    created_at: Date | null;
    created_by: string | null;
};
export type ContentCountAggregateOutputType = {
    uuid: number;
    title: number;
    body: number;
    last_updated: number;
    created_at: number;
    created_by: number;
    _all: number;
};
export type ContentMinAggregateInputType = {
    uuid?: true;
    title?: true;
    body?: true;
    last_updated?: true;
    created_at?: true;
    created_by?: true;
};
export type ContentMaxAggregateInputType = {
    uuid?: true;
    title?: true;
    body?: true;
    last_updated?: true;
    created_at?: true;
    created_by?: true;
};
export type ContentCountAggregateInputType = {
    uuid?: true;
    title?: true;
    body?: true;
    last_updated?: true;
    created_at?: true;
    created_by?: true;
    _all?: true;
};
export type ContentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: Prisma.ContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contents to fetch.
     */
    orderBy?: Prisma.ContentOrderByWithRelationInput | Prisma.ContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType;
};
export type GetContentAggregateType<T extends ContentAggregateArgs> = {
    [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContent[P]> : Prisma.GetScalarType<T[P], AggregateContent[P]>;
};
export type ContentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentWhereInput;
    orderBy?: Prisma.ContentOrderByWithAggregationInput | Prisma.ContentOrderByWithAggregationInput[];
    by: Prisma.ContentScalarFieldEnum[] | Prisma.ContentScalarFieldEnum;
    having?: Prisma.ContentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentCountAggregateInputType | true;
    _min?: ContentMinAggregateInputType;
    _max?: ContentMaxAggregateInputType;
};
export type ContentGroupByOutputType = {
    uuid: string;
    title: string;
    body: string;
    last_updated: Date;
    created_at: Date;
    created_by: string;
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
};
type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentGroupByOutputType[P]>;
}>>;
export type ContentWhereInput = {
    AND?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    OR?: Prisma.ContentWhereInput[];
    NOT?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    uuid?: Prisma.StringFilter<"Content"> | string;
    title?: Prisma.StringFilter<"Content"> | string;
    body?: Prisma.StringFilter<"Content"> | string;
    last_updated?: Prisma.DateTimeFilter<"Content"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Content"> | Date | string;
    created_by?: Prisma.StringFilter<"Content"> | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeListRelationFilter;
    reactionBridgeObj?: Prisma.ContentReactionBridgeListRelationFilter;
    commentObj?: Prisma.CommentListRelationFilter;
};
export type ContentOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    typeBridgeObj?: Prisma.ContentTypeBridgeOrderByRelationAggregateInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeOrderByRelationAggregateInput;
    commentObj?: Prisma.CommentOrderByRelationAggregateInput;
};
export type ContentWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    OR?: Prisma.ContentWhereInput[];
    NOT?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    title?: Prisma.StringFilter<"Content"> | string;
    body?: Prisma.StringFilter<"Content"> | string;
    last_updated?: Prisma.DateTimeFilter<"Content"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Content"> | Date | string;
    created_by?: Prisma.StringFilter<"Content"> | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeListRelationFilter;
    reactionBridgeObj?: Prisma.ContentReactionBridgeListRelationFilter;
    commentObj?: Prisma.CommentListRelationFilter;
}, "uuid">;
export type ContentOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    _count?: Prisma.ContentCountOrderByAggregateInput;
    _max?: Prisma.ContentMaxOrderByAggregateInput;
    _min?: Prisma.ContentMinOrderByAggregateInput;
};
export type ContentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentScalarWhereWithAggregatesInput | Prisma.ContentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentScalarWhereWithAggregatesInput | Prisma.ContentScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"Content"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Content"> | string;
    body?: Prisma.StringWithAggregatesFilter<"Content"> | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"Content"> | Date | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Content"> | Date | string;
    created_by?: Prisma.StringWithAggregatesFilter<"Content"> | string;
};
export type ContentCreateInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    typeBridgeObj?: Prisma.ContentTypeBridgeCreateNestedManyWithoutContentObjInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeCreateNestedManyWithoutContentObjInput;
    commentObj?: Prisma.CommentCreateNestedManyWithoutContentObjInput;
};
export type ContentUncheckedCreateInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUncheckedCreateNestedManyWithoutContentObjInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUncheckedCreateNestedManyWithoutContentObjInput;
    commentObj?: Prisma.CommentUncheckedCreateNestedManyWithoutContentObjInput;
};
export type ContentUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUpdateManyWithoutContentObjNestedInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUpdateManyWithoutContentObjNestedInput;
    commentObj?: Prisma.CommentUpdateManyWithoutContentObjNestedInput;
};
export type ContentUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUncheckedUpdateManyWithoutContentObjNestedInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUncheckedUpdateManyWithoutContentObjNestedInput;
    commentObj?: Prisma.CommentUncheckedUpdateManyWithoutContentObjNestedInput;
};
export type ContentCreateManyInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
};
export type ContentUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type ContentMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type ContentMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type ContentScalarRelationFilter = {
    is?: Prisma.ContentWhereInput;
    isNot?: Prisma.ContentWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ContentCreateNestedOneWithoutTypeBridgeObjInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutTypeBridgeObjInput, Prisma.ContentUncheckedCreateWithoutTypeBridgeObjInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutTypeBridgeObjInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutTypeBridgeObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutTypeBridgeObjInput, Prisma.ContentUncheckedCreateWithoutTypeBridgeObjInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutTypeBridgeObjInput;
    upsert?: Prisma.ContentUpsertWithoutTypeBridgeObjInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutTypeBridgeObjInput, Prisma.ContentUpdateWithoutTypeBridgeObjInput>, Prisma.ContentUncheckedUpdateWithoutTypeBridgeObjInput>;
};
export type ContentCreateNestedOneWithoutReactionBridgeObjInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutReactionBridgeObjInput, Prisma.ContentUncheckedCreateWithoutReactionBridgeObjInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutReactionBridgeObjInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutReactionBridgeObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutReactionBridgeObjInput, Prisma.ContentUncheckedCreateWithoutReactionBridgeObjInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutReactionBridgeObjInput;
    upsert?: Prisma.ContentUpsertWithoutReactionBridgeObjInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutReactionBridgeObjInput, Prisma.ContentUpdateWithoutReactionBridgeObjInput>, Prisma.ContentUncheckedUpdateWithoutReactionBridgeObjInput>;
};
export type ContentCreateNestedOneWithoutCommentObjInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutCommentObjInput, Prisma.ContentUncheckedCreateWithoutCommentObjInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutCommentObjInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutCommentObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutCommentObjInput, Prisma.ContentUncheckedCreateWithoutCommentObjInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutCommentObjInput;
    upsert?: Prisma.ContentUpsertWithoutCommentObjInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutCommentObjInput, Prisma.ContentUpdateWithoutCommentObjInput>, Prisma.ContentUncheckedUpdateWithoutCommentObjInput>;
};
export type ContentCreateWithoutTypeBridgeObjInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    reactionBridgeObj?: Prisma.ContentReactionBridgeCreateNestedManyWithoutContentObjInput;
    commentObj?: Prisma.CommentCreateNestedManyWithoutContentObjInput;
};
export type ContentUncheckedCreateWithoutTypeBridgeObjInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUncheckedCreateNestedManyWithoutContentObjInput;
    commentObj?: Prisma.CommentUncheckedCreateNestedManyWithoutContentObjInput;
};
export type ContentCreateOrConnectWithoutTypeBridgeObjInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutTypeBridgeObjInput, Prisma.ContentUncheckedCreateWithoutTypeBridgeObjInput>;
};
export type ContentUpsertWithoutTypeBridgeObjInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutTypeBridgeObjInput, Prisma.ContentUncheckedUpdateWithoutTypeBridgeObjInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutTypeBridgeObjInput, Prisma.ContentUncheckedCreateWithoutTypeBridgeObjInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutTypeBridgeObjInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutTypeBridgeObjInput, Prisma.ContentUncheckedUpdateWithoutTypeBridgeObjInput>;
};
export type ContentUpdateWithoutTypeBridgeObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUpdateManyWithoutContentObjNestedInput;
    commentObj?: Prisma.CommentUpdateManyWithoutContentObjNestedInput;
};
export type ContentUncheckedUpdateWithoutTypeBridgeObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUncheckedUpdateManyWithoutContentObjNestedInput;
    commentObj?: Prisma.CommentUncheckedUpdateManyWithoutContentObjNestedInput;
};
export type ContentCreateWithoutReactionBridgeObjInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    typeBridgeObj?: Prisma.ContentTypeBridgeCreateNestedManyWithoutContentObjInput;
    commentObj?: Prisma.CommentCreateNestedManyWithoutContentObjInput;
};
export type ContentUncheckedCreateWithoutReactionBridgeObjInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUncheckedCreateNestedManyWithoutContentObjInput;
    commentObj?: Prisma.CommentUncheckedCreateNestedManyWithoutContentObjInput;
};
export type ContentCreateOrConnectWithoutReactionBridgeObjInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutReactionBridgeObjInput, Prisma.ContentUncheckedCreateWithoutReactionBridgeObjInput>;
};
export type ContentUpsertWithoutReactionBridgeObjInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutReactionBridgeObjInput, Prisma.ContentUncheckedUpdateWithoutReactionBridgeObjInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutReactionBridgeObjInput, Prisma.ContentUncheckedCreateWithoutReactionBridgeObjInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutReactionBridgeObjInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutReactionBridgeObjInput, Prisma.ContentUncheckedUpdateWithoutReactionBridgeObjInput>;
};
export type ContentUpdateWithoutReactionBridgeObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUpdateManyWithoutContentObjNestedInput;
    commentObj?: Prisma.CommentUpdateManyWithoutContentObjNestedInput;
};
export type ContentUncheckedUpdateWithoutReactionBridgeObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUncheckedUpdateManyWithoutContentObjNestedInput;
    commentObj?: Prisma.CommentUncheckedUpdateManyWithoutContentObjNestedInput;
};
export type ContentCreateWithoutCommentObjInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    typeBridgeObj?: Prisma.ContentTypeBridgeCreateNestedManyWithoutContentObjInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeCreateNestedManyWithoutContentObjInput;
};
export type ContentUncheckedCreateWithoutCommentObjInput = {
    uuid?: string;
    title: string;
    body: string;
    last_updated?: Date | string;
    created_at?: Date | string;
    created_by: string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUncheckedCreateNestedManyWithoutContentObjInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUncheckedCreateNestedManyWithoutContentObjInput;
};
export type ContentCreateOrConnectWithoutCommentObjInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutCommentObjInput, Prisma.ContentUncheckedCreateWithoutCommentObjInput>;
};
export type ContentUpsertWithoutCommentObjInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutCommentObjInput, Prisma.ContentUncheckedUpdateWithoutCommentObjInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutCommentObjInput, Prisma.ContentUncheckedCreateWithoutCommentObjInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutCommentObjInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutCommentObjInput, Prisma.ContentUncheckedUpdateWithoutCommentObjInput>;
};
export type ContentUpdateWithoutCommentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUpdateManyWithoutContentObjNestedInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUpdateManyWithoutContentObjNestedInput;
};
export type ContentUncheckedUpdateWithoutCommentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    typeBridgeObj?: Prisma.ContentTypeBridgeUncheckedUpdateManyWithoutContentObjNestedInput;
    reactionBridgeObj?: Prisma.ContentReactionBridgeUncheckedUpdateManyWithoutContentObjNestedInput;
};
/**
 * Count Type ContentCountOutputType
 */
export type ContentCountOutputType = {
    typeBridgeObj: number;
    reactionBridgeObj: number;
    commentObj: number;
};
export type ContentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeBridgeObj?: boolean | ContentCountOutputTypeCountTypeBridgeObjArgs;
    reactionBridgeObj?: boolean | ContentCountOutputTypeCountReactionBridgeObjArgs;
    commentObj?: boolean | ContentCountOutputTypeCountCommentObjArgs;
};
/**
 * ContentCountOutputType without action
 */
export type ContentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: Prisma.ContentCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ContentCountOutputType without action
 */
export type ContentCountOutputTypeCountTypeBridgeObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentTypeBridgeWhereInput;
};
/**
 * ContentCountOutputType without action
 */
export type ContentCountOutputTypeCountReactionBridgeObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentReactionBridgeWhereInput;
};
/**
 * ContentCountOutputType without action
 */
export type ContentCountOutputTypeCountCommentObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type ContentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    title?: boolean;
    body?: boolean;
    last_updated?: boolean;
    created_at?: boolean;
    created_by?: boolean;
    typeBridgeObj?: boolean | Prisma.Content$typeBridgeObjArgs<ExtArgs>;
    reactionBridgeObj?: boolean | Prisma.Content$reactionBridgeObjArgs<ExtArgs>;
    commentObj?: boolean | Prisma.Content$commentObjArgs<ExtArgs>;
    _count?: boolean | Prisma.ContentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["content"]>;
export type ContentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    title?: boolean;
    body?: boolean;
    last_updated?: boolean;
    created_at?: boolean;
    created_by?: boolean;
}, ExtArgs["result"]["content"]>;
export type ContentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    title?: boolean;
    body?: boolean;
    last_updated?: boolean;
    created_at?: boolean;
    created_by?: boolean;
}, ExtArgs["result"]["content"]>;
export type ContentSelectScalar = {
    uuid?: boolean;
    title?: boolean;
    body?: boolean;
    last_updated?: boolean;
    created_at?: boolean;
    created_by?: boolean;
};
export type ContentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "title" | "body" | "last_updated" | "created_at" | "created_by", ExtArgs["result"]["content"]>;
export type ContentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeBridgeObj?: boolean | Prisma.Content$typeBridgeObjArgs<ExtArgs>;
    reactionBridgeObj?: boolean | Prisma.Content$reactionBridgeObjArgs<ExtArgs>;
    commentObj?: boolean | Prisma.Content$commentObjArgs<ExtArgs>;
    _count?: boolean | Prisma.ContentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ContentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ContentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ContentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Content";
    objects: {
        typeBridgeObj: Prisma.$ContentTypeBridgePayload<ExtArgs>[];
        reactionBridgeObj: Prisma.$ContentReactionBridgePayload<ExtArgs>[];
        commentObj: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        title: string;
        body: string;
        last_updated: Date;
        created_at: Date;
        created_by: string;
    }, ExtArgs["result"]["content"]>;
    composites: {};
};
export type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentPayload, S>;
export type ContentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentCountAggregateInputType | true;
};
export interface ContentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Content'];
        meta: {
            name: 'Content';
        };
    };
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     *
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const contentWithUuidOnly = await prisma.content.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends ContentFindManyArgs>(args?: Prisma.SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     *
     */
    create<T extends ContentCreateArgs>(args: Prisma.SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContentCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Contents and only return the `uuid`
     * const contentWithUuidOnly = await prisma.content.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     *
     */
    delete<T extends ContentDeleteArgs>(args: Prisma.SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContentUpdateArgs>(args: Prisma.SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContentUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Contents and only return the `uuid`
     * const contentWithUuidOnly = await prisma.content.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: Prisma.SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(args?: Prisma.Subset<T, ContentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Prisma.Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>;
    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ContentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Content model
     */
    readonly fields: ContentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Content.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ContentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    typeBridgeObj<T extends Prisma.Content$typeBridgeObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$typeBridgeObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reactionBridgeObj<T extends Prisma.Content$reactionBridgeObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$reactionBridgeObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    commentObj<T extends Prisma.Content$commentObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$commentObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Content model
 */
export interface ContentFieldRefs {
    readonly uuid: Prisma.FieldRef<"Content", 'String'>;
    readonly title: Prisma.FieldRef<"Content", 'String'>;
    readonly body: Prisma.FieldRef<"Content", 'String'>;
    readonly last_updated: Prisma.FieldRef<"Content", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"Content", 'DateTime'>;
    readonly created_by: Prisma.FieldRef<"Content", 'String'>;
}
/**
 * Content findUnique
 */
export type ContentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * Filter, which Content to fetch.
     */
    where: Prisma.ContentWhereUniqueInput;
};
/**
 * Content findUniqueOrThrow
 */
export type ContentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * Filter, which Content to fetch.
     */
    where: Prisma.ContentWhereUniqueInput;
};
/**
 * Content findFirst
 */
export type ContentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * Filter, which Content to fetch.
     */
    where?: Prisma.ContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contents to fetch.
     */
    orderBy?: Prisma.ContentOrderByWithRelationInput | Prisma.ContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contents.
     */
    cursor?: Prisma.ContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contents.
     */
    distinct?: Prisma.ContentScalarFieldEnum | Prisma.ContentScalarFieldEnum[];
};
/**
 * Content findFirstOrThrow
 */
export type ContentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * Filter, which Content to fetch.
     */
    where?: Prisma.ContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contents to fetch.
     */
    orderBy?: Prisma.ContentOrderByWithRelationInput | Prisma.ContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contents.
     */
    cursor?: Prisma.ContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contents.
     */
    distinct?: Prisma.ContentScalarFieldEnum | Prisma.ContentScalarFieldEnum[];
};
/**
 * Content findMany
 */
export type ContentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * Filter, which Contents to fetch.
     */
    where?: Prisma.ContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contents to fetch.
     */
    orderBy?: Prisma.ContentOrderByWithRelationInput | Prisma.ContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Contents.
     */
    cursor?: Prisma.ContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contents.
     */
    skip?: number;
    distinct?: Prisma.ContentScalarFieldEnum | Prisma.ContentScalarFieldEnum[];
};
/**
 * Content create
 */
export type ContentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Content.
     */
    data: Prisma.XOR<Prisma.ContentCreateInput, Prisma.ContentUncheckedCreateInput>;
};
/**
 * Content createMany
 */
export type ContentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: Prisma.ContentCreateManyInput | Prisma.ContentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Content createManyAndReturn
 */
export type ContentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * The data used to create many Contents.
     */
    data: Prisma.ContentCreateManyInput | Prisma.ContentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Content update
 */
export type ContentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Content.
     */
    data: Prisma.XOR<Prisma.ContentUpdateInput, Prisma.ContentUncheckedUpdateInput>;
    /**
     * Choose, which Content to update.
     */
    where: Prisma.ContentWhereUniqueInput;
};
/**
 * Content updateMany
 */
export type ContentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: Prisma.XOR<Prisma.ContentUpdateManyMutationInput, Prisma.ContentUncheckedUpdateManyInput>;
    /**
     * Filter which Contents to update
     */
    where?: Prisma.ContentWhereInput;
    /**
     * Limit how many Contents to update.
     */
    limit?: number;
};
/**
 * Content updateManyAndReturn
 */
export type ContentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * The data used to update Contents.
     */
    data: Prisma.XOR<Prisma.ContentUpdateManyMutationInput, Prisma.ContentUncheckedUpdateManyInput>;
    /**
     * Filter which Contents to update
     */
    where?: Prisma.ContentWhereInput;
    /**
     * Limit how many Contents to update.
     */
    limit?: number;
};
/**
 * Content upsert
 */
export type ContentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: Prisma.ContentWhereUniqueInput;
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: Prisma.XOR<Prisma.ContentCreateInput, Prisma.ContentUncheckedCreateInput>;
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ContentUpdateInput, Prisma.ContentUncheckedUpdateInput>;
};
/**
 * Content delete
 */
export type ContentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
    /**
     * Filter which Content to delete.
     */
    where: Prisma.ContentWhereUniqueInput;
};
/**
 * Content deleteMany
 */
export type ContentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: Prisma.ContentWhereInput;
    /**
     * Limit how many Contents to delete.
     */
    limit?: number;
};
/**
 * Content.typeBridgeObj
 */
export type Content$typeBridgeObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTypeBridge
     */
    select?: Prisma.ContentTypeBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContentTypeBridge
     */
    omit?: Prisma.ContentTypeBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentTypeBridgeInclude<ExtArgs> | null;
    where?: Prisma.ContentTypeBridgeWhereInput;
    orderBy?: Prisma.ContentTypeBridgeOrderByWithRelationInput | Prisma.ContentTypeBridgeOrderByWithRelationInput[];
    cursor?: Prisma.ContentTypeBridgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentTypeBridgeScalarFieldEnum | Prisma.ContentTypeBridgeScalarFieldEnum[];
};
/**
 * Content.reactionBridgeObj
 */
export type Content$reactionBridgeObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentReactionBridge
     */
    select?: Prisma.ContentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContentReactionBridge
     */
    omit?: Prisma.ContentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentReactionBridgeInclude<ExtArgs> | null;
    where?: Prisma.ContentReactionBridgeWhereInput;
    orderBy?: Prisma.ContentReactionBridgeOrderByWithRelationInput | Prisma.ContentReactionBridgeOrderByWithRelationInput[];
    cursor?: Prisma.ContentReactionBridgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentReactionBridgeScalarFieldEnum | Prisma.ContentReactionBridgeScalarFieldEnum[];
};
/**
 * Content.commentObj
 */
export type Content$commentObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: Prisma.CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
/**
 * Content without action
 */
export type ContentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: Prisma.ContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Content
     */
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Content.d.ts.map