import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model CommentReactionBridge
 *
 */
export type CommentReactionBridgeModel = runtime.Types.Result.DefaultSelection<Prisma.$CommentReactionBridgePayload>;
export type AggregateCommentReactionBridge = {
    _count: CommentReactionBridgeCountAggregateOutputType | null;
    _min: CommentReactionBridgeMinAggregateOutputType | null;
    _max: CommentReactionBridgeMaxAggregateOutputType | null;
};
export type CommentReactionBridgeMinAggregateOutputType = {
    uuid: string | null;
    comment: string | null;
    reaction: string | null;
    name: string | null;
    created_at: Date | null;
};
export type CommentReactionBridgeMaxAggregateOutputType = {
    uuid: string | null;
    comment: string | null;
    reaction: string | null;
    name: string | null;
    created_at: Date | null;
};
export type CommentReactionBridgeCountAggregateOutputType = {
    uuid: number;
    comment: number;
    reaction: number;
    name: number;
    created_at: number;
    _all: number;
};
export type CommentReactionBridgeMinAggregateInputType = {
    uuid?: true;
    comment?: true;
    reaction?: true;
    name?: true;
    created_at?: true;
};
export type CommentReactionBridgeMaxAggregateInputType = {
    uuid?: true;
    comment?: true;
    reaction?: true;
    name?: true;
    created_at?: true;
};
export type CommentReactionBridgeCountAggregateInputType = {
    uuid?: true;
    comment?: true;
    reaction?: true;
    name?: true;
    created_at?: true;
    _all?: true;
};
export type CommentReactionBridgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReactionBridge to aggregate.
     */
    where?: Prisma.CommentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentReactionBridges to fetch.
     */
    orderBy?: Prisma.CommentReactionBridgeOrderByWithRelationInput | Prisma.CommentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentReactionBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CommentReactionBridges
    **/
    _count?: true | CommentReactionBridgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommentReactionBridgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommentReactionBridgeMaxAggregateInputType;
};
export type GetCommentReactionBridgeAggregateType<T extends CommentReactionBridgeAggregateArgs> = {
    [P in keyof T & keyof AggregateCommentReactionBridge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommentReactionBridge[P]> : Prisma.GetScalarType<T[P], AggregateCommentReactionBridge[P]>;
};
export type CommentReactionBridgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentReactionBridgeWhereInput;
    orderBy?: Prisma.CommentReactionBridgeOrderByWithAggregationInput | Prisma.CommentReactionBridgeOrderByWithAggregationInput[];
    by: Prisma.CommentReactionBridgeScalarFieldEnum[] | Prisma.CommentReactionBridgeScalarFieldEnum;
    having?: Prisma.CommentReactionBridgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentReactionBridgeCountAggregateInputType | true;
    _min?: CommentReactionBridgeMinAggregateInputType;
    _max?: CommentReactionBridgeMaxAggregateInputType;
};
export type CommentReactionBridgeGroupByOutputType = {
    uuid: string;
    comment: string;
    reaction: string;
    name: string | null;
    created_at: Date;
    _count: CommentReactionBridgeCountAggregateOutputType | null;
    _min: CommentReactionBridgeMinAggregateOutputType | null;
    _max: CommentReactionBridgeMaxAggregateOutputType | null;
};
type GetCommentReactionBridgeGroupByPayload<T extends CommentReactionBridgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentReactionBridgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentReactionBridgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentReactionBridgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentReactionBridgeGroupByOutputType[P]>;
}>>;
export type CommentReactionBridgeWhereInput = {
    AND?: Prisma.CommentReactionBridgeWhereInput | Prisma.CommentReactionBridgeWhereInput[];
    OR?: Prisma.CommentReactionBridgeWhereInput[];
    NOT?: Prisma.CommentReactionBridgeWhereInput | Prisma.CommentReactionBridgeWhereInput[];
    uuid?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    comment?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    reaction?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    name?: Prisma.StringNullableFilter<"CommentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeFilter<"CommentReactionBridge"> | Date | string;
    commentObj?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
    reactionObj?: Prisma.XOR<Prisma.ReactionTypeScalarRelationFilter, Prisma.ReactionTypeWhereInput>;
};
export type CommentReactionBridgeOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    commentObj?: Prisma.CommentOrderByWithRelationInput;
    reactionObj?: Prisma.ReactionTypeOrderByWithRelationInput;
};
export type CommentReactionBridgeWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.CommentReactionBridgeWhereInput | Prisma.CommentReactionBridgeWhereInput[];
    OR?: Prisma.CommentReactionBridgeWhereInput[];
    NOT?: Prisma.CommentReactionBridgeWhereInput | Prisma.CommentReactionBridgeWhereInput[];
    comment?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    reaction?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    name?: Prisma.StringNullableFilter<"CommentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeFilter<"CommentReactionBridge"> | Date | string;
    commentObj?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
    reactionObj?: Prisma.XOR<Prisma.ReactionTypeScalarRelationFilter, Prisma.ReactionTypeWhereInput>;
}, "uuid">;
export type CommentReactionBridgeOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.CommentReactionBridgeCountOrderByAggregateInput;
    _max?: Prisma.CommentReactionBridgeMaxOrderByAggregateInput;
    _min?: Prisma.CommentReactionBridgeMinOrderByAggregateInput;
};
export type CommentReactionBridgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommentReactionBridgeScalarWhereWithAggregatesInput | Prisma.CommentReactionBridgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommentReactionBridgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommentReactionBridgeScalarWhereWithAggregatesInput | Prisma.CommentReactionBridgeScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"CommentReactionBridge"> | string;
    comment?: Prisma.StringWithAggregatesFilter<"CommentReactionBridge"> | string;
    reaction?: Prisma.StringWithAggregatesFilter<"CommentReactionBridge"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"CommentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"CommentReactionBridge"> | Date | string;
};
export type CommentReactionBridgeCreateInput = {
    uuid?: string;
    name?: string | null;
    created_at?: Date | string;
    commentObj: Prisma.CommentCreateNestedOneWithoutReactionBridgeInput;
    reactionObj: Prisma.ReactionTypeCreateNestedOneWithoutCommentBridgeInput;
};
export type CommentReactionBridgeUncheckedCreateInput = {
    uuid?: string;
    comment: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type CommentReactionBridgeUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentObj?: Prisma.CommentUpdateOneRequiredWithoutReactionBridgeNestedInput;
    reactionObj?: Prisma.ReactionTypeUpdateOneRequiredWithoutCommentBridgeNestedInput;
};
export type CommentReactionBridgeUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentReactionBridgeCreateManyInput = {
    uuid?: string;
    comment: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type CommentReactionBridgeUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentReactionBridgeUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentReactionBridgeListRelationFilter = {
    every?: Prisma.CommentReactionBridgeWhereInput;
    some?: Prisma.CommentReactionBridgeWhereInput;
    none?: Prisma.CommentReactionBridgeWhereInput;
};
export type CommentReactionBridgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommentReactionBridgeCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type CommentReactionBridgeMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type CommentReactionBridgeMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type CommentReactionBridgeCreateNestedManyWithoutReactionObjInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.CommentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyReactionObjInputEnvelope;
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
};
export type CommentReactionBridgeUncheckedCreateNestedManyWithoutReactionObjInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.CommentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyReactionObjInputEnvelope;
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
};
export type CommentReactionBridgeUpdateManyWithoutReactionObjNestedInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.CommentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    upsert?: Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput | Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyReactionObjInputEnvelope;
    set?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    update?: Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput | Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput[];
    updateMany?: Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput | Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput[];
    deleteMany?: Prisma.CommentReactionBridgeScalarWhereInput | Prisma.CommentReactionBridgeScalarWhereInput[];
};
export type CommentReactionBridgeUncheckedUpdateManyWithoutReactionObjNestedInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.CommentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    upsert?: Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput | Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyReactionObjInputEnvelope;
    set?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    update?: Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput | Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput[];
    updateMany?: Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput | Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput[];
    deleteMany?: Prisma.CommentReactionBridgeScalarWhereInput | Prisma.CommentReactionBridgeScalarWhereInput[];
};
export type CommentReactionBridgeCreateNestedManyWithoutCommentObjInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput> | Prisma.CommentReactionBridgeCreateWithoutCommentObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyCommentObjInputEnvelope;
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
};
export type CommentReactionBridgeUncheckedCreateNestedManyWithoutCommentObjInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput> | Prisma.CommentReactionBridgeCreateWithoutCommentObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyCommentObjInputEnvelope;
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
};
export type CommentReactionBridgeUpdateManyWithoutCommentObjNestedInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput> | Prisma.CommentReactionBridgeCreateWithoutCommentObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput[];
    upsert?: Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutCommentObjInput | Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutCommentObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyCommentObjInputEnvelope;
    set?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    update?: Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutCommentObjInput | Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutCommentObjInput[];
    updateMany?: Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutCommentObjInput | Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutCommentObjInput[];
    deleteMany?: Prisma.CommentReactionBridgeScalarWhereInput | Prisma.CommentReactionBridgeScalarWhereInput[];
};
export type CommentReactionBridgeUncheckedUpdateManyWithoutCommentObjNestedInput = {
    create?: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput> | Prisma.CommentReactionBridgeCreateWithoutCommentObjInput[] | Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput[];
    connectOrCreate?: Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput | Prisma.CommentReactionBridgeCreateOrConnectWithoutCommentObjInput[];
    upsert?: Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutCommentObjInput | Prisma.CommentReactionBridgeUpsertWithWhereUniqueWithoutCommentObjInput[];
    createMany?: Prisma.CommentReactionBridgeCreateManyCommentObjInputEnvelope;
    set?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.CommentReactionBridgeWhereUniqueInput | Prisma.CommentReactionBridgeWhereUniqueInput[];
    update?: Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutCommentObjInput | Prisma.CommentReactionBridgeUpdateWithWhereUniqueWithoutCommentObjInput[];
    updateMany?: Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutCommentObjInput | Prisma.CommentReactionBridgeUpdateManyWithWhereWithoutCommentObjInput[];
    deleteMany?: Prisma.CommentReactionBridgeScalarWhereInput | Prisma.CommentReactionBridgeScalarWhereInput[];
};
export type CommentReactionBridgeCreateWithoutReactionObjInput = {
    uuid?: string;
    name?: string | null;
    created_at?: Date | string;
    commentObj: Prisma.CommentCreateNestedOneWithoutReactionBridgeInput;
};
export type CommentReactionBridgeUncheckedCreateWithoutReactionObjInput = {
    uuid?: string;
    comment: string;
    name?: string | null;
    created_at?: Date | string;
};
export type CommentReactionBridgeCreateOrConnectWithoutReactionObjInput = {
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput>;
};
export type CommentReactionBridgeCreateManyReactionObjInputEnvelope = {
    data: Prisma.CommentReactionBridgeCreateManyReactionObjInput | Prisma.CommentReactionBridgeCreateManyReactionObjInput[];
    skipDuplicates?: boolean;
};
export type CommentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput = {
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentReactionBridgeUpdateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedUpdateWithoutReactionObjInput>;
    create: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutReactionObjInput>;
};
export type CommentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput = {
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentReactionBridgeUpdateWithoutReactionObjInput, Prisma.CommentReactionBridgeUncheckedUpdateWithoutReactionObjInput>;
};
export type CommentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput = {
    where: Prisma.CommentReactionBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentReactionBridgeUpdateManyMutationInput, Prisma.CommentReactionBridgeUncheckedUpdateManyWithoutReactionObjInput>;
};
export type CommentReactionBridgeScalarWhereInput = {
    AND?: Prisma.CommentReactionBridgeScalarWhereInput | Prisma.CommentReactionBridgeScalarWhereInput[];
    OR?: Prisma.CommentReactionBridgeScalarWhereInput[];
    NOT?: Prisma.CommentReactionBridgeScalarWhereInput | Prisma.CommentReactionBridgeScalarWhereInput[];
    uuid?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    comment?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    reaction?: Prisma.StringFilter<"CommentReactionBridge"> | string;
    name?: Prisma.StringNullableFilter<"CommentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeFilter<"CommentReactionBridge"> | Date | string;
};
export type CommentReactionBridgeCreateWithoutCommentObjInput = {
    uuid?: string;
    name?: string | null;
    created_at?: Date | string;
    reactionObj: Prisma.ReactionTypeCreateNestedOneWithoutCommentBridgeInput;
};
export type CommentReactionBridgeUncheckedCreateWithoutCommentObjInput = {
    uuid?: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type CommentReactionBridgeCreateOrConnectWithoutCommentObjInput = {
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput>;
};
export type CommentReactionBridgeCreateManyCommentObjInputEnvelope = {
    data: Prisma.CommentReactionBridgeCreateManyCommentObjInput | Prisma.CommentReactionBridgeCreateManyCommentObjInput[];
    skipDuplicates?: boolean;
};
export type CommentReactionBridgeUpsertWithWhereUniqueWithoutCommentObjInput = {
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentReactionBridgeUpdateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedUpdateWithoutCommentObjInput>;
    create: Prisma.XOR<Prisma.CommentReactionBridgeCreateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedCreateWithoutCommentObjInput>;
};
export type CommentReactionBridgeUpdateWithWhereUniqueWithoutCommentObjInput = {
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentReactionBridgeUpdateWithoutCommentObjInput, Prisma.CommentReactionBridgeUncheckedUpdateWithoutCommentObjInput>;
};
export type CommentReactionBridgeUpdateManyWithWhereWithoutCommentObjInput = {
    where: Prisma.CommentReactionBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentReactionBridgeUpdateManyMutationInput, Prisma.CommentReactionBridgeUncheckedUpdateManyWithoutCommentObjInput>;
};
export type CommentReactionBridgeCreateManyReactionObjInput = {
    uuid?: string;
    comment: string;
    name?: string | null;
    created_at?: Date | string;
};
export type CommentReactionBridgeUpdateWithoutReactionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentObj?: Prisma.CommentUpdateOneRequiredWithoutReactionBridgeNestedInput;
};
export type CommentReactionBridgeUncheckedUpdateWithoutReactionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentReactionBridgeUncheckedUpdateManyWithoutReactionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentReactionBridgeCreateManyCommentObjInput = {
    uuid?: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type CommentReactionBridgeUpdateWithoutCommentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reactionObj?: Prisma.ReactionTypeUpdateOneRequiredWithoutCommentBridgeNestedInput;
};
export type CommentReactionBridgeUncheckedUpdateWithoutCommentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentReactionBridgeUncheckedUpdateManyWithoutCommentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentReactionBridgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    comment?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
    commentObj?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentReactionBridge"]>;
export type CommentReactionBridgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    comment?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
    commentObj?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentReactionBridge"]>;
export type CommentReactionBridgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    comment?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
    commentObj?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentReactionBridge"]>;
export type CommentReactionBridgeSelectScalar = {
    uuid?: boolean;
    comment?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
};
export type CommentReactionBridgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "comment" | "reaction" | "name" | "created_at", ExtArgs["result"]["commentReactionBridge"]>;
export type CommentReactionBridgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commentObj?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
};
export type CommentReactionBridgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commentObj?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
};
export type CommentReactionBridgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commentObj?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
};
export type $CommentReactionBridgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommentReactionBridge";
    objects: {
        commentObj: Prisma.$CommentPayload<ExtArgs>;
        reactionObj: Prisma.$ReactionTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        comment: string;
        reaction: string;
        name: string | null;
        created_at: Date;
    }, ExtArgs["result"]["commentReactionBridge"]>;
    composites: {};
};
export type CommentReactionBridgeGetPayload<S extends boolean | null | undefined | CommentReactionBridgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload, S>;
export type CommentReactionBridgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommentReactionBridgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentReactionBridgeCountAggregateInputType | true;
};
export interface CommentReactionBridgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommentReactionBridge'];
        meta: {
            name: 'CommentReactionBridge';
        };
    };
    /**
     * Find zero or one CommentReactionBridge that matches the filter.
     * @param {CommentReactionBridgeFindUniqueArgs} args - Arguments to find a CommentReactionBridge
     * @example
     * // Get one CommentReactionBridge
     * const commentReactionBridge = await prisma.commentReactionBridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentReactionBridgeFindUniqueArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CommentReactionBridge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentReactionBridgeFindUniqueOrThrowArgs} args - Arguments to find a CommentReactionBridge
     * @example
     * // Get one CommentReactionBridge
     * const commentReactionBridge = await prisma.commentReactionBridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentReactionBridgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommentReactionBridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionBridgeFindFirstArgs} args - Arguments to find a CommentReactionBridge
     * @example
     * // Get one CommentReactionBridge
     * const commentReactionBridge = await prisma.commentReactionBridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentReactionBridgeFindFirstArgs>(args?: Prisma.SelectSubset<T, CommentReactionBridgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommentReactionBridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionBridgeFindFirstOrThrowArgs} args - Arguments to find a CommentReactionBridge
     * @example
     * // Get one CommentReactionBridge
     * const commentReactionBridge = await prisma.commentReactionBridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentReactionBridgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommentReactionBridgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CommentReactionBridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionBridgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentReactionBridges
     * const commentReactionBridges = await prisma.commentReactionBridge.findMany()
     *
     * // Get first 10 CommentReactionBridges
     * const commentReactionBridges = await prisma.commentReactionBridge.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const commentReactionBridgeWithUuidOnly = await prisma.commentReactionBridge.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends CommentReactionBridgeFindManyArgs>(args?: Prisma.SelectSubset<T, CommentReactionBridgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CommentReactionBridge.
     * @param {CommentReactionBridgeCreateArgs} args - Arguments to create a CommentReactionBridge.
     * @example
     * // Create one CommentReactionBridge
     * const CommentReactionBridge = await prisma.commentReactionBridge.create({
     *   data: {
     *     // ... data to create a CommentReactionBridge
     *   }
     * })
     *
     */
    create<T extends CommentReactionBridgeCreateArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeCreateArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CommentReactionBridges.
     * @param {CommentReactionBridgeCreateManyArgs} args - Arguments to create many CommentReactionBridges.
     * @example
     * // Create many CommentReactionBridges
     * const commentReactionBridge = await prisma.commentReactionBridge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentReactionBridgeCreateManyArgs>(args?: Prisma.SelectSubset<T, CommentReactionBridgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CommentReactionBridges and returns the data saved in the database.
     * @param {CommentReactionBridgeCreateManyAndReturnArgs} args - Arguments to create many CommentReactionBridges.
     * @example
     * // Create many CommentReactionBridges
     * const commentReactionBridge = await prisma.commentReactionBridge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CommentReactionBridges and only return the `uuid`
     * const commentReactionBridgeWithUuidOnly = await prisma.commentReactionBridge.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentReactionBridgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommentReactionBridgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CommentReactionBridge.
     * @param {CommentReactionBridgeDeleteArgs} args - Arguments to delete one CommentReactionBridge.
     * @example
     * // Delete one CommentReactionBridge
     * const CommentReactionBridge = await prisma.commentReactionBridge.delete({
     *   where: {
     *     // ... filter to delete one CommentReactionBridge
     *   }
     * })
     *
     */
    delete<T extends CommentReactionBridgeDeleteArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeDeleteArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CommentReactionBridge.
     * @param {CommentReactionBridgeUpdateArgs} args - Arguments to update one CommentReactionBridge.
     * @example
     * // Update one CommentReactionBridge
     * const commentReactionBridge = await prisma.commentReactionBridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentReactionBridgeUpdateArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeUpdateArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CommentReactionBridges.
     * @param {CommentReactionBridgeDeleteManyArgs} args - Arguments to filter CommentReactionBridges to delete.
     * @example
     * // Delete a few CommentReactionBridges
     * const { count } = await prisma.commentReactionBridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentReactionBridgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommentReactionBridgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommentReactionBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionBridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentReactionBridges
     * const commentReactionBridge = await prisma.commentReactionBridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentReactionBridgeUpdateManyArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommentReactionBridges and returns the data updated in the database.
     * @param {CommentReactionBridgeUpdateManyAndReturnArgs} args - Arguments to update many CommentReactionBridges.
     * @example
     * // Update many CommentReactionBridges
     * const commentReactionBridge = await prisma.commentReactionBridge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CommentReactionBridges and only return the `uuid`
     * const commentReactionBridgeWithUuidOnly = await prisma.commentReactionBridge.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentReactionBridgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CommentReactionBridge.
     * @param {CommentReactionBridgeUpsertArgs} args - Arguments to update or create a CommentReactionBridge.
     * @example
     * // Update or create a CommentReactionBridge
     * const commentReactionBridge = await prisma.commentReactionBridge.upsert({
     *   create: {
     *     // ... data to create a CommentReactionBridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentReactionBridge we want to update
     *   }
     * })
     */
    upsert<T extends CommentReactionBridgeUpsertArgs>(args: Prisma.SelectSubset<T, CommentReactionBridgeUpsertArgs<ExtArgs>>): Prisma.Prisma__CommentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CommentReactionBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionBridgeCountArgs} args - Arguments to filter CommentReactionBridges to count.
     * @example
     * // Count the number of CommentReactionBridges
     * const count = await prisma.commentReactionBridge.count({
     *   where: {
     *     // ... the filter for the CommentReactionBridges we want to count
     *   }
     * })
    **/
    count<T extends CommentReactionBridgeCountArgs>(args?: Prisma.Subset<T, CommentReactionBridgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentReactionBridgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CommentReactionBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionBridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentReactionBridgeAggregateArgs>(args: Prisma.Subset<T, CommentReactionBridgeAggregateArgs>): Prisma.PrismaPromise<GetCommentReactionBridgeAggregateType<T>>;
    /**
     * Group by CommentReactionBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionBridgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommentReactionBridgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommentReactionBridgeGroupByArgs['orderBy'];
    } : {
        orderBy?: CommentReactionBridgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommentReactionBridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentReactionBridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CommentReactionBridge model
     */
    readonly fields: CommentReactionBridgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CommentReactionBridge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommentReactionBridgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commentObj<T extends Prisma.CommentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommentDefaultArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reactionObj<T extends Prisma.ReactionTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReactionTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CommentReactionBridge model
 */
export interface CommentReactionBridgeFieldRefs {
    readonly uuid: Prisma.FieldRef<"CommentReactionBridge", 'String'>;
    readonly comment: Prisma.FieldRef<"CommentReactionBridge", 'String'>;
    readonly reaction: Prisma.FieldRef<"CommentReactionBridge", 'String'>;
    readonly name: Prisma.FieldRef<"CommentReactionBridge", 'String'>;
    readonly created_at: Prisma.FieldRef<"CommentReactionBridge", 'DateTime'>;
}
/**
 * CommentReactionBridge findUnique
 */
export type CommentReactionBridgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which CommentReactionBridge to fetch.
     */
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
};
/**
 * CommentReactionBridge findUniqueOrThrow
 */
export type CommentReactionBridgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which CommentReactionBridge to fetch.
     */
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
};
/**
 * CommentReactionBridge findFirst
 */
export type CommentReactionBridgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which CommentReactionBridge to fetch.
     */
    where?: Prisma.CommentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentReactionBridges to fetch.
     */
    orderBy?: Prisma.CommentReactionBridgeOrderByWithRelationInput | Prisma.CommentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommentReactionBridges.
     */
    cursor?: Prisma.CommentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentReactionBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommentReactionBridges.
     */
    distinct?: Prisma.CommentReactionBridgeScalarFieldEnum | Prisma.CommentReactionBridgeScalarFieldEnum[];
};
/**
 * CommentReactionBridge findFirstOrThrow
 */
export type CommentReactionBridgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which CommentReactionBridge to fetch.
     */
    where?: Prisma.CommentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentReactionBridges to fetch.
     */
    orderBy?: Prisma.CommentReactionBridgeOrderByWithRelationInput | Prisma.CommentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommentReactionBridges.
     */
    cursor?: Prisma.CommentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentReactionBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommentReactionBridges.
     */
    distinct?: Prisma.CommentReactionBridgeScalarFieldEnum | Prisma.CommentReactionBridgeScalarFieldEnum[];
};
/**
 * CommentReactionBridge findMany
 */
export type CommentReactionBridgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which CommentReactionBridges to fetch.
     */
    where?: Prisma.CommentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommentReactionBridges to fetch.
     */
    orderBy?: Prisma.CommentReactionBridgeOrderByWithRelationInput | Prisma.CommentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CommentReactionBridges.
     */
    cursor?: Prisma.CommentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommentReactionBridges.
     */
    skip?: number;
    distinct?: Prisma.CommentReactionBridgeScalarFieldEnum | Prisma.CommentReactionBridgeScalarFieldEnum[];
};
/**
 * CommentReactionBridge create
 */
export type CommentReactionBridgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * The data needed to create a CommentReactionBridge.
     */
    data: Prisma.XOR<Prisma.CommentReactionBridgeCreateInput, Prisma.CommentReactionBridgeUncheckedCreateInput>;
};
/**
 * CommentReactionBridge createMany
 */
export type CommentReactionBridgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentReactionBridges.
     */
    data: Prisma.CommentReactionBridgeCreateManyInput | Prisma.CommentReactionBridgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CommentReactionBridge createManyAndReturn
 */
export type CommentReactionBridgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * The data used to create many CommentReactionBridges.
     */
    data: Prisma.CommentReactionBridgeCreateManyInput | Prisma.CommentReactionBridgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CommentReactionBridge update
 */
export type CommentReactionBridgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * The data needed to update a CommentReactionBridge.
     */
    data: Prisma.XOR<Prisma.CommentReactionBridgeUpdateInput, Prisma.CommentReactionBridgeUncheckedUpdateInput>;
    /**
     * Choose, which CommentReactionBridge to update.
     */
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
};
/**
 * CommentReactionBridge updateMany
 */
export type CommentReactionBridgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentReactionBridges.
     */
    data: Prisma.XOR<Prisma.CommentReactionBridgeUpdateManyMutationInput, Prisma.CommentReactionBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which CommentReactionBridges to update
     */
    where?: Prisma.CommentReactionBridgeWhereInput;
    /**
     * Limit how many CommentReactionBridges to update.
     */
    limit?: number;
};
/**
 * CommentReactionBridge updateManyAndReturn
 */
export type CommentReactionBridgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * The data used to update CommentReactionBridges.
     */
    data: Prisma.XOR<Prisma.CommentReactionBridgeUpdateManyMutationInput, Prisma.CommentReactionBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which CommentReactionBridges to update
     */
    where?: Prisma.CommentReactionBridgeWhereInput;
    /**
     * Limit how many CommentReactionBridges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CommentReactionBridge upsert
 */
export type CommentReactionBridgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * The filter to search for the CommentReactionBridge to update in case it exists.
     */
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
    /**
     * In case the CommentReactionBridge found by the `where` argument doesn't exist, create a new CommentReactionBridge with this data.
     */
    create: Prisma.XOR<Prisma.CommentReactionBridgeCreateInput, Prisma.CommentReactionBridgeUncheckedCreateInput>;
    /**
     * In case the CommentReactionBridge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommentReactionBridgeUpdateInput, Prisma.CommentReactionBridgeUncheckedUpdateInput>;
};
/**
 * CommentReactionBridge delete
 */
export type CommentReactionBridgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
    /**
     * Filter which CommentReactionBridge to delete.
     */
    where: Prisma.CommentReactionBridgeWhereUniqueInput;
};
/**
 * CommentReactionBridge deleteMany
 */
export type CommentReactionBridgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReactionBridges to delete
     */
    where?: Prisma.CommentReactionBridgeWhereInput;
    /**
     * Limit how many CommentReactionBridges to delete.
     */
    limit?: number;
};
/**
 * CommentReactionBridge without action
 */
export type CommentReactionBridgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReactionBridge
     */
    select?: Prisma.CommentReactionBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommentReactionBridge
     */
    omit?: Prisma.CommentReactionBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentReactionBridgeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CommentReactionBridge.d.ts.map