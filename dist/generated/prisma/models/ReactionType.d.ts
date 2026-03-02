import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ReactionType
 *
 */
export type ReactionTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$ReactionTypePayload>;
export type AggregateReactionType = {
    _count: ReactionTypeCountAggregateOutputType | null;
    _min: ReactionTypeMinAggregateOutputType | null;
    _max: ReactionTypeMaxAggregateOutputType | null;
};
export type ReactionTypeMinAggregateOutputType = {
    uuid: string | null;
    description: string | null;
    label: string | null;
};
export type ReactionTypeMaxAggregateOutputType = {
    uuid: string | null;
    description: string | null;
    label: string | null;
};
export type ReactionTypeCountAggregateOutputType = {
    uuid: number;
    description: number;
    label: number;
    _all: number;
};
export type ReactionTypeMinAggregateInputType = {
    uuid?: true;
    description?: true;
    label?: true;
};
export type ReactionTypeMaxAggregateInputType = {
    uuid?: true;
    description?: true;
    label?: true;
};
export type ReactionTypeCountAggregateInputType = {
    uuid?: true;
    description?: true;
    label?: true;
    _all?: true;
};
export type ReactionTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionType to aggregate.
     */
    where?: Prisma.ReactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: Prisma.ReactionTypeOrderByWithRelationInput | Prisma.ReactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ReactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReactionTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ReactionTypes
    **/
    _count?: true | ReactionTypeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ReactionTypeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ReactionTypeMaxAggregateInputType;
};
export type GetReactionTypeAggregateType<T extends ReactionTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateReactionType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReactionType[P]> : Prisma.GetScalarType<T[P], AggregateReactionType[P]>;
};
export type ReactionTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReactionTypeWhereInput;
    orderBy?: Prisma.ReactionTypeOrderByWithAggregationInput | Prisma.ReactionTypeOrderByWithAggregationInput[];
    by: Prisma.ReactionTypeScalarFieldEnum[] | Prisma.ReactionTypeScalarFieldEnum;
    having?: Prisma.ReactionTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReactionTypeCountAggregateInputType | true;
    _min?: ReactionTypeMinAggregateInputType;
    _max?: ReactionTypeMaxAggregateInputType;
};
export type ReactionTypeGroupByOutputType = {
    uuid: string;
    description: string;
    label: string | null;
    _count: ReactionTypeCountAggregateOutputType | null;
    _min: ReactionTypeMinAggregateOutputType | null;
    _max: ReactionTypeMaxAggregateOutputType | null;
};
type GetReactionTypeGroupByPayload<T extends ReactionTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReactionTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReactionTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReactionTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReactionTypeGroupByOutputType[P]>;
}>>;
export type ReactionTypeWhereInput = {
    AND?: Prisma.ReactionTypeWhereInput | Prisma.ReactionTypeWhereInput[];
    OR?: Prisma.ReactionTypeWhereInput[];
    NOT?: Prisma.ReactionTypeWhereInput | Prisma.ReactionTypeWhereInput[];
    uuid?: Prisma.StringFilter<"ReactionType"> | string;
    description?: Prisma.StringFilter<"ReactionType"> | string;
    label?: Prisma.StringNullableFilter<"ReactionType"> | string | null;
    commentBridge?: Prisma.CommentReactionBridgeListRelationFilter;
    contentBridge?: Prisma.ContentReactionBridgeListRelationFilter;
};
export type ReactionTypeOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentBridge?: Prisma.CommentReactionBridgeOrderByRelationAggregateInput;
    contentBridge?: Prisma.ContentReactionBridgeOrderByRelationAggregateInput;
};
export type ReactionTypeWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.ReactionTypeWhereInput | Prisma.ReactionTypeWhereInput[];
    OR?: Prisma.ReactionTypeWhereInput[];
    NOT?: Prisma.ReactionTypeWhereInput | Prisma.ReactionTypeWhereInput[];
    description?: Prisma.StringFilter<"ReactionType"> | string;
    label?: Prisma.StringNullableFilter<"ReactionType"> | string | null;
    commentBridge?: Prisma.CommentReactionBridgeListRelationFilter;
    contentBridge?: Prisma.ContentReactionBridgeListRelationFilter;
}, "uuid">;
export type ReactionTypeOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ReactionTypeCountOrderByAggregateInput;
    _max?: Prisma.ReactionTypeMaxOrderByAggregateInput;
    _min?: Prisma.ReactionTypeMinOrderByAggregateInput;
};
export type ReactionTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReactionTypeScalarWhereWithAggregatesInput | Prisma.ReactionTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReactionTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReactionTypeScalarWhereWithAggregatesInput | Prisma.ReactionTypeScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"ReactionType"> | string;
    description?: Prisma.StringWithAggregatesFilter<"ReactionType"> | string;
    label?: Prisma.StringNullableWithAggregatesFilter<"ReactionType"> | string | null;
};
export type ReactionTypeCreateInput = {
    uuid?: string;
    description: string;
    label?: string | null;
    commentBridge?: Prisma.CommentReactionBridgeCreateNestedManyWithoutReactionObjInput;
    contentBridge?: Prisma.ContentReactionBridgeCreateNestedManyWithoutReactionObjInput;
};
export type ReactionTypeUncheckedCreateInput = {
    uuid?: string;
    description: string;
    label?: string | null;
    commentBridge?: Prisma.CommentReactionBridgeUncheckedCreateNestedManyWithoutReactionObjInput;
    contentBridge?: Prisma.ContentReactionBridgeUncheckedCreateNestedManyWithoutReactionObjInput;
};
export type ReactionTypeUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentBridge?: Prisma.CommentReactionBridgeUpdateManyWithoutReactionObjNestedInput;
    contentBridge?: Prisma.ContentReactionBridgeUpdateManyWithoutReactionObjNestedInput;
};
export type ReactionTypeUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentBridge?: Prisma.CommentReactionBridgeUncheckedUpdateManyWithoutReactionObjNestedInput;
    contentBridge?: Prisma.ContentReactionBridgeUncheckedUpdateManyWithoutReactionObjNestedInput;
};
export type ReactionTypeCreateManyInput = {
    uuid?: string;
    description: string;
    label?: string | null;
};
export type ReactionTypeUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ReactionTypeUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ReactionTypeCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
};
export type ReactionTypeMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
};
export type ReactionTypeMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
};
export type ReactionTypeScalarRelationFilter = {
    is?: Prisma.ReactionTypeWhereInput;
    isNot?: Prisma.ReactionTypeWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ReactionTypeCreateNestedOneWithoutContentBridgeInput = {
    create?: Prisma.XOR<Prisma.ReactionTypeCreateWithoutContentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutContentBridgeInput>;
    connectOrCreate?: Prisma.ReactionTypeCreateOrConnectWithoutContentBridgeInput;
    connect?: Prisma.ReactionTypeWhereUniqueInput;
};
export type ReactionTypeUpdateOneRequiredWithoutContentBridgeNestedInput = {
    create?: Prisma.XOR<Prisma.ReactionTypeCreateWithoutContentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutContentBridgeInput>;
    connectOrCreate?: Prisma.ReactionTypeCreateOrConnectWithoutContentBridgeInput;
    upsert?: Prisma.ReactionTypeUpsertWithoutContentBridgeInput;
    connect?: Prisma.ReactionTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReactionTypeUpdateToOneWithWhereWithoutContentBridgeInput, Prisma.ReactionTypeUpdateWithoutContentBridgeInput>, Prisma.ReactionTypeUncheckedUpdateWithoutContentBridgeInput>;
};
export type ReactionTypeCreateNestedOneWithoutCommentBridgeInput = {
    create?: Prisma.XOR<Prisma.ReactionTypeCreateWithoutCommentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutCommentBridgeInput>;
    connectOrCreate?: Prisma.ReactionTypeCreateOrConnectWithoutCommentBridgeInput;
    connect?: Prisma.ReactionTypeWhereUniqueInput;
};
export type ReactionTypeUpdateOneRequiredWithoutCommentBridgeNestedInput = {
    create?: Prisma.XOR<Prisma.ReactionTypeCreateWithoutCommentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutCommentBridgeInput>;
    connectOrCreate?: Prisma.ReactionTypeCreateOrConnectWithoutCommentBridgeInput;
    upsert?: Prisma.ReactionTypeUpsertWithoutCommentBridgeInput;
    connect?: Prisma.ReactionTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReactionTypeUpdateToOneWithWhereWithoutCommentBridgeInput, Prisma.ReactionTypeUpdateWithoutCommentBridgeInput>, Prisma.ReactionTypeUncheckedUpdateWithoutCommentBridgeInput>;
};
export type ReactionTypeCreateWithoutContentBridgeInput = {
    uuid?: string;
    description: string;
    label?: string | null;
    commentBridge?: Prisma.CommentReactionBridgeCreateNestedManyWithoutReactionObjInput;
};
export type ReactionTypeUncheckedCreateWithoutContentBridgeInput = {
    uuid?: string;
    description: string;
    label?: string | null;
    commentBridge?: Prisma.CommentReactionBridgeUncheckedCreateNestedManyWithoutReactionObjInput;
};
export type ReactionTypeCreateOrConnectWithoutContentBridgeInput = {
    where: Prisma.ReactionTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReactionTypeCreateWithoutContentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutContentBridgeInput>;
};
export type ReactionTypeUpsertWithoutContentBridgeInput = {
    update: Prisma.XOR<Prisma.ReactionTypeUpdateWithoutContentBridgeInput, Prisma.ReactionTypeUncheckedUpdateWithoutContentBridgeInput>;
    create: Prisma.XOR<Prisma.ReactionTypeCreateWithoutContentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutContentBridgeInput>;
    where?: Prisma.ReactionTypeWhereInput;
};
export type ReactionTypeUpdateToOneWithWhereWithoutContentBridgeInput = {
    where?: Prisma.ReactionTypeWhereInput;
    data: Prisma.XOR<Prisma.ReactionTypeUpdateWithoutContentBridgeInput, Prisma.ReactionTypeUncheckedUpdateWithoutContentBridgeInput>;
};
export type ReactionTypeUpdateWithoutContentBridgeInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentBridge?: Prisma.CommentReactionBridgeUpdateManyWithoutReactionObjNestedInput;
};
export type ReactionTypeUncheckedUpdateWithoutContentBridgeInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentBridge?: Prisma.CommentReactionBridgeUncheckedUpdateManyWithoutReactionObjNestedInput;
};
export type ReactionTypeCreateWithoutCommentBridgeInput = {
    uuid?: string;
    description: string;
    label?: string | null;
    contentBridge?: Prisma.ContentReactionBridgeCreateNestedManyWithoutReactionObjInput;
};
export type ReactionTypeUncheckedCreateWithoutCommentBridgeInput = {
    uuid?: string;
    description: string;
    label?: string | null;
    contentBridge?: Prisma.ContentReactionBridgeUncheckedCreateNestedManyWithoutReactionObjInput;
};
export type ReactionTypeCreateOrConnectWithoutCommentBridgeInput = {
    where: Prisma.ReactionTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReactionTypeCreateWithoutCommentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutCommentBridgeInput>;
};
export type ReactionTypeUpsertWithoutCommentBridgeInput = {
    update: Prisma.XOR<Prisma.ReactionTypeUpdateWithoutCommentBridgeInput, Prisma.ReactionTypeUncheckedUpdateWithoutCommentBridgeInput>;
    create: Prisma.XOR<Prisma.ReactionTypeCreateWithoutCommentBridgeInput, Prisma.ReactionTypeUncheckedCreateWithoutCommentBridgeInput>;
    where?: Prisma.ReactionTypeWhereInput;
};
export type ReactionTypeUpdateToOneWithWhereWithoutCommentBridgeInput = {
    where?: Prisma.ReactionTypeWhereInput;
    data: Prisma.XOR<Prisma.ReactionTypeUpdateWithoutCommentBridgeInput, Prisma.ReactionTypeUncheckedUpdateWithoutCommentBridgeInput>;
};
export type ReactionTypeUpdateWithoutCommentBridgeInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentBridge?: Prisma.ContentReactionBridgeUpdateManyWithoutReactionObjNestedInput;
};
export type ReactionTypeUncheckedUpdateWithoutCommentBridgeInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentBridge?: Prisma.ContentReactionBridgeUncheckedUpdateManyWithoutReactionObjNestedInput;
};
/**
 * Count Type ReactionTypeCountOutputType
 */
export type ReactionTypeCountOutputType = {
    commentBridge: number;
    contentBridge: number;
};
export type ReactionTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commentBridge?: boolean | ReactionTypeCountOutputTypeCountCommentBridgeArgs;
    contentBridge?: boolean | ReactionTypeCountOutputTypeCountContentBridgeArgs;
};
/**
 * ReactionTypeCountOutputType without action
 */
export type ReactionTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionTypeCountOutputType
     */
    select?: Prisma.ReactionTypeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ReactionTypeCountOutputType without action
 */
export type ReactionTypeCountOutputTypeCountCommentBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentReactionBridgeWhereInput;
};
/**
 * ReactionTypeCountOutputType without action
 */
export type ReactionTypeCountOutputTypeCountContentBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentReactionBridgeWhereInput;
};
export type ReactionTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    description?: boolean;
    label?: boolean;
    commentBridge?: boolean | Prisma.ReactionType$commentBridgeArgs<ExtArgs>;
    contentBridge?: boolean | Prisma.ReactionType$contentBridgeArgs<ExtArgs>;
    _count?: boolean | Prisma.ReactionTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reactionType"]>;
export type ReactionTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    description?: boolean;
    label?: boolean;
}, ExtArgs["result"]["reactionType"]>;
export type ReactionTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    description?: boolean;
    label?: boolean;
}, ExtArgs["result"]["reactionType"]>;
export type ReactionTypeSelectScalar = {
    uuid?: boolean;
    description?: boolean;
    label?: boolean;
};
export type ReactionTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "description" | "label", ExtArgs["result"]["reactionType"]>;
export type ReactionTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commentBridge?: boolean | Prisma.ReactionType$commentBridgeArgs<ExtArgs>;
    contentBridge?: boolean | Prisma.ReactionType$contentBridgeArgs<ExtArgs>;
    _count?: boolean | Prisma.ReactionTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReactionTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ReactionTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ReactionTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReactionType";
    objects: {
        commentBridge: Prisma.$CommentReactionBridgePayload<ExtArgs>[];
        contentBridge: Prisma.$ContentReactionBridgePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        description: string;
        label: string | null;
    }, ExtArgs["result"]["reactionType"]>;
    composites: {};
};
export type ReactionTypeGetPayload<S extends boolean | null | undefined | ReactionTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload, S>;
export type ReactionTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReactionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReactionTypeCountAggregateInputType | true;
};
export interface ReactionTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReactionType'];
        meta: {
            name: 'ReactionType';
        };
    };
    /**
     * Find zero or one ReactionType that matches the filter.
     * @param {ReactionTypeFindUniqueArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, ReactionTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ReactionType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionTypeFindUniqueOrThrowArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReactionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ReactionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeFindFirstArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, ReactionTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ReactionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeFindFirstOrThrowArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReactionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ReactionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReactionTypes
     * const reactionTypes = await prisma.reactionType.findMany()
     *
     * // Get first 10 ReactionTypes
     * const reactionTypes = await prisma.reactionType.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const reactionTypeWithUuidOnly = await prisma.reactionType.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends ReactionTypeFindManyArgs>(args?: Prisma.SelectSubset<T, ReactionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ReactionType.
     * @param {ReactionTypeCreateArgs} args - Arguments to create a ReactionType.
     * @example
     * // Create one ReactionType
     * const ReactionType = await prisma.reactionType.create({
     *   data: {
     *     // ... data to create a ReactionType
     *   }
     * })
     *
     */
    create<T extends ReactionTypeCreateArgs>(args: Prisma.SelectSubset<T, ReactionTypeCreateArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ReactionTypes.
     * @param {ReactionTypeCreateManyArgs} args - Arguments to create many ReactionTypes.
     * @example
     * // Create many ReactionTypes
     * const reactionType = await prisma.reactionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReactionTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, ReactionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ReactionTypes and returns the data saved in the database.
     * @param {ReactionTypeCreateManyAndReturnArgs} args - Arguments to create many ReactionTypes.
     * @example
     * // Create many ReactionTypes
     * const reactionType = await prisma.reactionType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ReactionTypes and only return the `uuid`
     * const reactionTypeWithUuidOnly = await prisma.reactionType.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReactionTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReactionTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ReactionType.
     * @param {ReactionTypeDeleteArgs} args - Arguments to delete one ReactionType.
     * @example
     * // Delete one ReactionType
     * const ReactionType = await prisma.reactionType.delete({
     *   where: {
     *     // ... filter to delete one ReactionType
     *   }
     * })
     *
     */
    delete<T extends ReactionTypeDeleteArgs>(args: Prisma.SelectSubset<T, ReactionTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ReactionType.
     * @param {ReactionTypeUpdateArgs} args - Arguments to update one ReactionType.
     * @example
     * // Update one ReactionType
     * const reactionType = await prisma.reactionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReactionTypeUpdateArgs>(args: Prisma.SelectSubset<T, ReactionTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ReactionTypes.
     * @param {ReactionTypeDeleteManyArgs} args - Arguments to filter ReactionTypes to delete.
     * @example
     * // Delete a few ReactionTypes
     * const { count } = await prisma.reactionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReactionTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReactionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ReactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReactionTypes
     * const reactionType = await prisma.reactionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReactionTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, ReactionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ReactionTypes and returns the data updated in the database.
     * @param {ReactionTypeUpdateManyAndReturnArgs} args - Arguments to update many ReactionTypes.
     * @example
     * // Update many ReactionTypes
     * const reactionType = await prisma.reactionType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ReactionTypes and only return the `uuid`
     * const reactionTypeWithUuidOnly = await prisma.reactionType.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReactionTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReactionTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ReactionType.
     * @param {ReactionTypeUpsertArgs} args - Arguments to update or create a ReactionType.
     * @example
     * // Update or create a ReactionType
     * const reactionType = await prisma.reactionType.upsert({
     *   create: {
     *     // ... data to create a ReactionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReactionType we want to update
     *   }
     * })
     */
    upsert<T extends ReactionTypeUpsertArgs>(args: Prisma.SelectSubset<T, ReactionTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__ReactionTypeClient<runtime.Types.Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ReactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeCountArgs} args - Arguments to filter ReactionTypes to count.
     * @example
     * // Count the number of ReactionTypes
     * const count = await prisma.reactionType.count({
     *   where: {
     *     // ... the filter for the ReactionTypes we want to count
     *   }
     * })
    **/
    count<T extends ReactionTypeCountArgs>(args?: Prisma.Subset<T, ReactionTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReactionTypeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ReactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionTypeAggregateArgs>(args: Prisma.Subset<T, ReactionTypeAggregateArgs>): Prisma.PrismaPromise<GetReactionTypeAggregateType<T>>;
    /**
     * Group by ReactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ReactionTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReactionTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: ReactionTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReactionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ReactionType model
     */
    readonly fields: ReactionTypeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ReactionType.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ReactionTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commentBridge<T extends Prisma.ReactionType$commentBridgeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReactionType$commentBridgeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentReactionBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contentBridge<T extends Prisma.ReactionType$contentBridgeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReactionType$contentBridgeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentReactionBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ReactionType model
 */
export interface ReactionTypeFieldRefs {
    readonly uuid: Prisma.FieldRef<"ReactionType", 'String'>;
    readonly description: Prisma.FieldRef<"ReactionType", 'String'>;
    readonly label: Prisma.FieldRef<"ReactionType", 'String'>;
}
/**
 * ReactionType findUnique
 */
export type ReactionTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which ReactionType to fetch.
     */
    where: Prisma.ReactionTypeWhereUniqueInput;
};
/**
 * ReactionType findUniqueOrThrow
 */
export type ReactionTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which ReactionType to fetch.
     */
    where: Prisma.ReactionTypeWhereUniqueInput;
};
/**
 * ReactionType findFirst
 */
export type ReactionTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which ReactionType to fetch.
     */
    where?: Prisma.ReactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: Prisma.ReactionTypeOrderByWithRelationInput | Prisma.ReactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReactionTypes.
     */
    cursor?: Prisma.ReactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReactionTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReactionTypes.
     */
    distinct?: Prisma.ReactionTypeScalarFieldEnum | Prisma.ReactionTypeScalarFieldEnum[];
};
/**
 * ReactionType findFirstOrThrow
 */
export type ReactionTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which ReactionType to fetch.
     */
    where?: Prisma.ReactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: Prisma.ReactionTypeOrderByWithRelationInput | Prisma.ReactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReactionTypes.
     */
    cursor?: Prisma.ReactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReactionTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReactionTypes.
     */
    distinct?: Prisma.ReactionTypeScalarFieldEnum | Prisma.ReactionTypeScalarFieldEnum[];
};
/**
 * ReactionType findMany
 */
export type ReactionTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which ReactionTypes to fetch.
     */
    where?: Prisma.ReactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: Prisma.ReactionTypeOrderByWithRelationInput | Prisma.ReactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ReactionTypes.
     */
    cursor?: Prisma.ReactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReactionTypes.
     */
    skip?: number;
    distinct?: Prisma.ReactionTypeScalarFieldEnum | Prisma.ReactionTypeScalarFieldEnum[];
};
/**
 * ReactionType create
 */
export type ReactionTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * The data needed to create a ReactionType.
     */
    data: Prisma.XOR<Prisma.ReactionTypeCreateInput, Prisma.ReactionTypeUncheckedCreateInput>;
};
/**
 * ReactionType createMany
 */
export type ReactionTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReactionTypes.
     */
    data: Prisma.ReactionTypeCreateManyInput | Prisma.ReactionTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ReactionType createManyAndReturn
 */
export type ReactionTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * The data used to create many ReactionTypes.
     */
    data: Prisma.ReactionTypeCreateManyInput | Prisma.ReactionTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ReactionType update
 */
export type ReactionTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * The data needed to update a ReactionType.
     */
    data: Prisma.XOR<Prisma.ReactionTypeUpdateInput, Prisma.ReactionTypeUncheckedUpdateInput>;
    /**
     * Choose, which ReactionType to update.
     */
    where: Prisma.ReactionTypeWhereUniqueInput;
};
/**
 * ReactionType updateMany
 */
export type ReactionTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ReactionTypes.
     */
    data: Prisma.XOR<Prisma.ReactionTypeUpdateManyMutationInput, Prisma.ReactionTypeUncheckedUpdateManyInput>;
    /**
     * Filter which ReactionTypes to update
     */
    where?: Prisma.ReactionTypeWhereInput;
    /**
     * Limit how many ReactionTypes to update.
     */
    limit?: number;
};
/**
 * ReactionType updateManyAndReturn
 */
export type ReactionTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * The data used to update ReactionTypes.
     */
    data: Prisma.XOR<Prisma.ReactionTypeUpdateManyMutationInput, Prisma.ReactionTypeUncheckedUpdateManyInput>;
    /**
     * Filter which ReactionTypes to update
     */
    where?: Prisma.ReactionTypeWhereInput;
    /**
     * Limit how many ReactionTypes to update.
     */
    limit?: number;
};
/**
 * ReactionType upsert
 */
export type ReactionTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * The filter to search for the ReactionType to update in case it exists.
     */
    where: Prisma.ReactionTypeWhereUniqueInput;
    /**
     * In case the ReactionType found by the `where` argument doesn't exist, create a new ReactionType with this data.
     */
    create: Prisma.XOR<Prisma.ReactionTypeCreateInput, Prisma.ReactionTypeUncheckedCreateInput>;
    /**
     * In case the ReactionType was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ReactionTypeUpdateInput, Prisma.ReactionTypeUncheckedUpdateInput>;
};
/**
 * ReactionType delete
 */
export type ReactionTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
    /**
     * Filter which ReactionType to delete.
     */
    where: Prisma.ReactionTypeWhereUniqueInput;
};
/**
 * ReactionType deleteMany
 */
export type ReactionTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionTypes to delete
     */
    where?: Prisma.ReactionTypeWhereInput;
    /**
     * Limit how many ReactionTypes to delete.
     */
    limit?: number;
};
/**
 * ReactionType.commentBridge
 */
export type ReactionType$commentBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CommentReactionBridgeWhereInput;
    orderBy?: Prisma.CommentReactionBridgeOrderByWithRelationInput | Prisma.CommentReactionBridgeOrderByWithRelationInput[];
    cursor?: Prisma.CommentReactionBridgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentReactionBridgeScalarFieldEnum | Prisma.CommentReactionBridgeScalarFieldEnum[];
};
/**
 * ReactionType.contentBridge
 */
export type ReactionType$contentBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ReactionType without action
 */
export type ReactionTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: Prisma.ReactionTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: Prisma.ReactionTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReactionTypeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ReactionType.d.ts.map