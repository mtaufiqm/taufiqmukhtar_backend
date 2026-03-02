import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MessageType
 *
 */
export type MessageTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$MessageTypePayload>;
export type AggregateMessageType = {
    _count: MessageTypeCountAggregateOutputType | null;
    _min: MessageTypeMinAggregateOutputType | null;
    _max: MessageTypeMaxAggregateOutputType | null;
};
export type MessageTypeMinAggregateOutputType = {
    uuid: string | null;
    description: string | null;
};
export type MessageTypeMaxAggregateOutputType = {
    uuid: string | null;
    description: string | null;
};
export type MessageTypeCountAggregateOutputType = {
    uuid: number;
    description: number;
    _all: number;
};
export type MessageTypeMinAggregateInputType = {
    uuid?: true;
    description?: true;
};
export type MessageTypeMaxAggregateInputType = {
    uuid?: true;
    description?: true;
};
export type MessageTypeCountAggregateInputType = {
    uuid?: true;
    description?: true;
    _all?: true;
};
export type MessageTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageType to aggregate.
     */
    where?: Prisma.MessageTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageTypes to fetch.
     */
    orderBy?: Prisma.MessageTypeOrderByWithRelationInput | Prisma.MessageTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MessageTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MessageTypes
    **/
    _count?: true | MessageTypeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MessageTypeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MessageTypeMaxAggregateInputType;
};
export type GetMessageTypeAggregateType<T extends MessageTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateMessageType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessageType[P]> : Prisma.GetScalarType<T[P], AggregateMessageType[P]>;
};
export type MessageTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageTypeWhereInput;
    orderBy?: Prisma.MessageTypeOrderByWithAggregationInput | Prisma.MessageTypeOrderByWithAggregationInput[];
    by: Prisma.MessageTypeScalarFieldEnum[] | Prisma.MessageTypeScalarFieldEnum;
    having?: Prisma.MessageTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageTypeCountAggregateInputType | true;
    _min?: MessageTypeMinAggregateInputType;
    _max?: MessageTypeMaxAggregateInputType;
};
export type MessageTypeGroupByOutputType = {
    uuid: string;
    description: string;
    _count: MessageTypeCountAggregateOutputType | null;
    _min: MessageTypeMinAggregateOutputType | null;
    _max: MessageTypeMaxAggregateOutputType | null;
};
type GetMessageTypeGroupByPayload<T extends MessageTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageTypeGroupByOutputType[P]>;
}>>;
export type MessageTypeWhereInput = {
    AND?: Prisma.MessageTypeWhereInput | Prisma.MessageTypeWhereInput[];
    OR?: Prisma.MessageTypeWhereInput[];
    NOT?: Prisma.MessageTypeWhereInput | Prisma.MessageTypeWhereInput[];
    uuid?: Prisma.StringFilter<"MessageType"> | string;
    description?: Prisma.StringFilter<"MessageType"> | string;
    messageBridge?: Prisma.MessageListRelationFilter;
};
export type MessageTypeOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    messageBridge?: Prisma.MessageOrderByRelationAggregateInput;
};
export type MessageTypeWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    description?: string;
    AND?: Prisma.MessageTypeWhereInput | Prisma.MessageTypeWhereInput[];
    OR?: Prisma.MessageTypeWhereInput[];
    NOT?: Prisma.MessageTypeWhereInput | Prisma.MessageTypeWhereInput[];
    messageBridge?: Prisma.MessageListRelationFilter;
}, "uuid" | "description">;
export type MessageTypeOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    _count?: Prisma.MessageTypeCountOrderByAggregateInput;
    _max?: Prisma.MessageTypeMaxOrderByAggregateInput;
    _min?: Prisma.MessageTypeMinOrderByAggregateInput;
};
export type MessageTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageTypeScalarWhereWithAggregatesInput | Prisma.MessageTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageTypeScalarWhereWithAggregatesInput | Prisma.MessageTypeScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"MessageType"> | string;
    description?: Prisma.StringWithAggregatesFilter<"MessageType"> | string;
};
export type MessageTypeCreateInput = {
    uuid?: string;
    description: string;
    messageBridge?: Prisma.MessageCreateNestedManyWithoutTypeObjInput;
};
export type MessageTypeUncheckedCreateInput = {
    uuid?: string;
    description: string;
    messageBridge?: Prisma.MessageUncheckedCreateNestedManyWithoutTypeObjInput;
};
export type MessageTypeUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBridge?: Prisma.MessageUpdateManyWithoutTypeObjNestedInput;
};
export type MessageTypeUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBridge?: Prisma.MessageUncheckedUpdateManyWithoutTypeObjNestedInput;
};
export type MessageTypeCreateManyInput = {
    uuid?: string;
    description: string;
};
export type MessageTypeUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MessageTypeUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MessageTypeCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type MessageTypeMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type MessageTypeMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type MessageTypeScalarRelationFilter = {
    is?: Prisma.MessageTypeWhereInput;
    isNot?: Prisma.MessageTypeWhereInput;
};
export type MessageTypeCreateNestedOneWithoutMessageBridgeInput = {
    create?: Prisma.XOR<Prisma.MessageTypeCreateWithoutMessageBridgeInput, Prisma.MessageTypeUncheckedCreateWithoutMessageBridgeInput>;
    connectOrCreate?: Prisma.MessageTypeCreateOrConnectWithoutMessageBridgeInput;
    connect?: Prisma.MessageTypeWhereUniqueInput;
};
export type MessageTypeUpdateOneRequiredWithoutMessageBridgeNestedInput = {
    create?: Prisma.XOR<Prisma.MessageTypeCreateWithoutMessageBridgeInput, Prisma.MessageTypeUncheckedCreateWithoutMessageBridgeInput>;
    connectOrCreate?: Prisma.MessageTypeCreateOrConnectWithoutMessageBridgeInput;
    upsert?: Prisma.MessageTypeUpsertWithoutMessageBridgeInput;
    connect?: Prisma.MessageTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MessageTypeUpdateToOneWithWhereWithoutMessageBridgeInput, Prisma.MessageTypeUpdateWithoutMessageBridgeInput>, Prisma.MessageTypeUncheckedUpdateWithoutMessageBridgeInput>;
};
export type MessageTypeCreateWithoutMessageBridgeInput = {
    uuid?: string;
    description: string;
};
export type MessageTypeUncheckedCreateWithoutMessageBridgeInput = {
    uuid?: string;
    description: string;
};
export type MessageTypeCreateOrConnectWithoutMessageBridgeInput = {
    where: Prisma.MessageTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageTypeCreateWithoutMessageBridgeInput, Prisma.MessageTypeUncheckedCreateWithoutMessageBridgeInput>;
};
export type MessageTypeUpsertWithoutMessageBridgeInput = {
    update: Prisma.XOR<Prisma.MessageTypeUpdateWithoutMessageBridgeInput, Prisma.MessageTypeUncheckedUpdateWithoutMessageBridgeInput>;
    create: Prisma.XOR<Prisma.MessageTypeCreateWithoutMessageBridgeInput, Prisma.MessageTypeUncheckedCreateWithoutMessageBridgeInput>;
    where?: Prisma.MessageTypeWhereInput;
};
export type MessageTypeUpdateToOneWithWhereWithoutMessageBridgeInput = {
    where?: Prisma.MessageTypeWhereInput;
    data: Prisma.XOR<Prisma.MessageTypeUpdateWithoutMessageBridgeInput, Prisma.MessageTypeUncheckedUpdateWithoutMessageBridgeInput>;
};
export type MessageTypeUpdateWithoutMessageBridgeInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MessageTypeUncheckedUpdateWithoutMessageBridgeInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type MessageTypeCountOutputType
 */
export type MessageTypeCountOutputType = {
    messageBridge: number;
};
export type MessageTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messageBridge?: boolean | MessageTypeCountOutputTypeCountMessageBridgeArgs;
};
/**
 * MessageTypeCountOutputType without action
 */
export type MessageTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTypeCountOutputType
     */
    select?: Prisma.MessageTypeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MessageTypeCountOutputType without action
 */
export type MessageTypeCountOutputTypeCountMessageBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type MessageTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    description?: boolean;
    messageBridge?: boolean | Prisma.MessageType$messageBridgeArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageType"]>;
export type MessageTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    description?: boolean;
}, ExtArgs["result"]["messageType"]>;
export type MessageTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    description?: boolean;
}, ExtArgs["result"]["messageType"]>;
export type MessageTypeSelectScalar = {
    uuid?: boolean;
    description?: boolean;
};
export type MessageTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "description", ExtArgs["result"]["messageType"]>;
export type MessageTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messageBridge?: boolean | Prisma.MessageType$messageBridgeArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MessageTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MessageTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MessageTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MessageType";
    objects: {
        messageBridge: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        description: string;
    }, ExtArgs["result"]["messageType"]>;
    composites: {};
};
export type MessageTypeGetPayload<S extends boolean | null | undefined | MessageTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessageTypePayload, S>;
export type MessageTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageTypeCountAggregateInputType | true;
};
export interface MessageTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MessageType'];
        meta: {
            name: 'MessageType';
        };
    };
    /**
     * Find zero or one MessageType that matches the filter.
     * @param {MessageTypeFindUniqueArgs} args - Arguments to find a MessageType
     * @example
     * // Get one MessageType
     * const messageType = await prisma.messageType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MessageType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageTypeFindUniqueOrThrowArgs} args - Arguments to find a MessageType
     * @example
     * // Get one MessageType
     * const messageType = await prisma.messageType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MessageType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTypeFindFirstArgs} args - Arguments to find a MessageType
     * @example
     * // Get one MessageType
     * const messageType = await prisma.messageType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MessageType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTypeFindFirstOrThrowArgs} args - Arguments to find a MessageType
     * @example
     * // Get one MessageType
     * const messageType = await prisma.messageType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MessageTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageTypes
     * const messageTypes = await prisma.messageType.findMany()
     *
     * // Get first 10 MessageTypes
     * const messageTypes = await prisma.messageType.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const messageTypeWithUuidOnly = await prisma.messageType.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends MessageTypeFindManyArgs>(args?: Prisma.SelectSubset<T, MessageTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MessageType.
     * @param {MessageTypeCreateArgs} args - Arguments to create a MessageType.
     * @example
     * // Create one MessageType
     * const MessageType = await prisma.messageType.create({
     *   data: {
     *     // ... data to create a MessageType
     *   }
     * })
     *
     */
    create<T extends MessageTypeCreateArgs>(args: Prisma.SelectSubset<T, MessageTypeCreateArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MessageTypes.
     * @param {MessageTypeCreateManyArgs} args - Arguments to create many MessageTypes.
     * @example
     * // Create many MessageTypes
     * const messageType = await prisma.messageType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MessageTypes and returns the data saved in the database.
     * @param {MessageTypeCreateManyAndReturnArgs} args - Arguments to create many MessageTypes.
     * @example
     * // Create many MessageTypes
     * const messageType = await prisma.messageType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MessageTypes and only return the `uuid`
     * const messageTypeWithUuidOnly = await prisma.messageType.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessageTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MessageType.
     * @param {MessageTypeDeleteArgs} args - Arguments to delete one MessageType.
     * @example
     * // Delete one MessageType
     * const MessageType = await prisma.messageType.delete({
     *   where: {
     *     // ... filter to delete one MessageType
     *   }
     * })
     *
     */
    delete<T extends MessageTypeDeleteArgs>(args: Prisma.SelectSubset<T, MessageTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MessageType.
     * @param {MessageTypeUpdateArgs} args - Arguments to update one MessageType.
     * @example
     * // Update one MessageType
     * const messageType = await prisma.messageType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessageTypeUpdateArgs>(args: Prisma.SelectSubset<T, MessageTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MessageTypes.
     * @param {MessageTypeDeleteManyArgs} args - Arguments to filter MessageTypes to delete.
     * @example
     * // Delete a few MessageTypes
     * const { count } = await prisma.messageType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessageTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MessageTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageTypes
     * const messageType = await prisma.messageType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessageTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MessageTypes and returns the data updated in the database.
     * @param {MessageTypeUpdateManyAndReturnArgs} args - Arguments to update many MessageTypes.
     * @example
     * // Update many MessageTypes
     * const messageType = await prisma.messageType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MessageTypes and only return the `uuid`
     * const messageTypeWithUuidOnly = await prisma.messageType.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MessageType.
     * @param {MessageTypeUpsertArgs} args - Arguments to update or create a MessageType.
     * @example
     * // Update or create a MessageType
     * const messageType = await prisma.messageType.upsert({
     *   create: {
     *     // ... data to create a MessageType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageType we want to update
     *   }
     * })
     */
    upsert<T extends MessageTypeUpsertArgs>(args: Prisma.SelectSubset<T, MessageTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageTypeClient<runtime.Types.Result.GetResult<Prisma.$MessageTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MessageTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTypeCountArgs} args - Arguments to filter MessageTypes to count.
     * @example
     * // Count the number of MessageTypes
     * const count = await prisma.messageType.count({
     *   where: {
     *     // ... the filter for the MessageTypes we want to count
     *   }
     * })
    **/
    count<T extends MessageTypeCountArgs>(args?: Prisma.Subset<T, MessageTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageTypeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MessageType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageTypeAggregateArgs>(args: Prisma.Subset<T, MessageTypeAggregateArgs>): Prisma.PrismaPromise<GetMessageTypeAggregateType<T>>;
    /**
     * Group by MessageType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTypeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MessageTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MessageType model
     */
    readonly fields: MessageTypeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MessageType.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MessageTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    messageBridge<T extends Prisma.MessageType$messageBridgeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MessageType$messageBridgeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MessageType model
 */
export interface MessageTypeFieldRefs {
    readonly uuid: Prisma.FieldRef<"MessageType", 'String'>;
    readonly description: Prisma.FieldRef<"MessageType", 'String'>;
}
/**
 * MessageType findUnique
 */
export type MessageTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * Filter, which MessageType to fetch.
     */
    where: Prisma.MessageTypeWhereUniqueInput;
};
/**
 * MessageType findUniqueOrThrow
 */
export type MessageTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * Filter, which MessageType to fetch.
     */
    where: Prisma.MessageTypeWhereUniqueInput;
};
/**
 * MessageType findFirst
 */
export type MessageTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * Filter, which MessageType to fetch.
     */
    where?: Prisma.MessageTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageTypes to fetch.
     */
    orderBy?: Prisma.MessageTypeOrderByWithRelationInput | Prisma.MessageTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MessageTypes.
     */
    cursor?: Prisma.MessageTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MessageTypes.
     */
    distinct?: Prisma.MessageTypeScalarFieldEnum | Prisma.MessageTypeScalarFieldEnum[];
};
/**
 * MessageType findFirstOrThrow
 */
export type MessageTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * Filter, which MessageType to fetch.
     */
    where?: Prisma.MessageTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageTypes to fetch.
     */
    orderBy?: Prisma.MessageTypeOrderByWithRelationInput | Prisma.MessageTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MessageTypes.
     */
    cursor?: Prisma.MessageTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MessageTypes.
     */
    distinct?: Prisma.MessageTypeScalarFieldEnum | Prisma.MessageTypeScalarFieldEnum[];
};
/**
 * MessageType findMany
 */
export type MessageTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * Filter, which MessageTypes to fetch.
     */
    where?: Prisma.MessageTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MessageTypes to fetch.
     */
    orderBy?: Prisma.MessageTypeOrderByWithRelationInput | Prisma.MessageTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MessageTypes.
     */
    cursor?: Prisma.MessageTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MessageTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MessageTypes.
     */
    skip?: number;
    distinct?: Prisma.MessageTypeScalarFieldEnum | Prisma.MessageTypeScalarFieldEnum[];
};
/**
 * MessageType create
 */
export type MessageTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * The data needed to create a MessageType.
     */
    data: Prisma.XOR<Prisma.MessageTypeCreateInput, Prisma.MessageTypeUncheckedCreateInput>;
};
/**
 * MessageType createMany
 */
export type MessageTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageTypes.
     */
    data: Prisma.MessageTypeCreateManyInput | Prisma.MessageTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MessageType createManyAndReturn
 */
export type MessageTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * The data used to create many MessageTypes.
     */
    data: Prisma.MessageTypeCreateManyInput | Prisma.MessageTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MessageType update
 */
export type MessageTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * The data needed to update a MessageType.
     */
    data: Prisma.XOR<Prisma.MessageTypeUpdateInput, Prisma.MessageTypeUncheckedUpdateInput>;
    /**
     * Choose, which MessageType to update.
     */
    where: Prisma.MessageTypeWhereUniqueInput;
};
/**
 * MessageType updateMany
 */
export type MessageTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageTypes.
     */
    data: Prisma.XOR<Prisma.MessageTypeUpdateManyMutationInput, Prisma.MessageTypeUncheckedUpdateManyInput>;
    /**
     * Filter which MessageTypes to update
     */
    where?: Prisma.MessageTypeWhereInput;
    /**
     * Limit how many MessageTypes to update.
     */
    limit?: number;
};
/**
 * MessageType updateManyAndReturn
 */
export type MessageTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * The data used to update MessageTypes.
     */
    data: Prisma.XOR<Prisma.MessageTypeUpdateManyMutationInput, Prisma.MessageTypeUncheckedUpdateManyInput>;
    /**
     * Filter which MessageTypes to update
     */
    where?: Prisma.MessageTypeWhereInput;
    /**
     * Limit how many MessageTypes to update.
     */
    limit?: number;
};
/**
 * MessageType upsert
 */
export type MessageTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * The filter to search for the MessageType to update in case it exists.
     */
    where: Prisma.MessageTypeWhereUniqueInput;
    /**
     * In case the MessageType found by the `where` argument doesn't exist, create a new MessageType with this data.
     */
    create: Prisma.XOR<Prisma.MessageTypeCreateInput, Prisma.MessageTypeUncheckedCreateInput>;
    /**
     * In case the MessageType was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MessageTypeUpdateInput, Prisma.MessageTypeUncheckedUpdateInput>;
};
/**
 * MessageType delete
 */
export type MessageTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
    /**
     * Filter which MessageType to delete.
     */
    where: Prisma.MessageTypeWhereUniqueInput;
};
/**
 * MessageType deleteMany
 */
export type MessageTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTypes to delete
     */
    where?: Prisma.MessageTypeWhereInput;
    /**
     * Limit how many MessageTypes to delete.
     */
    limit?: number;
};
/**
 * MessageType.messageBridge
 */
export type MessageType$messageBridgeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: Prisma.MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
/**
 * MessageType without action
 */
export type MessageTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageType
     */
    select?: Prisma.MessageTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MessageType
     */
    omit?: Prisma.MessageTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageTypeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MessageType.d.ts.map