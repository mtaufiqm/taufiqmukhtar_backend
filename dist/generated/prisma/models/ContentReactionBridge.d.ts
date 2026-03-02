import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ContentReactionBridge
 *
 */
export type ContentReactionBridgeModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentReactionBridgePayload>;
export type AggregateContentReactionBridge = {
    _count: ContentReactionBridgeCountAggregateOutputType | null;
    _min: ContentReactionBridgeMinAggregateOutputType | null;
    _max: ContentReactionBridgeMaxAggregateOutputType | null;
};
export type ContentReactionBridgeMinAggregateOutputType = {
    uuid: string | null;
    content: string | null;
    reaction: string | null;
    name: string | null;
    created_at: Date | null;
};
export type ContentReactionBridgeMaxAggregateOutputType = {
    uuid: string | null;
    content: string | null;
    reaction: string | null;
    name: string | null;
    created_at: Date | null;
};
export type ContentReactionBridgeCountAggregateOutputType = {
    uuid: number;
    content: number;
    reaction: number;
    name: number;
    created_at: number;
    _all: number;
};
export type ContentReactionBridgeMinAggregateInputType = {
    uuid?: true;
    content?: true;
    reaction?: true;
    name?: true;
    created_at?: true;
};
export type ContentReactionBridgeMaxAggregateInputType = {
    uuid?: true;
    content?: true;
    reaction?: true;
    name?: true;
    created_at?: true;
};
export type ContentReactionBridgeCountAggregateInputType = {
    uuid?: true;
    content?: true;
    reaction?: true;
    name?: true;
    created_at?: true;
    _all?: true;
};
export type ContentReactionBridgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContentReactionBridge to aggregate.
     */
    where?: Prisma.ContentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentReactionBridges to fetch.
     */
    orderBy?: Prisma.ContentReactionBridgeOrderByWithRelationInput | Prisma.ContentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ContentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentReactionBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ContentReactionBridges
    **/
    _count?: true | ContentReactionBridgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContentReactionBridgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContentReactionBridgeMaxAggregateInputType;
};
export type GetContentReactionBridgeAggregateType<T extends ContentReactionBridgeAggregateArgs> = {
    [P in keyof T & keyof AggregateContentReactionBridge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContentReactionBridge[P]> : Prisma.GetScalarType<T[P], AggregateContentReactionBridge[P]>;
};
export type ContentReactionBridgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentReactionBridgeWhereInput;
    orderBy?: Prisma.ContentReactionBridgeOrderByWithAggregationInput | Prisma.ContentReactionBridgeOrderByWithAggregationInput[];
    by: Prisma.ContentReactionBridgeScalarFieldEnum[] | Prisma.ContentReactionBridgeScalarFieldEnum;
    having?: Prisma.ContentReactionBridgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentReactionBridgeCountAggregateInputType | true;
    _min?: ContentReactionBridgeMinAggregateInputType;
    _max?: ContentReactionBridgeMaxAggregateInputType;
};
export type ContentReactionBridgeGroupByOutputType = {
    uuid: string;
    content: string;
    reaction: string;
    name: string | null;
    created_at: Date;
    _count: ContentReactionBridgeCountAggregateOutputType | null;
    _min: ContentReactionBridgeMinAggregateOutputType | null;
    _max: ContentReactionBridgeMaxAggregateOutputType | null;
};
type GetContentReactionBridgeGroupByPayload<T extends ContentReactionBridgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentReactionBridgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentReactionBridgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentReactionBridgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentReactionBridgeGroupByOutputType[P]>;
}>>;
export type ContentReactionBridgeWhereInput = {
    AND?: Prisma.ContentReactionBridgeWhereInput | Prisma.ContentReactionBridgeWhereInput[];
    OR?: Prisma.ContentReactionBridgeWhereInput[];
    NOT?: Prisma.ContentReactionBridgeWhereInput | Prisma.ContentReactionBridgeWhereInput[];
    uuid?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    content?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    reaction?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    name?: Prisma.StringNullableFilter<"ContentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ContentReactionBridge"> | Date | string;
    contentObj?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    reactionObj?: Prisma.XOR<Prisma.ReactionTypeScalarRelationFilter, Prisma.ReactionTypeWhereInput>;
};
export type ContentReactionBridgeOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    contentObj?: Prisma.ContentOrderByWithRelationInput;
    reactionObj?: Prisma.ReactionTypeOrderByWithRelationInput;
};
export type ContentReactionBridgeWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.ContentReactionBridgeWhereInput | Prisma.ContentReactionBridgeWhereInput[];
    OR?: Prisma.ContentReactionBridgeWhereInput[];
    NOT?: Prisma.ContentReactionBridgeWhereInput | Prisma.ContentReactionBridgeWhereInput[];
    content?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    reaction?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    name?: Prisma.StringNullableFilter<"ContentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ContentReactionBridge"> | Date | string;
    contentObj?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    reactionObj?: Prisma.XOR<Prisma.ReactionTypeScalarRelationFilter, Prisma.ReactionTypeWhereInput>;
}, "uuid">;
export type ContentReactionBridgeOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.ContentReactionBridgeCountOrderByAggregateInput;
    _max?: Prisma.ContentReactionBridgeMaxOrderByAggregateInput;
    _min?: Prisma.ContentReactionBridgeMinOrderByAggregateInput;
};
export type ContentReactionBridgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentReactionBridgeScalarWhereWithAggregatesInput | Prisma.ContentReactionBridgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentReactionBridgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentReactionBridgeScalarWhereWithAggregatesInput | Prisma.ContentReactionBridgeScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"ContentReactionBridge"> | string;
    content?: Prisma.StringWithAggregatesFilter<"ContentReactionBridge"> | string;
    reaction?: Prisma.StringWithAggregatesFilter<"ContentReactionBridge"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"ContentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ContentReactionBridge"> | Date | string;
};
export type ContentReactionBridgeCreateInput = {
    uuid?: string;
    name?: string | null;
    created_at?: Date | string;
    contentObj: Prisma.ContentCreateNestedOneWithoutReactionBridgeObjInput;
    reactionObj: Prisma.ReactionTypeCreateNestedOneWithoutContentBridgeInput;
};
export type ContentReactionBridgeUncheckedCreateInput = {
    uuid?: string;
    content: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type ContentReactionBridgeUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contentObj?: Prisma.ContentUpdateOneRequiredWithoutReactionBridgeObjNestedInput;
    reactionObj?: Prisma.ReactionTypeUpdateOneRequiredWithoutContentBridgeNestedInput;
};
export type ContentReactionBridgeUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentReactionBridgeCreateManyInput = {
    uuid?: string;
    content: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type ContentReactionBridgeUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentReactionBridgeUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentReactionBridgeListRelationFilter = {
    every?: Prisma.ContentReactionBridgeWhereInput;
    some?: Prisma.ContentReactionBridgeWhereInput;
    none?: Prisma.ContentReactionBridgeWhereInput;
};
export type ContentReactionBridgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContentReactionBridgeCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ContentReactionBridgeMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ContentReactionBridgeMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    reaction?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ContentReactionBridgeCreateNestedManyWithoutContentObjInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentReactionBridgeCreateWithoutContentObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyContentObjInputEnvelope;
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
};
export type ContentReactionBridgeUncheckedCreateNestedManyWithoutContentObjInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentReactionBridgeCreateWithoutContentObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyContentObjInputEnvelope;
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
};
export type ContentReactionBridgeUpdateManyWithoutContentObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentReactionBridgeCreateWithoutContentObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput[];
    upsert?: Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutContentObjInput | Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutContentObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyContentObjInputEnvelope;
    set?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    update?: Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutContentObjInput | Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutContentObjInput[];
    updateMany?: Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutContentObjInput | Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutContentObjInput[];
    deleteMany?: Prisma.ContentReactionBridgeScalarWhereInput | Prisma.ContentReactionBridgeScalarWhereInput[];
};
export type ContentReactionBridgeUncheckedUpdateManyWithoutContentObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentReactionBridgeCreateWithoutContentObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutContentObjInput[];
    upsert?: Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutContentObjInput | Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutContentObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyContentObjInputEnvelope;
    set?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    update?: Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutContentObjInput | Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutContentObjInput[];
    updateMany?: Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutContentObjInput | Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutContentObjInput[];
    deleteMany?: Prisma.ContentReactionBridgeScalarWhereInput | Prisma.ContentReactionBridgeScalarWhereInput[];
};
export type ContentReactionBridgeCreateNestedManyWithoutReactionObjInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.ContentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyReactionObjInputEnvelope;
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
};
export type ContentReactionBridgeUncheckedCreateNestedManyWithoutReactionObjInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.ContentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyReactionObjInputEnvelope;
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
};
export type ContentReactionBridgeUpdateManyWithoutReactionObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.ContentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    upsert?: Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput | Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyReactionObjInputEnvelope;
    set?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    update?: Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput | Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput[];
    updateMany?: Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput | Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput[];
    deleteMany?: Prisma.ContentReactionBridgeScalarWhereInput | Prisma.ContentReactionBridgeScalarWhereInput[];
};
export type ContentReactionBridgeUncheckedUpdateManyWithoutReactionObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput> | Prisma.ContentReactionBridgeCreateWithoutReactionObjInput[] | Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput[];
    connectOrCreate?: Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput | Prisma.ContentReactionBridgeCreateOrConnectWithoutReactionObjInput[];
    upsert?: Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput | Prisma.ContentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput[];
    createMany?: Prisma.ContentReactionBridgeCreateManyReactionObjInputEnvelope;
    set?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    delete?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    connect?: Prisma.ContentReactionBridgeWhereUniqueInput | Prisma.ContentReactionBridgeWhereUniqueInput[];
    update?: Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput | Prisma.ContentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput[];
    updateMany?: Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput | Prisma.ContentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput[];
    deleteMany?: Prisma.ContentReactionBridgeScalarWhereInput | Prisma.ContentReactionBridgeScalarWhereInput[];
};
export type ContentReactionBridgeCreateWithoutContentObjInput = {
    uuid?: string;
    name?: string | null;
    created_at?: Date | string;
    reactionObj: Prisma.ReactionTypeCreateNestedOneWithoutContentBridgeInput;
};
export type ContentReactionBridgeUncheckedCreateWithoutContentObjInput = {
    uuid?: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type ContentReactionBridgeCreateOrConnectWithoutContentObjInput = {
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput>;
};
export type ContentReactionBridgeCreateManyContentObjInputEnvelope = {
    data: Prisma.ContentReactionBridgeCreateManyContentObjInput | Prisma.ContentReactionBridgeCreateManyContentObjInput[];
    skipDuplicates?: boolean;
};
export type ContentReactionBridgeUpsertWithWhereUniqueWithoutContentObjInput = {
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentReactionBridgeUpdateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedUpdateWithoutContentObjInput>;
    create: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutContentObjInput>;
};
export type ContentReactionBridgeUpdateWithWhereUniqueWithoutContentObjInput = {
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentReactionBridgeUpdateWithoutContentObjInput, Prisma.ContentReactionBridgeUncheckedUpdateWithoutContentObjInput>;
};
export type ContentReactionBridgeUpdateManyWithWhereWithoutContentObjInput = {
    where: Prisma.ContentReactionBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentReactionBridgeUpdateManyMutationInput, Prisma.ContentReactionBridgeUncheckedUpdateManyWithoutContentObjInput>;
};
export type ContentReactionBridgeScalarWhereInput = {
    AND?: Prisma.ContentReactionBridgeScalarWhereInput | Prisma.ContentReactionBridgeScalarWhereInput[];
    OR?: Prisma.ContentReactionBridgeScalarWhereInput[];
    NOT?: Prisma.ContentReactionBridgeScalarWhereInput | Prisma.ContentReactionBridgeScalarWhereInput[];
    uuid?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    content?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    reaction?: Prisma.StringFilter<"ContentReactionBridge"> | string;
    name?: Prisma.StringNullableFilter<"ContentReactionBridge"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ContentReactionBridge"> | Date | string;
};
export type ContentReactionBridgeCreateWithoutReactionObjInput = {
    uuid?: string;
    name?: string | null;
    created_at?: Date | string;
    contentObj: Prisma.ContentCreateNestedOneWithoutReactionBridgeObjInput;
};
export type ContentReactionBridgeUncheckedCreateWithoutReactionObjInput = {
    uuid?: string;
    content: string;
    name?: string | null;
    created_at?: Date | string;
};
export type ContentReactionBridgeCreateOrConnectWithoutReactionObjInput = {
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput>;
};
export type ContentReactionBridgeCreateManyReactionObjInputEnvelope = {
    data: Prisma.ContentReactionBridgeCreateManyReactionObjInput | Prisma.ContentReactionBridgeCreateManyReactionObjInput[];
    skipDuplicates?: boolean;
};
export type ContentReactionBridgeUpsertWithWhereUniqueWithoutReactionObjInput = {
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentReactionBridgeUpdateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedUpdateWithoutReactionObjInput>;
    create: Prisma.XOR<Prisma.ContentReactionBridgeCreateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedCreateWithoutReactionObjInput>;
};
export type ContentReactionBridgeUpdateWithWhereUniqueWithoutReactionObjInput = {
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentReactionBridgeUpdateWithoutReactionObjInput, Prisma.ContentReactionBridgeUncheckedUpdateWithoutReactionObjInput>;
};
export type ContentReactionBridgeUpdateManyWithWhereWithoutReactionObjInput = {
    where: Prisma.ContentReactionBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentReactionBridgeUpdateManyMutationInput, Prisma.ContentReactionBridgeUncheckedUpdateManyWithoutReactionObjInput>;
};
export type ContentReactionBridgeCreateManyContentObjInput = {
    uuid?: string;
    reaction: string;
    name?: string | null;
    created_at?: Date | string;
};
export type ContentReactionBridgeUpdateWithoutContentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reactionObj?: Prisma.ReactionTypeUpdateOneRequiredWithoutContentBridgeNestedInput;
};
export type ContentReactionBridgeUncheckedUpdateWithoutContentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentReactionBridgeUncheckedUpdateManyWithoutContentObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    reaction?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentReactionBridgeCreateManyReactionObjInput = {
    uuid?: string;
    content: string;
    name?: string | null;
    created_at?: Date | string;
};
export type ContentReactionBridgeUpdateWithoutReactionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contentObj?: Prisma.ContentUpdateOneRequiredWithoutReactionBridgeObjNestedInput;
};
export type ContentReactionBridgeUncheckedUpdateWithoutReactionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentReactionBridgeUncheckedUpdateManyWithoutReactionObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentReactionBridgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    content?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentReactionBridge"]>;
export type ContentReactionBridgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    content?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentReactionBridge"]>;
export type ContentReactionBridgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    content?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentReactionBridge"]>;
export type ContentReactionBridgeSelectScalar = {
    uuid?: boolean;
    content?: boolean;
    reaction?: boolean;
    name?: boolean;
    created_at?: boolean;
};
export type ContentReactionBridgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "content" | "reaction" | "name" | "created_at", ExtArgs["result"]["contentReactionBridge"]>;
export type ContentReactionBridgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
};
export type ContentReactionBridgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
};
export type ContentReactionBridgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    reactionObj?: boolean | Prisma.ReactionTypeDefaultArgs<ExtArgs>;
};
export type $ContentReactionBridgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContentReactionBridge";
    objects: {
        contentObj: Prisma.$ContentPayload<ExtArgs>;
        reactionObj: Prisma.$ReactionTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        content: string;
        reaction: string;
        name: string | null;
        created_at: Date;
    }, ExtArgs["result"]["contentReactionBridge"]>;
    composites: {};
};
export type ContentReactionBridgeGetPayload<S extends boolean | null | undefined | ContentReactionBridgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload, S>;
export type ContentReactionBridgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentReactionBridgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentReactionBridgeCountAggregateInputType | true;
};
export interface ContentReactionBridgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContentReactionBridge'];
        meta: {
            name: 'ContentReactionBridge';
        };
    };
    /**
     * Find zero or one ContentReactionBridge that matches the filter.
     * @param {ContentReactionBridgeFindUniqueArgs} args - Arguments to find a ContentReactionBridge
     * @example
     * // Get one ContentReactionBridge
     * const contentReactionBridge = await prisma.contentReactionBridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentReactionBridgeFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ContentReactionBridge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentReactionBridgeFindUniqueOrThrowArgs} args - Arguments to find a ContentReactionBridge
     * @example
     * // Get one ContentReactionBridge
     * const contentReactionBridge = await prisma.contentReactionBridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentReactionBridgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContentReactionBridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentReactionBridgeFindFirstArgs} args - Arguments to find a ContentReactionBridge
     * @example
     * // Get one ContentReactionBridge
     * const contentReactionBridge = await prisma.contentReactionBridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentReactionBridgeFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentReactionBridgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContentReactionBridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentReactionBridgeFindFirstOrThrowArgs} args - Arguments to find a ContentReactionBridge
     * @example
     * // Get one ContentReactionBridge
     * const contentReactionBridge = await prisma.contentReactionBridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentReactionBridgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentReactionBridgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ContentReactionBridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentReactionBridgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentReactionBridges
     * const contentReactionBridges = await prisma.contentReactionBridge.findMany()
     *
     * // Get first 10 ContentReactionBridges
     * const contentReactionBridges = await prisma.contentReactionBridge.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const contentReactionBridgeWithUuidOnly = await prisma.contentReactionBridge.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends ContentReactionBridgeFindManyArgs>(args?: Prisma.SelectSubset<T, ContentReactionBridgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ContentReactionBridge.
     * @param {ContentReactionBridgeCreateArgs} args - Arguments to create a ContentReactionBridge.
     * @example
     * // Create one ContentReactionBridge
     * const ContentReactionBridge = await prisma.contentReactionBridge.create({
     *   data: {
     *     // ... data to create a ContentReactionBridge
     *   }
     * })
     *
     */
    create<T extends ContentReactionBridgeCreateArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeCreateArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ContentReactionBridges.
     * @param {ContentReactionBridgeCreateManyArgs} args - Arguments to create many ContentReactionBridges.
     * @example
     * // Create many ContentReactionBridges
     * const contentReactionBridge = await prisma.contentReactionBridge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContentReactionBridgeCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentReactionBridgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ContentReactionBridges and returns the data saved in the database.
     * @param {ContentReactionBridgeCreateManyAndReturnArgs} args - Arguments to create many ContentReactionBridges.
     * @example
     * // Create many ContentReactionBridges
     * const contentReactionBridge = await prisma.contentReactionBridge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ContentReactionBridges and only return the `uuid`
     * const contentReactionBridgeWithUuidOnly = await prisma.contentReactionBridge.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContentReactionBridgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentReactionBridgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ContentReactionBridge.
     * @param {ContentReactionBridgeDeleteArgs} args - Arguments to delete one ContentReactionBridge.
     * @example
     * // Delete one ContentReactionBridge
     * const ContentReactionBridge = await prisma.contentReactionBridge.delete({
     *   where: {
     *     // ... filter to delete one ContentReactionBridge
     *   }
     * })
     *
     */
    delete<T extends ContentReactionBridgeDeleteArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ContentReactionBridge.
     * @param {ContentReactionBridgeUpdateArgs} args - Arguments to update one ContentReactionBridge.
     * @example
     * // Update one ContentReactionBridge
     * const contentReactionBridge = await prisma.contentReactionBridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContentReactionBridgeUpdateArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ContentReactionBridges.
     * @param {ContentReactionBridgeDeleteManyArgs} args - Arguments to filter ContentReactionBridges to delete.
     * @example
     * // Delete a few ContentReactionBridges
     * const { count } = await prisma.contentReactionBridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContentReactionBridgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentReactionBridgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContentReactionBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentReactionBridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentReactionBridges
     * const contentReactionBridge = await prisma.contentReactionBridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContentReactionBridgeUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContentReactionBridges and returns the data updated in the database.
     * @param {ContentReactionBridgeUpdateManyAndReturnArgs} args - Arguments to update many ContentReactionBridges.
     * @example
     * // Update many ContentReactionBridges
     * const contentReactionBridge = await prisma.contentReactionBridge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ContentReactionBridges and only return the `uuid`
     * const contentReactionBridgeWithUuidOnly = await prisma.contentReactionBridge.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContentReactionBridgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ContentReactionBridge.
     * @param {ContentReactionBridgeUpsertArgs} args - Arguments to update or create a ContentReactionBridge.
     * @example
     * // Update or create a ContentReactionBridge
     * const contentReactionBridge = await prisma.contentReactionBridge.upsert({
     *   create: {
     *     // ... data to create a ContentReactionBridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentReactionBridge we want to update
     *   }
     * })
     */
    upsert<T extends ContentReactionBridgeUpsertArgs>(args: Prisma.SelectSubset<T, ContentReactionBridgeUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentReactionBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ContentReactionBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentReactionBridgeCountArgs} args - Arguments to filter ContentReactionBridges to count.
     * @example
     * // Count the number of ContentReactionBridges
     * const count = await prisma.contentReactionBridge.count({
     *   where: {
     *     // ... the filter for the ContentReactionBridges we want to count
     *   }
     * })
    **/
    count<T extends ContentReactionBridgeCountArgs>(args?: Prisma.Subset<T, ContentReactionBridgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentReactionBridgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ContentReactionBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentReactionBridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentReactionBridgeAggregateArgs>(args: Prisma.Subset<T, ContentReactionBridgeAggregateArgs>): Prisma.PrismaPromise<GetContentReactionBridgeAggregateType<T>>;
    /**
     * Group by ContentReactionBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentReactionBridgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ContentReactionBridgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentReactionBridgeGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentReactionBridgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentReactionBridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentReactionBridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ContentReactionBridge model
     */
    readonly fields: ContentReactionBridgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ContentReactionBridge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ContentReactionBridgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contentObj<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ContentReactionBridge model
 */
export interface ContentReactionBridgeFieldRefs {
    readonly uuid: Prisma.FieldRef<"ContentReactionBridge", 'String'>;
    readonly content: Prisma.FieldRef<"ContentReactionBridge", 'String'>;
    readonly reaction: Prisma.FieldRef<"ContentReactionBridge", 'String'>;
    readonly name: Prisma.FieldRef<"ContentReactionBridge", 'String'>;
    readonly created_at: Prisma.FieldRef<"ContentReactionBridge", 'DateTime'>;
}
/**
 * ContentReactionBridge findUnique
 */
export type ContentReactionBridgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentReactionBridge to fetch.
     */
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
};
/**
 * ContentReactionBridge findUniqueOrThrow
 */
export type ContentReactionBridgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentReactionBridge to fetch.
     */
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
};
/**
 * ContentReactionBridge findFirst
 */
export type ContentReactionBridgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentReactionBridge to fetch.
     */
    where?: Prisma.ContentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentReactionBridges to fetch.
     */
    orderBy?: Prisma.ContentReactionBridgeOrderByWithRelationInput | Prisma.ContentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContentReactionBridges.
     */
    cursor?: Prisma.ContentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentReactionBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContentReactionBridges.
     */
    distinct?: Prisma.ContentReactionBridgeScalarFieldEnum | Prisma.ContentReactionBridgeScalarFieldEnum[];
};
/**
 * ContentReactionBridge findFirstOrThrow
 */
export type ContentReactionBridgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentReactionBridge to fetch.
     */
    where?: Prisma.ContentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentReactionBridges to fetch.
     */
    orderBy?: Prisma.ContentReactionBridgeOrderByWithRelationInput | Prisma.ContentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContentReactionBridges.
     */
    cursor?: Prisma.ContentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentReactionBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContentReactionBridges.
     */
    distinct?: Prisma.ContentReactionBridgeScalarFieldEnum | Prisma.ContentReactionBridgeScalarFieldEnum[];
};
/**
 * ContentReactionBridge findMany
 */
export type ContentReactionBridgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentReactionBridges to fetch.
     */
    where?: Prisma.ContentReactionBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentReactionBridges to fetch.
     */
    orderBy?: Prisma.ContentReactionBridgeOrderByWithRelationInput | Prisma.ContentReactionBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ContentReactionBridges.
     */
    cursor?: Prisma.ContentReactionBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentReactionBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentReactionBridges.
     */
    skip?: number;
    distinct?: Prisma.ContentReactionBridgeScalarFieldEnum | Prisma.ContentReactionBridgeScalarFieldEnum[];
};
/**
 * ContentReactionBridge create
 */
export type ContentReactionBridgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ContentReactionBridge.
     */
    data: Prisma.XOR<Prisma.ContentReactionBridgeCreateInput, Prisma.ContentReactionBridgeUncheckedCreateInput>;
};
/**
 * ContentReactionBridge createMany
 */
export type ContentReactionBridgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentReactionBridges.
     */
    data: Prisma.ContentReactionBridgeCreateManyInput | Prisma.ContentReactionBridgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ContentReactionBridge createManyAndReturn
 */
export type ContentReactionBridgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentReactionBridge
     */
    select?: Prisma.ContentReactionBridgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContentReactionBridge
     */
    omit?: Prisma.ContentReactionBridgeOmit<ExtArgs> | null;
    /**
     * The data used to create many ContentReactionBridges.
     */
    data: Prisma.ContentReactionBridgeCreateManyInput | Prisma.ContentReactionBridgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentReactionBridgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ContentReactionBridge update
 */
export type ContentReactionBridgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ContentReactionBridge.
     */
    data: Prisma.XOR<Prisma.ContentReactionBridgeUpdateInput, Prisma.ContentReactionBridgeUncheckedUpdateInput>;
    /**
     * Choose, which ContentReactionBridge to update.
     */
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
};
/**
 * ContentReactionBridge updateMany
 */
export type ContentReactionBridgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentReactionBridges.
     */
    data: Prisma.XOR<Prisma.ContentReactionBridgeUpdateManyMutationInput, Prisma.ContentReactionBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which ContentReactionBridges to update
     */
    where?: Prisma.ContentReactionBridgeWhereInput;
    /**
     * Limit how many ContentReactionBridges to update.
     */
    limit?: number;
};
/**
 * ContentReactionBridge updateManyAndReturn
 */
export type ContentReactionBridgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentReactionBridge
     */
    select?: Prisma.ContentReactionBridgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContentReactionBridge
     */
    omit?: Prisma.ContentReactionBridgeOmit<ExtArgs> | null;
    /**
     * The data used to update ContentReactionBridges.
     */
    data: Prisma.XOR<Prisma.ContentReactionBridgeUpdateManyMutationInput, Prisma.ContentReactionBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which ContentReactionBridges to update
     */
    where?: Prisma.ContentReactionBridgeWhereInput;
    /**
     * Limit how many ContentReactionBridges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentReactionBridgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ContentReactionBridge upsert
 */
export type ContentReactionBridgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ContentReactionBridge to update in case it exists.
     */
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
    /**
     * In case the ContentReactionBridge found by the `where` argument doesn't exist, create a new ContentReactionBridge with this data.
     */
    create: Prisma.XOR<Prisma.ContentReactionBridgeCreateInput, Prisma.ContentReactionBridgeUncheckedCreateInput>;
    /**
     * In case the ContentReactionBridge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ContentReactionBridgeUpdateInput, Prisma.ContentReactionBridgeUncheckedUpdateInput>;
};
/**
 * ContentReactionBridge delete
 */
export type ContentReactionBridgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ContentReactionBridge to delete.
     */
    where: Prisma.ContentReactionBridgeWhereUniqueInput;
};
/**
 * ContentReactionBridge deleteMany
 */
export type ContentReactionBridgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContentReactionBridges to delete
     */
    where?: Prisma.ContentReactionBridgeWhereInput;
    /**
     * Limit how many ContentReactionBridges to delete.
     */
    limit?: number;
};
/**
 * ContentReactionBridge without action
 */
export type ContentReactionBridgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ContentReactionBridge.d.ts.map