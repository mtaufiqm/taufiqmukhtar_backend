import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ContentTypeBridge
 *
 */
export type ContentTypeBridgeModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentTypeBridgePayload>;
export type AggregateContentTypeBridge = {
    _count: ContentTypeBridgeCountAggregateOutputType | null;
    _min: ContentTypeBridgeMinAggregateOutputType | null;
    _max: ContentTypeBridgeMaxAggregateOutputType | null;
};
export type ContentTypeBridgeMinAggregateOutputType = {
    content: string | null;
    type: string | null;
};
export type ContentTypeBridgeMaxAggregateOutputType = {
    content: string | null;
    type: string | null;
};
export type ContentTypeBridgeCountAggregateOutputType = {
    content: number;
    type: number;
    _all: number;
};
export type ContentTypeBridgeMinAggregateInputType = {
    content?: true;
    type?: true;
};
export type ContentTypeBridgeMaxAggregateInputType = {
    content?: true;
    type?: true;
};
export type ContentTypeBridgeCountAggregateInputType = {
    content?: true;
    type?: true;
    _all?: true;
};
export type ContentTypeBridgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContentTypeBridge to aggregate.
     */
    where?: Prisma.ContentTypeBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentTypeBridges to fetch.
     */
    orderBy?: Prisma.ContentTypeBridgeOrderByWithRelationInput | Prisma.ContentTypeBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ContentTypeBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentTypeBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentTypeBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ContentTypeBridges
    **/
    _count?: true | ContentTypeBridgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContentTypeBridgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContentTypeBridgeMaxAggregateInputType;
};
export type GetContentTypeBridgeAggregateType<T extends ContentTypeBridgeAggregateArgs> = {
    [P in keyof T & keyof AggregateContentTypeBridge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContentTypeBridge[P]> : Prisma.GetScalarType<T[P], AggregateContentTypeBridge[P]>;
};
export type ContentTypeBridgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentTypeBridgeWhereInput;
    orderBy?: Prisma.ContentTypeBridgeOrderByWithAggregationInput | Prisma.ContentTypeBridgeOrderByWithAggregationInput[];
    by: Prisma.ContentTypeBridgeScalarFieldEnum[] | Prisma.ContentTypeBridgeScalarFieldEnum;
    having?: Prisma.ContentTypeBridgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentTypeBridgeCountAggregateInputType | true;
    _min?: ContentTypeBridgeMinAggregateInputType;
    _max?: ContentTypeBridgeMaxAggregateInputType;
};
export type ContentTypeBridgeGroupByOutputType = {
    content: string;
    type: string;
    _count: ContentTypeBridgeCountAggregateOutputType | null;
    _min: ContentTypeBridgeMinAggregateOutputType | null;
    _max: ContentTypeBridgeMaxAggregateOutputType | null;
};
type GetContentTypeBridgeGroupByPayload<T extends ContentTypeBridgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentTypeBridgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentTypeBridgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentTypeBridgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentTypeBridgeGroupByOutputType[P]>;
}>>;
export type ContentTypeBridgeWhereInput = {
    AND?: Prisma.ContentTypeBridgeWhereInput | Prisma.ContentTypeBridgeWhereInput[];
    OR?: Prisma.ContentTypeBridgeWhereInput[];
    NOT?: Prisma.ContentTypeBridgeWhereInput | Prisma.ContentTypeBridgeWhereInput[];
    content?: Prisma.StringFilter<"ContentTypeBridge"> | string;
    type?: Prisma.StringFilter<"ContentTypeBridge"> | string;
    contentObj?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    typeObj?: Prisma.XOR<Prisma.ContentTypeScalarRelationFilter, Prisma.ContentTypeWhereInput>;
};
export type ContentTypeBridgeOrderByWithRelationInput = {
    content?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    contentObj?: Prisma.ContentOrderByWithRelationInput;
    typeObj?: Prisma.ContentTypeOrderByWithRelationInput;
};
export type ContentTypeBridgeWhereUniqueInput = Prisma.AtLeast<{
    content_type?: Prisma.ContentTypeBridgeContentTypeCompoundUniqueInput;
    AND?: Prisma.ContentTypeBridgeWhereInput | Prisma.ContentTypeBridgeWhereInput[];
    OR?: Prisma.ContentTypeBridgeWhereInput[];
    NOT?: Prisma.ContentTypeBridgeWhereInput | Prisma.ContentTypeBridgeWhereInput[];
    content?: Prisma.StringFilter<"ContentTypeBridge"> | string;
    type?: Prisma.StringFilter<"ContentTypeBridge"> | string;
    contentObj?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    typeObj?: Prisma.XOR<Prisma.ContentTypeScalarRelationFilter, Prisma.ContentTypeWhereInput>;
}, "content_type" | "content_type">;
export type ContentTypeBridgeOrderByWithAggregationInput = {
    content?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    _count?: Prisma.ContentTypeBridgeCountOrderByAggregateInput;
    _max?: Prisma.ContentTypeBridgeMaxOrderByAggregateInput;
    _min?: Prisma.ContentTypeBridgeMinOrderByAggregateInput;
};
export type ContentTypeBridgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentTypeBridgeScalarWhereWithAggregatesInput | Prisma.ContentTypeBridgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentTypeBridgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentTypeBridgeScalarWhereWithAggregatesInput | Prisma.ContentTypeBridgeScalarWhereWithAggregatesInput[];
    content?: Prisma.StringWithAggregatesFilter<"ContentTypeBridge"> | string;
    type?: Prisma.StringWithAggregatesFilter<"ContentTypeBridge"> | string;
};
export type ContentTypeBridgeCreateInput = {
    contentObj: Prisma.ContentCreateNestedOneWithoutTypeBridgeObjInput;
    typeObj: Prisma.ContentTypeCreateNestedOneWithoutContentBridgeObjInput;
};
export type ContentTypeBridgeUncheckedCreateInput = {
    content: string;
    type: string;
};
export type ContentTypeBridgeUpdateInput = {
    contentObj?: Prisma.ContentUpdateOneRequiredWithoutTypeBridgeObjNestedInput;
    typeObj?: Prisma.ContentTypeUpdateOneRequiredWithoutContentBridgeObjNestedInput;
};
export type ContentTypeBridgeUncheckedUpdateInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTypeBridgeCreateManyInput = {
    content: string;
    type: string;
};
export type ContentTypeBridgeUpdateManyMutationInput = {};
export type ContentTypeBridgeUncheckedUpdateManyInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTypeBridgeListRelationFilter = {
    every?: Prisma.ContentTypeBridgeWhereInput;
    some?: Prisma.ContentTypeBridgeWhereInput;
    none?: Prisma.ContentTypeBridgeWhereInput;
};
export type ContentTypeBridgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContentTypeBridgeContentTypeCompoundUniqueInput = {
    content: string;
    type: string;
};
export type ContentTypeBridgeCountOrderByAggregateInput = {
    content?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type ContentTypeBridgeMaxOrderByAggregateInput = {
    content?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type ContentTypeBridgeMinOrderByAggregateInput = {
    content?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type ContentTypeBridgeCreateNestedManyWithoutContentObjInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentTypeBridgeCreateWithoutContentObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyContentObjInputEnvelope;
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
};
export type ContentTypeBridgeUncheckedCreateNestedManyWithoutContentObjInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentTypeBridgeCreateWithoutContentObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyContentObjInputEnvelope;
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
};
export type ContentTypeBridgeUpdateManyWithoutContentObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentTypeBridgeCreateWithoutContentObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput[];
    upsert?: Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutContentObjInput | Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutContentObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyContentObjInputEnvelope;
    set?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    delete?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    update?: Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutContentObjInput | Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutContentObjInput[];
    updateMany?: Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutContentObjInput | Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutContentObjInput[];
    deleteMany?: Prisma.ContentTypeBridgeScalarWhereInput | Prisma.ContentTypeBridgeScalarWhereInput[];
};
export type ContentTypeBridgeUncheckedUpdateManyWithoutContentObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput> | Prisma.ContentTypeBridgeCreateWithoutContentObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutContentObjInput[];
    upsert?: Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutContentObjInput | Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutContentObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyContentObjInputEnvelope;
    set?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    delete?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    update?: Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutContentObjInput | Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutContentObjInput[];
    updateMany?: Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutContentObjInput | Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutContentObjInput[];
    deleteMany?: Prisma.ContentTypeBridgeScalarWhereInput | Prisma.ContentTypeBridgeScalarWhereInput[];
};
export type ContentTypeBridgeCreateNestedManyWithoutTypeObjInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput> | Prisma.ContentTypeBridgeCreateWithoutTypeObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyTypeObjInputEnvelope;
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
};
export type ContentTypeBridgeUncheckedCreateNestedManyWithoutTypeObjInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput> | Prisma.ContentTypeBridgeCreateWithoutTypeObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyTypeObjInputEnvelope;
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
};
export type ContentTypeBridgeUpdateManyWithoutTypeObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput> | Prisma.ContentTypeBridgeCreateWithoutTypeObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput[];
    upsert?: Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutTypeObjInput | Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutTypeObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyTypeObjInputEnvelope;
    set?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    delete?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    update?: Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutTypeObjInput | Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutTypeObjInput[];
    updateMany?: Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutTypeObjInput | Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutTypeObjInput[];
    deleteMany?: Prisma.ContentTypeBridgeScalarWhereInput | Prisma.ContentTypeBridgeScalarWhereInput[];
};
export type ContentTypeBridgeUncheckedUpdateManyWithoutTypeObjNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput> | Prisma.ContentTypeBridgeCreateWithoutTypeObjInput[] | Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput[];
    connectOrCreate?: Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput | Prisma.ContentTypeBridgeCreateOrConnectWithoutTypeObjInput[];
    upsert?: Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutTypeObjInput | Prisma.ContentTypeBridgeUpsertWithWhereUniqueWithoutTypeObjInput[];
    createMany?: Prisma.ContentTypeBridgeCreateManyTypeObjInputEnvelope;
    set?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    disconnect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    delete?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    connect?: Prisma.ContentTypeBridgeWhereUniqueInput | Prisma.ContentTypeBridgeWhereUniqueInput[];
    update?: Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutTypeObjInput | Prisma.ContentTypeBridgeUpdateWithWhereUniqueWithoutTypeObjInput[];
    updateMany?: Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutTypeObjInput | Prisma.ContentTypeBridgeUpdateManyWithWhereWithoutTypeObjInput[];
    deleteMany?: Prisma.ContentTypeBridgeScalarWhereInput | Prisma.ContentTypeBridgeScalarWhereInput[];
};
export type ContentTypeBridgeCreateWithoutContentObjInput = {
    typeObj: Prisma.ContentTypeCreateNestedOneWithoutContentBridgeObjInput;
};
export type ContentTypeBridgeUncheckedCreateWithoutContentObjInput = {
    type: string;
};
export type ContentTypeBridgeCreateOrConnectWithoutContentObjInput = {
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput>;
};
export type ContentTypeBridgeCreateManyContentObjInputEnvelope = {
    data: Prisma.ContentTypeBridgeCreateManyContentObjInput | Prisma.ContentTypeBridgeCreateManyContentObjInput[];
    skipDuplicates?: boolean;
};
export type ContentTypeBridgeUpsertWithWhereUniqueWithoutContentObjInput = {
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentTypeBridgeUpdateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedUpdateWithoutContentObjInput>;
    create: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutContentObjInput>;
};
export type ContentTypeBridgeUpdateWithWhereUniqueWithoutContentObjInput = {
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentTypeBridgeUpdateWithoutContentObjInput, Prisma.ContentTypeBridgeUncheckedUpdateWithoutContentObjInput>;
};
export type ContentTypeBridgeUpdateManyWithWhereWithoutContentObjInput = {
    where: Prisma.ContentTypeBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentTypeBridgeUpdateManyMutationInput, Prisma.ContentTypeBridgeUncheckedUpdateManyWithoutContentObjInput>;
};
export type ContentTypeBridgeScalarWhereInput = {
    AND?: Prisma.ContentTypeBridgeScalarWhereInput | Prisma.ContentTypeBridgeScalarWhereInput[];
    OR?: Prisma.ContentTypeBridgeScalarWhereInput[];
    NOT?: Prisma.ContentTypeBridgeScalarWhereInput | Prisma.ContentTypeBridgeScalarWhereInput[];
    content?: Prisma.StringFilter<"ContentTypeBridge"> | string;
    type?: Prisma.StringFilter<"ContentTypeBridge"> | string;
};
export type ContentTypeBridgeCreateWithoutTypeObjInput = {
    contentObj: Prisma.ContentCreateNestedOneWithoutTypeBridgeObjInput;
};
export type ContentTypeBridgeUncheckedCreateWithoutTypeObjInput = {
    content: string;
};
export type ContentTypeBridgeCreateOrConnectWithoutTypeObjInput = {
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput>;
};
export type ContentTypeBridgeCreateManyTypeObjInputEnvelope = {
    data: Prisma.ContentTypeBridgeCreateManyTypeObjInput | Prisma.ContentTypeBridgeCreateManyTypeObjInput[];
    skipDuplicates?: boolean;
};
export type ContentTypeBridgeUpsertWithWhereUniqueWithoutTypeObjInput = {
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentTypeBridgeUpdateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedUpdateWithoutTypeObjInput>;
    create: Prisma.XOR<Prisma.ContentTypeBridgeCreateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedCreateWithoutTypeObjInput>;
};
export type ContentTypeBridgeUpdateWithWhereUniqueWithoutTypeObjInput = {
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentTypeBridgeUpdateWithoutTypeObjInput, Prisma.ContentTypeBridgeUncheckedUpdateWithoutTypeObjInput>;
};
export type ContentTypeBridgeUpdateManyWithWhereWithoutTypeObjInput = {
    where: Prisma.ContentTypeBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentTypeBridgeUpdateManyMutationInput, Prisma.ContentTypeBridgeUncheckedUpdateManyWithoutTypeObjInput>;
};
export type ContentTypeBridgeCreateManyContentObjInput = {
    type: string;
};
export type ContentTypeBridgeUpdateWithoutContentObjInput = {
    typeObj?: Prisma.ContentTypeUpdateOneRequiredWithoutContentBridgeObjNestedInput;
};
export type ContentTypeBridgeUncheckedUpdateWithoutContentObjInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTypeBridgeUncheckedUpdateManyWithoutContentObjInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTypeBridgeCreateManyTypeObjInput = {
    content: string;
};
export type ContentTypeBridgeUpdateWithoutTypeObjInput = {
    contentObj?: Prisma.ContentUpdateOneRequiredWithoutTypeBridgeObjNestedInput;
};
export type ContentTypeBridgeUncheckedUpdateWithoutTypeObjInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTypeBridgeUncheckedUpdateManyWithoutTypeObjInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTypeBridgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    content?: boolean;
    type?: boolean;
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    typeObj?: boolean | Prisma.ContentTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentTypeBridge"]>;
export type ContentTypeBridgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    content?: boolean;
    type?: boolean;
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    typeObj?: boolean | Prisma.ContentTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentTypeBridge"]>;
export type ContentTypeBridgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    content?: boolean;
    type?: boolean;
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    typeObj?: boolean | Prisma.ContentTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentTypeBridge"]>;
export type ContentTypeBridgeSelectScalar = {
    content?: boolean;
    type?: boolean;
};
export type ContentTypeBridgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"content" | "type", ExtArgs["result"]["contentTypeBridge"]>;
export type ContentTypeBridgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    typeObj?: boolean | Prisma.ContentTypeDefaultArgs<ExtArgs>;
};
export type ContentTypeBridgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    typeObj?: boolean | Prisma.ContentTypeDefaultArgs<ExtArgs>;
};
export type ContentTypeBridgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contentObj?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    typeObj?: boolean | Prisma.ContentTypeDefaultArgs<ExtArgs>;
};
export type $ContentTypeBridgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContentTypeBridge";
    objects: {
        contentObj: Prisma.$ContentPayload<ExtArgs>;
        typeObj: Prisma.$ContentTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        content: string;
        type: string;
    }, ExtArgs["result"]["contentTypeBridge"]>;
    composites: {};
};
export type ContentTypeBridgeGetPayload<S extends boolean | null | undefined | ContentTypeBridgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload, S>;
export type ContentTypeBridgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentTypeBridgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentTypeBridgeCountAggregateInputType | true;
};
export interface ContentTypeBridgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContentTypeBridge'];
        meta: {
            name: 'ContentTypeBridge';
        };
    };
    /**
     * Find zero or one ContentTypeBridge that matches the filter.
     * @param {ContentTypeBridgeFindUniqueArgs} args - Arguments to find a ContentTypeBridge
     * @example
     * // Get one ContentTypeBridge
     * const contentTypeBridge = await prisma.contentTypeBridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentTypeBridgeFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ContentTypeBridge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentTypeBridgeFindUniqueOrThrowArgs} args - Arguments to find a ContentTypeBridge
     * @example
     * // Get one ContentTypeBridge
     * const contentTypeBridge = await prisma.contentTypeBridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentTypeBridgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContentTypeBridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTypeBridgeFindFirstArgs} args - Arguments to find a ContentTypeBridge
     * @example
     * // Get one ContentTypeBridge
     * const contentTypeBridge = await prisma.contentTypeBridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentTypeBridgeFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentTypeBridgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContentTypeBridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTypeBridgeFindFirstOrThrowArgs} args - Arguments to find a ContentTypeBridge
     * @example
     * // Get one ContentTypeBridge
     * const contentTypeBridge = await prisma.contentTypeBridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentTypeBridgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentTypeBridgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ContentTypeBridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTypeBridgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentTypeBridges
     * const contentTypeBridges = await prisma.contentTypeBridge.findMany()
     *
     * // Get first 10 ContentTypeBridges
     * const contentTypeBridges = await prisma.contentTypeBridge.findMany({ take: 10 })
     *
     * // Only select the `content`
     * const contentTypeBridgeWithContentOnly = await prisma.contentTypeBridge.findMany({ select: { content: true } })
     *
     */
    findMany<T extends ContentTypeBridgeFindManyArgs>(args?: Prisma.SelectSubset<T, ContentTypeBridgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ContentTypeBridge.
     * @param {ContentTypeBridgeCreateArgs} args - Arguments to create a ContentTypeBridge.
     * @example
     * // Create one ContentTypeBridge
     * const ContentTypeBridge = await prisma.contentTypeBridge.create({
     *   data: {
     *     // ... data to create a ContentTypeBridge
     *   }
     * })
     *
     */
    create<T extends ContentTypeBridgeCreateArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeCreateArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ContentTypeBridges.
     * @param {ContentTypeBridgeCreateManyArgs} args - Arguments to create many ContentTypeBridges.
     * @example
     * // Create many ContentTypeBridges
     * const contentTypeBridge = await prisma.contentTypeBridge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContentTypeBridgeCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentTypeBridgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ContentTypeBridges and returns the data saved in the database.
     * @param {ContentTypeBridgeCreateManyAndReturnArgs} args - Arguments to create many ContentTypeBridges.
     * @example
     * // Create many ContentTypeBridges
     * const contentTypeBridge = await prisma.contentTypeBridge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ContentTypeBridges and only return the `content`
     * const contentTypeBridgeWithContentOnly = await prisma.contentTypeBridge.createManyAndReturn({
     *   select: { content: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContentTypeBridgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentTypeBridgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ContentTypeBridge.
     * @param {ContentTypeBridgeDeleteArgs} args - Arguments to delete one ContentTypeBridge.
     * @example
     * // Delete one ContentTypeBridge
     * const ContentTypeBridge = await prisma.contentTypeBridge.delete({
     *   where: {
     *     // ... filter to delete one ContentTypeBridge
     *   }
     * })
     *
     */
    delete<T extends ContentTypeBridgeDeleteArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ContentTypeBridge.
     * @param {ContentTypeBridgeUpdateArgs} args - Arguments to update one ContentTypeBridge.
     * @example
     * // Update one ContentTypeBridge
     * const contentTypeBridge = await prisma.contentTypeBridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContentTypeBridgeUpdateArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ContentTypeBridges.
     * @param {ContentTypeBridgeDeleteManyArgs} args - Arguments to filter ContentTypeBridges to delete.
     * @example
     * // Delete a few ContentTypeBridges
     * const { count } = await prisma.contentTypeBridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContentTypeBridgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentTypeBridgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContentTypeBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTypeBridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentTypeBridges
     * const contentTypeBridge = await prisma.contentTypeBridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContentTypeBridgeUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContentTypeBridges and returns the data updated in the database.
     * @param {ContentTypeBridgeUpdateManyAndReturnArgs} args - Arguments to update many ContentTypeBridges.
     * @example
     * // Update many ContentTypeBridges
     * const contentTypeBridge = await prisma.contentTypeBridge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ContentTypeBridges and only return the `content`
     * const contentTypeBridgeWithContentOnly = await prisma.contentTypeBridge.updateManyAndReturn({
     *   select: { content: true },
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
    updateManyAndReturn<T extends ContentTypeBridgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ContentTypeBridge.
     * @param {ContentTypeBridgeUpsertArgs} args - Arguments to update or create a ContentTypeBridge.
     * @example
     * // Update or create a ContentTypeBridge
     * const contentTypeBridge = await prisma.contentTypeBridge.upsert({
     *   create: {
     *     // ... data to create a ContentTypeBridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentTypeBridge we want to update
     *   }
     * })
     */
    upsert<T extends ContentTypeBridgeUpsertArgs>(args: Prisma.SelectSubset<T, ContentTypeBridgeUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentTypeBridgeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypeBridgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ContentTypeBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTypeBridgeCountArgs} args - Arguments to filter ContentTypeBridges to count.
     * @example
     * // Count the number of ContentTypeBridges
     * const count = await prisma.contentTypeBridge.count({
     *   where: {
     *     // ... the filter for the ContentTypeBridges we want to count
     *   }
     * })
    **/
    count<T extends ContentTypeBridgeCountArgs>(args?: Prisma.Subset<T, ContentTypeBridgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentTypeBridgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ContentTypeBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTypeBridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentTypeBridgeAggregateArgs>(args: Prisma.Subset<T, ContentTypeBridgeAggregateArgs>): Prisma.PrismaPromise<GetContentTypeBridgeAggregateType<T>>;
    /**
     * Group by ContentTypeBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTypeBridgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ContentTypeBridgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentTypeBridgeGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentTypeBridgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentTypeBridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentTypeBridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ContentTypeBridge model
     */
    readonly fields: ContentTypeBridgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ContentTypeBridge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ContentTypeBridgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contentObj<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    typeObj<T extends Prisma.ContentTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentTypeClient<runtime.Types.Result.GetResult<Prisma.$ContentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ContentTypeBridge model
 */
export interface ContentTypeBridgeFieldRefs {
    readonly content: Prisma.FieldRef<"ContentTypeBridge", 'String'>;
    readonly type: Prisma.FieldRef<"ContentTypeBridge", 'String'>;
}
/**
 * ContentTypeBridge findUnique
 */
export type ContentTypeBridgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentTypeBridge to fetch.
     */
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
};
/**
 * ContentTypeBridge findUniqueOrThrow
 */
export type ContentTypeBridgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentTypeBridge to fetch.
     */
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
};
/**
 * ContentTypeBridge findFirst
 */
export type ContentTypeBridgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentTypeBridge to fetch.
     */
    where?: Prisma.ContentTypeBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentTypeBridges to fetch.
     */
    orderBy?: Prisma.ContentTypeBridgeOrderByWithRelationInput | Prisma.ContentTypeBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContentTypeBridges.
     */
    cursor?: Prisma.ContentTypeBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentTypeBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentTypeBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContentTypeBridges.
     */
    distinct?: Prisma.ContentTypeBridgeScalarFieldEnum | Prisma.ContentTypeBridgeScalarFieldEnum[];
};
/**
 * ContentTypeBridge findFirstOrThrow
 */
export type ContentTypeBridgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentTypeBridge to fetch.
     */
    where?: Prisma.ContentTypeBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentTypeBridges to fetch.
     */
    orderBy?: Prisma.ContentTypeBridgeOrderByWithRelationInput | Prisma.ContentTypeBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContentTypeBridges.
     */
    cursor?: Prisma.ContentTypeBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentTypeBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentTypeBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContentTypeBridges.
     */
    distinct?: Prisma.ContentTypeBridgeScalarFieldEnum | Prisma.ContentTypeBridgeScalarFieldEnum[];
};
/**
 * ContentTypeBridge findMany
 */
export type ContentTypeBridgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ContentTypeBridges to fetch.
     */
    where?: Prisma.ContentTypeBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContentTypeBridges to fetch.
     */
    orderBy?: Prisma.ContentTypeBridgeOrderByWithRelationInput | Prisma.ContentTypeBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ContentTypeBridges.
     */
    cursor?: Prisma.ContentTypeBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContentTypeBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContentTypeBridges.
     */
    skip?: number;
    distinct?: Prisma.ContentTypeBridgeScalarFieldEnum | Prisma.ContentTypeBridgeScalarFieldEnum[];
};
/**
 * ContentTypeBridge create
 */
export type ContentTypeBridgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ContentTypeBridge.
     */
    data: Prisma.XOR<Prisma.ContentTypeBridgeCreateInput, Prisma.ContentTypeBridgeUncheckedCreateInput>;
};
/**
 * ContentTypeBridge createMany
 */
export type ContentTypeBridgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentTypeBridges.
     */
    data: Prisma.ContentTypeBridgeCreateManyInput | Prisma.ContentTypeBridgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ContentTypeBridge createManyAndReturn
 */
export type ContentTypeBridgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTypeBridge
     */
    select?: Prisma.ContentTypeBridgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContentTypeBridge
     */
    omit?: Prisma.ContentTypeBridgeOmit<ExtArgs> | null;
    /**
     * The data used to create many ContentTypeBridges.
     */
    data: Prisma.ContentTypeBridgeCreateManyInput | Prisma.ContentTypeBridgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentTypeBridgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ContentTypeBridge update
 */
export type ContentTypeBridgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ContentTypeBridge.
     */
    data: Prisma.XOR<Prisma.ContentTypeBridgeUpdateInput, Prisma.ContentTypeBridgeUncheckedUpdateInput>;
    /**
     * Choose, which ContentTypeBridge to update.
     */
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
};
/**
 * ContentTypeBridge updateMany
 */
export type ContentTypeBridgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentTypeBridges.
     */
    data: Prisma.XOR<Prisma.ContentTypeBridgeUpdateManyMutationInput, Prisma.ContentTypeBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which ContentTypeBridges to update
     */
    where?: Prisma.ContentTypeBridgeWhereInput;
    /**
     * Limit how many ContentTypeBridges to update.
     */
    limit?: number;
};
/**
 * ContentTypeBridge updateManyAndReturn
 */
export type ContentTypeBridgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTypeBridge
     */
    select?: Prisma.ContentTypeBridgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContentTypeBridge
     */
    omit?: Prisma.ContentTypeBridgeOmit<ExtArgs> | null;
    /**
     * The data used to update ContentTypeBridges.
     */
    data: Prisma.XOR<Prisma.ContentTypeBridgeUpdateManyMutationInput, Prisma.ContentTypeBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which ContentTypeBridges to update
     */
    where?: Prisma.ContentTypeBridgeWhereInput;
    /**
     * Limit how many ContentTypeBridges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContentTypeBridgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ContentTypeBridge upsert
 */
export type ContentTypeBridgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ContentTypeBridge to update in case it exists.
     */
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
    /**
     * In case the ContentTypeBridge found by the `where` argument doesn't exist, create a new ContentTypeBridge with this data.
     */
    create: Prisma.XOR<Prisma.ContentTypeBridgeCreateInput, Prisma.ContentTypeBridgeUncheckedCreateInput>;
    /**
     * In case the ContentTypeBridge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ContentTypeBridgeUpdateInput, Prisma.ContentTypeBridgeUncheckedUpdateInput>;
};
/**
 * ContentTypeBridge delete
 */
export type ContentTypeBridgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ContentTypeBridge to delete.
     */
    where: Prisma.ContentTypeBridgeWhereUniqueInput;
};
/**
 * ContentTypeBridge deleteMany
 */
export type ContentTypeBridgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContentTypeBridges to delete
     */
    where?: Prisma.ContentTypeBridgeWhereInput;
    /**
     * Limit how many ContentTypeBridges to delete.
     */
    limit?: number;
};
/**
 * ContentTypeBridge without action
 */
export type ContentTypeBridgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ContentTypeBridge.d.ts.map