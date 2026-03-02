import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model RolesPermissionsBridge
 *
 */
export type RolesPermissionsBridgeModel = runtime.Types.Result.DefaultSelection<Prisma.$RolesPermissionsBridgePayload>;
export type AggregateRolesPermissionsBridge = {
    _count: RolesPermissionsBridgeCountAggregateOutputType | null;
    _min: RolesPermissionsBridgeMinAggregateOutputType | null;
    _max: RolesPermissionsBridgeMaxAggregateOutputType | null;
};
export type RolesPermissionsBridgeMinAggregateOutputType = {
    roles: string | null;
    permission: string | null;
};
export type RolesPermissionsBridgeMaxAggregateOutputType = {
    roles: string | null;
    permission: string | null;
};
export type RolesPermissionsBridgeCountAggregateOutputType = {
    roles: number;
    permission: number;
    _all: number;
};
export type RolesPermissionsBridgeMinAggregateInputType = {
    roles?: true;
    permission?: true;
};
export type RolesPermissionsBridgeMaxAggregateInputType = {
    roles?: true;
    permission?: true;
};
export type RolesPermissionsBridgeCountAggregateInputType = {
    roles?: true;
    permission?: true;
    _all?: true;
};
export type RolesPermissionsBridgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RolesPermissionsBridge to aggregate.
     */
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolesPermissionsBridges to fetch.
     */
    orderBy?: Prisma.RolesPermissionsBridgeOrderByWithRelationInput | Prisma.RolesPermissionsBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RolesPermissionsBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolesPermissionsBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolesPermissionsBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RolesPermissionsBridges
    **/
    _count?: true | RolesPermissionsBridgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RolesPermissionsBridgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RolesPermissionsBridgeMaxAggregateInputType;
};
export type GetRolesPermissionsBridgeAggregateType<T extends RolesPermissionsBridgeAggregateArgs> = {
    [P in keyof T & keyof AggregateRolesPermissionsBridge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRolesPermissionsBridge[P]> : Prisma.GetScalarType<T[P], AggregateRolesPermissionsBridge[P]>;
};
export type RolesPermissionsBridgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    orderBy?: Prisma.RolesPermissionsBridgeOrderByWithAggregationInput | Prisma.RolesPermissionsBridgeOrderByWithAggregationInput[];
    by: Prisma.RolesPermissionsBridgeScalarFieldEnum[] | Prisma.RolesPermissionsBridgeScalarFieldEnum;
    having?: Prisma.RolesPermissionsBridgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolesPermissionsBridgeCountAggregateInputType | true;
    _min?: RolesPermissionsBridgeMinAggregateInputType;
    _max?: RolesPermissionsBridgeMaxAggregateInputType;
};
export type RolesPermissionsBridgeGroupByOutputType = {
    roles: string;
    permission: string;
    _count: RolesPermissionsBridgeCountAggregateOutputType | null;
    _min: RolesPermissionsBridgeMinAggregateOutputType | null;
    _max: RolesPermissionsBridgeMaxAggregateOutputType | null;
};
type GetRolesPermissionsBridgeGroupByPayload<T extends RolesPermissionsBridgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolesPermissionsBridgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolesPermissionsBridgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolesPermissionsBridgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolesPermissionsBridgeGroupByOutputType[P]>;
}>>;
export type RolesPermissionsBridgeWhereInput = {
    AND?: Prisma.RolesPermissionsBridgeWhereInput | Prisma.RolesPermissionsBridgeWhereInput[];
    OR?: Prisma.RolesPermissionsBridgeWhereInput[];
    NOT?: Prisma.RolesPermissionsBridgeWhereInput | Prisma.RolesPermissionsBridgeWhereInput[];
    roles?: Prisma.StringFilter<"RolesPermissionsBridge"> | string;
    permission?: Prisma.StringFilter<"RolesPermissionsBridge"> | string;
};
export type RolesPermissionsBridgeOrderByWithRelationInput = {
    roles?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
};
export type RolesPermissionsBridgeWhereUniqueInput = Prisma.AtLeast<{
    roles_permission?: Prisma.RolesPermissionsBridgeRolesPermissionCompoundUniqueInput;
    AND?: Prisma.RolesPermissionsBridgeWhereInput | Prisma.RolesPermissionsBridgeWhereInput[];
    OR?: Prisma.RolesPermissionsBridgeWhereInput[];
    NOT?: Prisma.RolesPermissionsBridgeWhereInput | Prisma.RolesPermissionsBridgeWhereInput[];
    roles?: Prisma.StringFilter<"RolesPermissionsBridge"> | string;
    permission?: Prisma.StringFilter<"RolesPermissionsBridge"> | string;
}, "roles_permission" | "roles_permission">;
export type RolesPermissionsBridgeOrderByWithAggregationInput = {
    roles?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
    _count?: Prisma.RolesPermissionsBridgeCountOrderByAggregateInput;
    _max?: Prisma.RolesPermissionsBridgeMaxOrderByAggregateInput;
    _min?: Prisma.RolesPermissionsBridgeMinOrderByAggregateInput;
};
export type RolesPermissionsBridgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.RolesPermissionsBridgeScalarWhereWithAggregatesInput | Prisma.RolesPermissionsBridgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.RolesPermissionsBridgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RolesPermissionsBridgeScalarWhereWithAggregatesInput | Prisma.RolesPermissionsBridgeScalarWhereWithAggregatesInput[];
    roles?: Prisma.StringWithAggregatesFilter<"RolesPermissionsBridge"> | string;
    permission?: Prisma.StringWithAggregatesFilter<"RolesPermissionsBridge"> | string;
};
export type RolesPermissionsBridgeCreateInput = {
    roles: string;
    permission: string;
};
export type RolesPermissionsBridgeUncheckedCreateInput = {
    roles: string;
    permission: string;
};
export type RolesPermissionsBridgeUpdateInput = {
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesPermissionsBridgeUncheckedUpdateInput = {
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesPermissionsBridgeCreateManyInput = {
    roles: string;
    permission: string;
};
export type RolesPermissionsBridgeUpdateManyMutationInput = {
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesPermissionsBridgeUncheckedUpdateManyInput = {
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesPermissionsBridgeRolesPermissionCompoundUniqueInput = {
    roles: string;
    permission: string;
};
export type RolesPermissionsBridgeCountOrderByAggregateInput = {
    roles?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
};
export type RolesPermissionsBridgeMaxOrderByAggregateInput = {
    roles?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
};
export type RolesPermissionsBridgeMinOrderByAggregateInput = {
    roles?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
};
export type RolesPermissionsBridgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roles?: boolean;
    permission?: boolean;
}, ExtArgs["result"]["rolesPermissionsBridge"]>;
export type RolesPermissionsBridgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roles?: boolean;
    permission?: boolean;
}, ExtArgs["result"]["rolesPermissionsBridge"]>;
export type RolesPermissionsBridgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roles?: boolean;
    permission?: boolean;
}, ExtArgs["result"]["rolesPermissionsBridge"]>;
export type RolesPermissionsBridgeSelectScalar = {
    roles?: boolean;
    permission?: boolean;
};
export type RolesPermissionsBridgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"roles" | "permission", ExtArgs["result"]["rolesPermissionsBridge"]>;
export type $RolesPermissionsBridgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RolesPermissionsBridge";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        roles: string;
        permission: string;
    }, ExtArgs["result"]["rolesPermissionsBridge"]>;
    composites: {};
};
export type RolesPermissionsBridgeGetPayload<S extends boolean | null | undefined | RolesPermissionsBridgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload, S>;
export type RolesPermissionsBridgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RolesPermissionsBridgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolesPermissionsBridgeCountAggregateInputType | true;
};
export interface RolesPermissionsBridgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RolesPermissionsBridge'];
        meta: {
            name: 'RolesPermissionsBridge';
        };
    };
    /**
     * Find zero or one RolesPermissionsBridge that matches the filter.
     * @param {RolesPermissionsBridgeFindUniqueArgs} args - Arguments to find a RolesPermissionsBridge
     * @example
     * // Get one RolesPermissionsBridge
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesPermissionsBridgeFindUniqueArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RolesPermissionsBridge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesPermissionsBridgeFindUniqueOrThrowArgs} args - Arguments to find a RolesPermissionsBridge
     * @example
     * // Get one RolesPermissionsBridge
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesPermissionsBridgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RolesPermissionsBridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesPermissionsBridgeFindFirstArgs} args - Arguments to find a RolesPermissionsBridge
     * @example
     * // Get one RolesPermissionsBridge
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesPermissionsBridgeFindFirstArgs>(args?: Prisma.SelectSubset<T, RolesPermissionsBridgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RolesPermissionsBridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesPermissionsBridgeFindFirstOrThrowArgs} args - Arguments to find a RolesPermissionsBridge
     * @example
     * // Get one RolesPermissionsBridge
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesPermissionsBridgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RolesPermissionsBridgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RolesPermissionsBridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesPermissionsBridgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolesPermissionsBridges
     * const rolesPermissionsBridges = await prisma.rolesPermissionsBridge.findMany()
     *
     * // Get first 10 RolesPermissionsBridges
     * const rolesPermissionsBridges = await prisma.rolesPermissionsBridge.findMany({ take: 10 })
     *
     * // Only select the `roles`
     * const rolesPermissionsBridgeWithRolesOnly = await prisma.rolesPermissionsBridge.findMany({ select: { roles: true } })
     *
     */
    findMany<T extends RolesPermissionsBridgeFindManyArgs>(args?: Prisma.SelectSubset<T, RolesPermissionsBridgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RolesPermissionsBridge.
     * @param {RolesPermissionsBridgeCreateArgs} args - Arguments to create a RolesPermissionsBridge.
     * @example
     * // Create one RolesPermissionsBridge
     * const RolesPermissionsBridge = await prisma.rolesPermissionsBridge.create({
     *   data: {
     *     // ... data to create a RolesPermissionsBridge
     *   }
     * })
     *
     */
    create<T extends RolesPermissionsBridgeCreateArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeCreateArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RolesPermissionsBridges.
     * @param {RolesPermissionsBridgeCreateManyArgs} args - Arguments to create many RolesPermissionsBridges.
     * @example
     * // Create many RolesPermissionsBridges
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RolesPermissionsBridgeCreateManyArgs>(args?: Prisma.SelectSubset<T, RolesPermissionsBridgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RolesPermissionsBridges and returns the data saved in the database.
     * @param {RolesPermissionsBridgeCreateManyAndReturnArgs} args - Arguments to create many RolesPermissionsBridges.
     * @example
     * // Create many RolesPermissionsBridges
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RolesPermissionsBridges and only return the `roles`
     * const rolesPermissionsBridgeWithRolesOnly = await prisma.rolesPermissionsBridge.createManyAndReturn({
     *   select: { roles: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RolesPermissionsBridgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RolesPermissionsBridgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RolesPermissionsBridge.
     * @param {RolesPermissionsBridgeDeleteArgs} args - Arguments to delete one RolesPermissionsBridge.
     * @example
     * // Delete one RolesPermissionsBridge
     * const RolesPermissionsBridge = await prisma.rolesPermissionsBridge.delete({
     *   where: {
     *     // ... filter to delete one RolesPermissionsBridge
     *   }
     * })
     *
     */
    delete<T extends RolesPermissionsBridgeDeleteArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeDeleteArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RolesPermissionsBridge.
     * @param {RolesPermissionsBridgeUpdateArgs} args - Arguments to update one RolesPermissionsBridge.
     * @example
     * // Update one RolesPermissionsBridge
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RolesPermissionsBridgeUpdateArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeUpdateArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RolesPermissionsBridges.
     * @param {RolesPermissionsBridgeDeleteManyArgs} args - Arguments to filter RolesPermissionsBridges to delete.
     * @example
     * // Delete a few RolesPermissionsBridges
     * const { count } = await prisma.rolesPermissionsBridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RolesPermissionsBridgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, RolesPermissionsBridgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RolesPermissionsBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesPermissionsBridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolesPermissionsBridges
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RolesPermissionsBridgeUpdateManyArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RolesPermissionsBridges and returns the data updated in the database.
     * @param {RolesPermissionsBridgeUpdateManyAndReturnArgs} args - Arguments to update many RolesPermissionsBridges.
     * @example
     * // Update many RolesPermissionsBridges
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RolesPermissionsBridges and only return the `roles`
     * const rolesPermissionsBridgeWithRolesOnly = await prisma.rolesPermissionsBridge.updateManyAndReturn({
     *   select: { roles: true },
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
    updateManyAndReturn<T extends RolesPermissionsBridgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RolesPermissionsBridge.
     * @param {RolesPermissionsBridgeUpsertArgs} args - Arguments to update or create a RolesPermissionsBridge.
     * @example
     * // Update or create a RolesPermissionsBridge
     * const rolesPermissionsBridge = await prisma.rolesPermissionsBridge.upsert({
     *   create: {
     *     // ... data to create a RolesPermissionsBridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolesPermissionsBridge we want to update
     *   }
     * })
     */
    upsert<T extends RolesPermissionsBridgeUpsertArgs>(args: Prisma.SelectSubset<T, RolesPermissionsBridgeUpsertArgs<ExtArgs>>): Prisma.Prisma__RolesPermissionsBridgeClient<runtime.Types.Result.GetResult<Prisma.$RolesPermissionsBridgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RolesPermissionsBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesPermissionsBridgeCountArgs} args - Arguments to filter RolesPermissionsBridges to count.
     * @example
     * // Count the number of RolesPermissionsBridges
     * const count = await prisma.rolesPermissionsBridge.count({
     *   where: {
     *     // ... the filter for the RolesPermissionsBridges we want to count
     *   }
     * })
    **/
    count<T extends RolesPermissionsBridgeCountArgs>(args?: Prisma.Subset<T, RolesPermissionsBridgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolesPermissionsBridgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RolesPermissionsBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesPermissionsBridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesPermissionsBridgeAggregateArgs>(args: Prisma.Subset<T, RolesPermissionsBridgeAggregateArgs>): Prisma.PrismaPromise<GetRolesPermissionsBridgeAggregateType<T>>;
    /**
     * Group by RolesPermissionsBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesPermissionsBridgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RolesPermissionsBridgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RolesPermissionsBridgeGroupByArgs['orderBy'];
    } : {
        orderBy?: RolesPermissionsBridgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RolesPermissionsBridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesPermissionsBridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RolesPermissionsBridge model
     */
    readonly fields: RolesPermissionsBridgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RolesPermissionsBridge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RolesPermissionsBridgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the RolesPermissionsBridge model
 */
export interface RolesPermissionsBridgeFieldRefs {
    readonly roles: Prisma.FieldRef<"RolesPermissionsBridge", 'String'>;
    readonly permission: Prisma.FieldRef<"RolesPermissionsBridge", 'String'>;
}
/**
 * RolesPermissionsBridge findUnique
 */
export type RolesPermissionsBridgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * Filter, which RolesPermissionsBridge to fetch.
     */
    where: Prisma.RolesPermissionsBridgeWhereUniqueInput;
};
/**
 * RolesPermissionsBridge findUniqueOrThrow
 */
export type RolesPermissionsBridgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * Filter, which RolesPermissionsBridge to fetch.
     */
    where: Prisma.RolesPermissionsBridgeWhereUniqueInput;
};
/**
 * RolesPermissionsBridge findFirst
 */
export type RolesPermissionsBridgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * Filter, which RolesPermissionsBridge to fetch.
     */
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolesPermissionsBridges to fetch.
     */
    orderBy?: Prisma.RolesPermissionsBridgeOrderByWithRelationInput | Prisma.RolesPermissionsBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RolesPermissionsBridges.
     */
    cursor?: Prisma.RolesPermissionsBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolesPermissionsBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolesPermissionsBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RolesPermissionsBridges.
     */
    distinct?: Prisma.RolesPermissionsBridgeScalarFieldEnum | Prisma.RolesPermissionsBridgeScalarFieldEnum[];
};
/**
 * RolesPermissionsBridge findFirstOrThrow
 */
export type RolesPermissionsBridgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * Filter, which RolesPermissionsBridge to fetch.
     */
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolesPermissionsBridges to fetch.
     */
    orderBy?: Prisma.RolesPermissionsBridgeOrderByWithRelationInput | Prisma.RolesPermissionsBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RolesPermissionsBridges.
     */
    cursor?: Prisma.RolesPermissionsBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolesPermissionsBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolesPermissionsBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RolesPermissionsBridges.
     */
    distinct?: Prisma.RolesPermissionsBridgeScalarFieldEnum | Prisma.RolesPermissionsBridgeScalarFieldEnum[];
};
/**
 * RolesPermissionsBridge findMany
 */
export type RolesPermissionsBridgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * Filter, which RolesPermissionsBridges to fetch.
     */
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolesPermissionsBridges to fetch.
     */
    orderBy?: Prisma.RolesPermissionsBridgeOrderByWithRelationInput | Prisma.RolesPermissionsBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RolesPermissionsBridges.
     */
    cursor?: Prisma.RolesPermissionsBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolesPermissionsBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolesPermissionsBridges.
     */
    skip?: number;
    distinct?: Prisma.RolesPermissionsBridgeScalarFieldEnum | Prisma.RolesPermissionsBridgeScalarFieldEnum[];
};
/**
 * RolesPermissionsBridge create
 */
export type RolesPermissionsBridgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * The data needed to create a RolesPermissionsBridge.
     */
    data: Prisma.XOR<Prisma.RolesPermissionsBridgeCreateInput, Prisma.RolesPermissionsBridgeUncheckedCreateInput>;
};
/**
 * RolesPermissionsBridge createMany
 */
export type RolesPermissionsBridgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolesPermissionsBridges.
     */
    data: Prisma.RolesPermissionsBridgeCreateManyInput | Prisma.RolesPermissionsBridgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RolesPermissionsBridge createManyAndReturn
 */
export type RolesPermissionsBridgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * The data used to create many RolesPermissionsBridges.
     */
    data: Prisma.RolesPermissionsBridgeCreateManyInput | Prisma.RolesPermissionsBridgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RolesPermissionsBridge update
 */
export type RolesPermissionsBridgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * The data needed to update a RolesPermissionsBridge.
     */
    data: Prisma.XOR<Prisma.RolesPermissionsBridgeUpdateInput, Prisma.RolesPermissionsBridgeUncheckedUpdateInput>;
    /**
     * Choose, which RolesPermissionsBridge to update.
     */
    where: Prisma.RolesPermissionsBridgeWhereUniqueInput;
};
/**
 * RolesPermissionsBridge updateMany
 */
export type RolesPermissionsBridgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RolesPermissionsBridges.
     */
    data: Prisma.XOR<Prisma.RolesPermissionsBridgeUpdateManyMutationInput, Prisma.RolesPermissionsBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which RolesPermissionsBridges to update
     */
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    /**
     * Limit how many RolesPermissionsBridges to update.
     */
    limit?: number;
};
/**
 * RolesPermissionsBridge updateManyAndReturn
 */
export type RolesPermissionsBridgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * The data used to update RolesPermissionsBridges.
     */
    data: Prisma.XOR<Prisma.RolesPermissionsBridgeUpdateManyMutationInput, Prisma.RolesPermissionsBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which RolesPermissionsBridges to update
     */
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    /**
     * Limit how many RolesPermissionsBridges to update.
     */
    limit?: number;
};
/**
 * RolesPermissionsBridge upsert
 */
export type RolesPermissionsBridgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * The filter to search for the RolesPermissionsBridge to update in case it exists.
     */
    where: Prisma.RolesPermissionsBridgeWhereUniqueInput;
    /**
     * In case the RolesPermissionsBridge found by the `where` argument doesn't exist, create a new RolesPermissionsBridge with this data.
     */
    create: Prisma.XOR<Prisma.RolesPermissionsBridgeCreateInput, Prisma.RolesPermissionsBridgeUncheckedCreateInput>;
    /**
     * In case the RolesPermissionsBridge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RolesPermissionsBridgeUpdateInput, Prisma.RolesPermissionsBridgeUncheckedUpdateInput>;
};
/**
 * RolesPermissionsBridge delete
 */
export type RolesPermissionsBridgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
    /**
     * Filter which RolesPermissionsBridge to delete.
     */
    where: Prisma.RolesPermissionsBridgeWhereUniqueInput;
};
/**
 * RolesPermissionsBridge deleteMany
 */
export type RolesPermissionsBridgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RolesPermissionsBridges to delete
     */
    where?: Prisma.RolesPermissionsBridgeWhereInput;
    /**
     * Limit how many RolesPermissionsBridges to delete.
     */
    limit?: number;
};
/**
 * RolesPermissionsBridge without action
 */
export type RolesPermissionsBridgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesPermissionsBridge
     */
    select?: Prisma.RolesPermissionsBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolesPermissionsBridge
     */
    omit?: Prisma.RolesPermissionsBridgeOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=RolesPermissionsBridge.d.ts.map