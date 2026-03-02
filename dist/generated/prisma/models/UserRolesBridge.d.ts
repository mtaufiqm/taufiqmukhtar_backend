import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model UserRolesBridge
 *
 */
export type UserRolesBridgeModel = runtime.Types.Result.DefaultSelection<Prisma.$UserRolesBridgePayload>;
export type AggregateUserRolesBridge = {
    _count: UserRolesBridgeCountAggregateOutputType | null;
    _min: UserRolesBridgeMinAggregateOutputType | null;
    _max: UserRolesBridgeMaxAggregateOutputType | null;
};
export type UserRolesBridgeMinAggregateOutputType = {
    username: string | null;
    roles: string | null;
};
export type UserRolesBridgeMaxAggregateOutputType = {
    username: string | null;
    roles: string | null;
};
export type UserRolesBridgeCountAggregateOutputType = {
    username: number;
    roles: number;
    _all: number;
};
export type UserRolesBridgeMinAggregateInputType = {
    username?: true;
    roles?: true;
};
export type UserRolesBridgeMaxAggregateInputType = {
    username?: true;
    roles?: true;
};
export type UserRolesBridgeCountAggregateInputType = {
    username?: true;
    roles?: true;
    _all?: true;
};
export type UserRolesBridgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserRolesBridge to aggregate.
     */
    where?: Prisma.UserRolesBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRolesBridges to fetch.
     */
    orderBy?: Prisma.UserRolesBridgeOrderByWithRelationInput | Prisma.UserRolesBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserRolesBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRolesBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRolesBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserRolesBridges
    **/
    _count?: true | UserRolesBridgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserRolesBridgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserRolesBridgeMaxAggregateInputType;
};
export type GetUserRolesBridgeAggregateType<T extends UserRolesBridgeAggregateArgs> = {
    [P in keyof T & keyof AggregateUserRolesBridge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserRolesBridge[P]> : Prisma.GetScalarType<T[P], AggregateUserRolesBridge[P]>;
};
export type UserRolesBridgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRolesBridgeWhereInput;
    orderBy?: Prisma.UserRolesBridgeOrderByWithAggregationInput | Prisma.UserRolesBridgeOrderByWithAggregationInput[];
    by: Prisma.UserRolesBridgeScalarFieldEnum[] | Prisma.UserRolesBridgeScalarFieldEnum;
    having?: Prisma.UserRolesBridgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserRolesBridgeCountAggregateInputType | true;
    _min?: UserRolesBridgeMinAggregateInputType;
    _max?: UserRolesBridgeMaxAggregateInputType;
};
export type UserRolesBridgeGroupByOutputType = {
    username: string;
    roles: string;
    _count: UserRolesBridgeCountAggregateOutputType | null;
    _min: UserRolesBridgeMinAggregateOutputType | null;
    _max: UserRolesBridgeMaxAggregateOutputType | null;
};
type GetUserRolesBridgeGroupByPayload<T extends UserRolesBridgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserRolesBridgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserRolesBridgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserRolesBridgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserRolesBridgeGroupByOutputType[P]>;
}>>;
export type UserRolesBridgeWhereInput = {
    AND?: Prisma.UserRolesBridgeWhereInput | Prisma.UserRolesBridgeWhereInput[];
    OR?: Prisma.UserRolesBridgeWhereInput[];
    NOT?: Prisma.UserRolesBridgeWhereInput | Prisma.UserRolesBridgeWhereInput[];
    username?: Prisma.StringFilter<"UserRolesBridge"> | string;
    roles?: Prisma.StringFilter<"UserRolesBridge"> | string;
    userObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    rolesObj?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
};
export type UserRolesBridgeOrderByWithRelationInput = {
    username?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    userObj?: Prisma.UserOrderByWithRelationInput;
    rolesObj?: Prisma.RolesOrderByWithRelationInput;
};
export type UserRolesBridgeWhereUniqueInput = Prisma.AtLeast<{
    username_roles?: Prisma.UserRolesBridgeUsernameRolesCompoundUniqueInput;
    AND?: Prisma.UserRolesBridgeWhereInput | Prisma.UserRolesBridgeWhereInput[];
    OR?: Prisma.UserRolesBridgeWhereInput[];
    NOT?: Prisma.UserRolesBridgeWhereInput | Prisma.UserRolesBridgeWhereInput[];
    username?: Prisma.StringFilter<"UserRolesBridge"> | string;
    roles?: Prisma.StringFilter<"UserRolesBridge"> | string;
    userObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    rolesObj?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
}, "username_roles" | "username_roles">;
export type UserRolesBridgeOrderByWithAggregationInput = {
    username?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    _count?: Prisma.UserRolesBridgeCountOrderByAggregateInput;
    _max?: Prisma.UserRolesBridgeMaxOrderByAggregateInput;
    _min?: Prisma.UserRolesBridgeMinOrderByAggregateInput;
};
export type UserRolesBridgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserRolesBridgeScalarWhereWithAggregatesInput | Prisma.UserRolesBridgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserRolesBridgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserRolesBridgeScalarWhereWithAggregatesInput | Prisma.UserRolesBridgeScalarWhereWithAggregatesInput[];
    username?: Prisma.StringWithAggregatesFilter<"UserRolesBridge"> | string;
    roles?: Prisma.StringWithAggregatesFilter<"UserRolesBridge"> | string;
};
export type UserRolesBridgeCreateInput = {
    userObj: Prisma.UserCreateNestedOneWithoutRolesBridgeObjInput;
    rolesObj: Prisma.RolesCreateNestedOneWithoutUserBridgeInput;
};
export type UserRolesBridgeUncheckedCreateInput = {
    username: string;
    roles: string;
};
export type UserRolesBridgeUpdateInput = {
    userObj?: Prisma.UserUpdateOneRequiredWithoutRolesBridgeObjNestedInput;
    rolesObj?: Prisma.RolesUpdateOneRequiredWithoutUserBridgeNestedInput;
};
export type UserRolesBridgeUncheckedUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRolesBridgeCreateManyInput = {
    username: string;
    roles: string;
};
export type UserRolesBridgeUpdateManyMutationInput = {};
export type UserRolesBridgeUncheckedUpdateManyInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRolesBridgeListRelationFilter = {
    every?: Prisma.UserRolesBridgeWhereInput;
    some?: Prisma.UserRolesBridgeWhereInput;
    none?: Prisma.UserRolesBridgeWhereInput;
};
export type UserRolesBridgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserRolesBridgeUsernameRolesCompoundUniqueInput = {
    username: string;
    roles: string;
};
export type UserRolesBridgeCountOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
};
export type UserRolesBridgeMaxOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
};
export type UserRolesBridgeMinOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
};
export type UserRolesBridgeCreateNestedManyWithoutUserObjInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput> | Prisma.UserRolesBridgeCreateWithoutUserObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyUserObjInputEnvelope;
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
};
export type UserRolesBridgeUncheckedCreateNestedManyWithoutUserObjInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput> | Prisma.UserRolesBridgeCreateWithoutUserObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyUserObjInputEnvelope;
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
};
export type UserRolesBridgeUpdateManyWithoutUserObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput> | Prisma.UserRolesBridgeCreateWithoutUserObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput[];
    upsert?: Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutUserObjInput | Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutUserObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyUserObjInputEnvelope;
    set?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    delete?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    update?: Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutUserObjInput | Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutUserObjInput[];
    updateMany?: Prisma.UserRolesBridgeUpdateManyWithWhereWithoutUserObjInput | Prisma.UserRolesBridgeUpdateManyWithWhereWithoutUserObjInput[];
    deleteMany?: Prisma.UserRolesBridgeScalarWhereInput | Prisma.UserRolesBridgeScalarWhereInput[];
};
export type UserRolesBridgeUncheckedUpdateManyWithoutUserObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput> | Prisma.UserRolesBridgeCreateWithoutUserObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutUserObjInput[];
    upsert?: Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutUserObjInput | Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutUserObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyUserObjInputEnvelope;
    set?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    delete?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    update?: Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutUserObjInput | Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutUserObjInput[];
    updateMany?: Prisma.UserRolesBridgeUpdateManyWithWhereWithoutUserObjInput | Prisma.UserRolesBridgeUpdateManyWithWhereWithoutUserObjInput[];
    deleteMany?: Prisma.UserRolesBridgeScalarWhereInput | Prisma.UserRolesBridgeScalarWhereInput[];
};
export type UserRolesBridgeCreateNestedManyWithoutRolesObjInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput> | Prisma.UserRolesBridgeCreateWithoutRolesObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyRolesObjInputEnvelope;
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
};
export type UserRolesBridgeUncheckedCreateNestedManyWithoutRolesObjInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput> | Prisma.UserRolesBridgeCreateWithoutRolesObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyRolesObjInputEnvelope;
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
};
export type UserRolesBridgeUpdateManyWithoutRolesObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput> | Prisma.UserRolesBridgeCreateWithoutRolesObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput[];
    upsert?: Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutRolesObjInput | Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutRolesObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyRolesObjInputEnvelope;
    set?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    delete?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    update?: Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutRolesObjInput | Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutRolesObjInput[];
    updateMany?: Prisma.UserRolesBridgeUpdateManyWithWhereWithoutRolesObjInput | Prisma.UserRolesBridgeUpdateManyWithWhereWithoutRolesObjInput[];
    deleteMany?: Prisma.UserRolesBridgeScalarWhereInput | Prisma.UserRolesBridgeScalarWhereInput[];
};
export type UserRolesBridgeUncheckedUpdateManyWithoutRolesObjNestedInput = {
    create?: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput> | Prisma.UserRolesBridgeCreateWithoutRolesObjInput[] | Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput[];
    connectOrCreate?: Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput | Prisma.UserRolesBridgeCreateOrConnectWithoutRolesObjInput[];
    upsert?: Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutRolesObjInput | Prisma.UserRolesBridgeUpsertWithWhereUniqueWithoutRolesObjInput[];
    createMany?: Prisma.UserRolesBridgeCreateManyRolesObjInputEnvelope;
    set?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    disconnect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    delete?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    connect?: Prisma.UserRolesBridgeWhereUniqueInput | Prisma.UserRolesBridgeWhereUniqueInput[];
    update?: Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutRolesObjInput | Prisma.UserRolesBridgeUpdateWithWhereUniqueWithoutRolesObjInput[];
    updateMany?: Prisma.UserRolesBridgeUpdateManyWithWhereWithoutRolesObjInput | Prisma.UserRolesBridgeUpdateManyWithWhereWithoutRolesObjInput[];
    deleteMany?: Prisma.UserRolesBridgeScalarWhereInput | Prisma.UserRolesBridgeScalarWhereInput[];
};
export type UserRolesBridgeCreateWithoutUserObjInput = {
    rolesObj: Prisma.RolesCreateNestedOneWithoutUserBridgeInput;
};
export type UserRolesBridgeUncheckedCreateWithoutUserObjInput = {
    roles: string;
};
export type UserRolesBridgeCreateOrConnectWithoutUserObjInput = {
    where: Prisma.UserRolesBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput>;
};
export type UserRolesBridgeCreateManyUserObjInputEnvelope = {
    data: Prisma.UserRolesBridgeCreateManyUserObjInput | Prisma.UserRolesBridgeCreateManyUserObjInput[];
    skipDuplicates?: boolean;
};
export type UserRolesBridgeUpsertWithWhereUniqueWithoutUserObjInput = {
    where: Prisma.UserRolesBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserRolesBridgeUpdateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedUpdateWithoutUserObjInput>;
    create: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutUserObjInput>;
};
export type UserRolesBridgeUpdateWithWhereUniqueWithoutUserObjInput = {
    where: Prisma.UserRolesBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserRolesBridgeUpdateWithoutUserObjInput, Prisma.UserRolesBridgeUncheckedUpdateWithoutUserObjInput>;
};
export type UserRolesBridgeUpdateManyWithWhereWithoutUserObjInput = {
    where: Prisma.UserRolesBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.UserRolesBridgeUpdateManyMutationInput, Prisma.UserRolesBridgeUncheckedUpdateManyWithoutUserObjInput>;
};
export type UserRolesBridgeScalarWhereInput = {
    AND?: Prisma.UserRolesBridgeScalarWhereInput | Prisma.UserRolesBridgeScalarWhereInput[];
    OR?: Prisma.UserRolesBridgeScalarWhereInput[];
    NOT?: Prisma.UserRolesBridgeScalarWhereInput | Prisma.UserRolesBridgeScalarWhereInput[];
    username?: Prisma.StringFilter<"UserRolesBridge"> | string;
    roles?: Prisma.StringFilter<"UserRolesBridge"> | string;
};
export type UserRolesBridgeCreateWithoutRolesObjInput = {
    userObj: Prisma.UserCreateNestedOneWithoutRolesBridgeObjInput;
};
export type UserRolesBridgeUncheckedCreateWithoutRolesObjInput = {
    username: string;
};
export type UserRolesBridgeCreateOrConnectWithoutRolesObjInput = {
    where: Prisma.UserRolesBridgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput>;
};
export type UserRolesBridgeCreateManyRolesObjInputEnvelope = {
    data: Prisma.UserRolesBridgeCreateManyRolesObjInput | Prisma.UserRolesBridgeCreateManyRolesObjInput[];
    skipDuplicates?: boolean;
};
export type UserRolesBridgeUpsertWithWhereUniqueWithoutRolesObjInput = {
    where: Prisma.UserRolesBridgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserRolesBridgeUpdateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedUpdateWithoutRolesObjInput>;
    create: Prisma.XOR<Prisma.UserRolesBridgeCreateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedCreateWithoutRolesObjInput>;
};
export type UserRolesBridgeUpdateWithWhereUniqueWithoutRolesObjInput = {
    where: Prisma.UserRolesBridgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserRolesBridgeUpdateWithoutRolesObjInput, Prisma.UserRolesBridgeUncheckedUpdateWithoutRolesObjInput>;
};
export type UserRolesBridgeUpdateManyWithWhereWithoutRolesObjInput = {
    where: Prisma.UserRolesBridgeScalarWhereInput;
    data: Prisma.XOR<Prisma.UserRolesBridgeUpdateManyMutationInput, Prisma.UserRolesBridgeUncheckedUpdateManyWithoutRolesObjInput>;
};
export type UserRolesBridgeCreateManyUserObjInput = {
    roles: string;
};
export type UserRolesBridgeUpdateWithoutUserObjInput = {
    rolesObj?: Prisma.RolesUpdateOneRequiredWithoutUserBridgeNestedInput;
};
export type UserRolesBridgeUncheckedUpdateWithoutUserObjInput = {
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRolesBridgeUncheckedUpdateManyWithoutUserObjInput = {
    roles?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRolesBridgeCreateManyRolesObjInput = {
    username: string;
};
export type UserRolesBridgeUpdateWithoutRolesObjInput = {
    userObj?: Prisma.UserUpdateOneRequiredWithoutRolesBridgeObjNestedInput;
};
export type UserRolesBridgeUncheckedUpdateWithoutRolesObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRolesBridgeUncheckedUpdateManyWithoutRolesObjInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserRolesBridgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    roles?: boolean;
    userObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rolesObj?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRolesBridge"]>;
export type UserRolesBridgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    roles?: boolean;
    userObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rolesObj?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRolesBridge"]>;
export type UserRolesBridgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    roles?: boolean;
    userObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rolesObj?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRolesBridge"]>;
export type UserRolesBridgeSelectScalar = {
    username?: boolean;
    roles?: boolean;
};
export type UserRolesBridgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"username" | "roles", ExtArgs["result"]["userRolesBridge"]>;
export type UserRolesBridgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rolesObj?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type UserRolesBridgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rolesObj?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type UserRolesBridgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rolesObj?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type $UserRolesBridgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserRolesBridge";
    objects: {
        userObj: Prisma.$UserPayload<ExtArgs>;
        rolesObj: Prisma.$RolesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        username: string;
        roles: string;
    }, ExtArgs["result"]["userRolesBridge"]>;
    composites: {};
};
export type UserRolesBridgeGetPayload<S extends boolean | null | undefined | UserRolesBridgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload, S>;
export type UserRolesBridgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserRolesBridgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserRolesBridgeCountAggregateInputType | true;
};
export interface UserRolesBridgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserRolesBridge'];
        meta: {
            name: 'UserRolesBridge';
        };
    };
    /**
     * Find zero or one UserRolesBridge that matches the filter.
     * @param {UserRolesBridgeFindUniqueArgs} args - Arguments to find a UserRolesBridge
     * @example
     * // Get one UserRolesBridge
     * const userRolesBridge = await prisma.userRolesBridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRolesBridgeFindUniqueArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserRolesBridge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRolesBridgeFindUniqueOrThrowArgs} args - Arguments to find a UserRolesBridge
     * @example
     * // Get one UserRolesBridge
     * const userRolesBridge = await prisma.userRolesBridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRolesBridgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserRolesBridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesBridgeFindFirstArgs} args - Arguments to find a UserRolesBridge
     * @example
     * // Get one UserRolesBridge
     * const userRolesBridge = await prisma.userRolesBridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRolesBridgeFindFirstArgs>(args?: Prisma.SelectSubset<T, UserRolesBridgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserRolesBridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesBridgeFindFirstOrThrowArgs} args - Arguments to find a UserRolesBridge
     * @example
     * // Get one UserRolesBridge
     * const userRolesBridge = await prisma.userRolesBridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRolesBridgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserRolesBridgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserRolesBridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesBridgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRolesBridges
     * const userRolesBridges = await prisma.userRolesBridge.findMany()
     *
     * // Get first 10 UserRolesBridges
     * const userRolesBridges = await prisma.userRolesBridge.findMany({ take: 10 })
     *
     * // Only select the `username`
     * const userRolesBridgeWithUsernameOnly = await prisma.userRolesBridge.findMany({ select: { username: true } })
     *
     */
    findMany<T extends UserRolesBridgeFindManyArgs>(args?: Prisma.SelectSubset<T, UserRolesBridgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserRolesBridge.
     * @param {UserRolesBridgeCreateArgs} args - Arguments to create a UserRolesBridge.
     * @example
     * // Create one UserRolesBridge
     * const UserRolesBridge = await prisma.userRolesBridge.create({
     *   data: {
     *     // ... data to create a UserRolesBridge
     *   }
     * })
     *
     */
    create<T extends UserRolesBridgeCreateArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeCreateArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserRolesBridges.
     * @param {UserRolesBridgeCreateManyArgs} args - Arguments to create many UserRolesBridges.
     * @example
     * // Create many UserRolesBridges
     * const userRolesBridge = await prisma.userRolesBridge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserRolesBridgeCreateManyArgs>(args?: Prisma.SelectSubset<T, UserRolesBridgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserRolesBridges and returns the data saved in the database.
     * @param {UserRolesBridgeCreateManyAndReturnArgs} args - Arguments to create many UserRolesBridges.
     * @example
     * // Create many UserRolesBridges
     * const userRolesBridge = await prisma.userRolesBridge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserRolesBridges and only return the `username`
     * const userRolesBridgeWithUsernameOnly = await prisma.userRolesBridge.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserRolesBridgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserRolesBridgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserRolesBridge.
     * @param {UserRolesBridgeDeleteArgs} args - Arguments to delete one UserRolesBridge.
     * @example
     * // Delete one UserRolesBridge
     * const UserRolesBridge = await prisma.userRolesBridge.delete({
     *   where: {
     *     // ... filter to delete one UserRolesBridge
     *   }
     * })
     *
     */
    delete<T extends UserRolesBridgeDeleteArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeDeleteArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserRolesBridge.
     * @param {UserRolesBridgeUpdateArgs} args - Arguments to update one UserRolesBridge.
     * @example
     * // Update one UserRolesBridge
     * const userRolesBridge = await prisma.userRolesBridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserRolesBridgeUpdateArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeUpdateArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserRolesBridges.
     * @param {UserRolesBridgeDeleteManyArgs} args - Arguments to filter UserRolesBridges to delete.
     * @example
     * // Delete a few UserRolesBridges
     * const { count } = await prisma.userRolesBridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserRolesBridgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserRolesBridgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserRolesBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesBridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRolesBridges
     * const userRolesBridge = await prisma.userRolesBridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserRolesBridgeUpdateManyArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserRolesBridges and returns the data updated in the database.
     * @param {UserRolesBridgeUpdateManyAndReturnArgs} args - Arguments to update many UserRolesBridges.
     * @example
     * // Update many UserRolesBridges
     * const userRolesBridge = await prisma.userRolesBridge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserRolesBridges and only return the `username`
     * const userRolesBridgeWithUsernameOnly = await prisma.userRolesBridge.updateManyAndReturn({
     *   select: { username: true },
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
    updateManyAndReturn<T extends UserRolesBridgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserRolesBridge.
     * @param {UserRolesBridgeUpsertArgs} args - Arguments to update or create a UserRolesBridge.
     * @example
     * // Update or create a UserRolesBridge
     * const userRolesBridge = await prisma.userRolesBridge.upsert({
     *   create: {
     *     // ... data to create a UserRolesBridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRolesBridge we want to update
     *   }
     * })
     */
    upsert<T extends UserRolesBridgeUpsertArgs>(args: Prisma.SelectSubset<T, UserRolesBridgeUpsertArgs<ExtArgs>>): Prisma.Prisma__UserRolesBridgeClient<runtime.Types.Result.GetResult<Prisma.$UserRolesBridgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserRolesBridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesBridgeCountArgs} args - Arguments to filter UserRolesBridges to count.
     * @example
     * // Count the number of UserRolesBridges
     * const count = await prisma.userRolesBridge.count({
     *   where: {
     *     // ... the filter for the UserRolesBridges we want to count
     *   }
     * })
    **/
    count<T extends UserRolesBridgeCountArgs>(args?: Prisma.Subset<T, UserRolesBridgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserRolesBridgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserRolesBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesBridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRolesBridgeAggregateArgs>(args: Prisma.Subset<T, UserRolesBridgeAggregateArgs>): Prisma.PrismaPromise<GetUserRolesBridgeAggregateType<T>>;
    /**
     * Group by UserRolesBridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesBridgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserRolesBridgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserRolesBridgeGroupByArgs['orderBy'];
    } : {
        orderBy?: UserRolesBridgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserRolesBridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRolesBridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserRolesBridge model
     */
    readonly fields: UserRolesBridgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UserRolesBridge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserRolesBridgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userObj<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rolesObj<T extends Prisma.RolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RolesDefaultArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the UserRolesBridge model
 */
export interface UserRolesBridgeFieldRefs {
    readonly username: Prisma.FieldRef<"UserRolesBridge", 'String'>;
    readonly roles: Prisma.FieldRef<"UserRolesBridge", 'String'>;
}
/**
 * UserRolesBridge findUnique
 */
export type UserRolesBridgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRolesBridge to fetch.
     */
    where: Prisma.UserRolesBridgeWhereUniqueInput;
};
/**
 * UserRolesBridge findUniqueOrThrow
 */
export type UserRolesBridgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRolesBridge to fetch.
     */
    where: Prisma.UserRolesBridgeWhereUniqueInput;
};
/**
 * UserRolesBridge findFirst
 */
export type UserRolesBridgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRolesBridge to fetch.
     */
    where?: Prisma.UserRolesBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRolesBridges to fetch.
     */
    orderBy?: Prisma.UserRolesBridgeOrderByWithRelationInput | Prisma.UserRolesBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRolesBridges.
     */
    cursor?: Prisma.UserRolesBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRolesBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRolesBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRolesBridges.
     */
    distinct?: Prisma.UserRolesBridgeScalarFieldEnum | Prisma.UserRolesBridgeScalarFieldEnum[];
};
/**
 * UserRolesBridge findFirstOrThrow
 */
export type UserRolesBridgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRolesBridge to fetch.
     */
    where?: Prisma.UserRolesBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRolesBridges to fetch.
     */
    orderBy?: Prisma.UserRolesBridgeOrderByWithRelationInput | Prisma.UserRolesBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRolesBridges.
     */
    cursor?: Prisma.UserRolesBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRolesBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRolesBridges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRolesBridges.
     */
    distinct?: Prisma.UserRolesBridgeScalarFieldEnum | Prisma.UserRolesBridgeScalarFieldEnum[];
};
/**
 * UserRolesBridge findMany
 */
export type UserRolesBridgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * Filter, which UserRolesBridges to fetch.
     */
    where?: Prisma.UserRolesBridgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRolesBridges to fetch.
     */
    orderBy?: Prisma.UserRolesBridgeOrderByWithRelationInput | Prisma.UserRolesBridgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserRolesBridges.
     */
    cursor?: Prisma.UserRolesBridgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRolesBridges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRolesBridges.
     */
    skip?: number;
    distinct?: Prisma.UserRolesBridgeScalarFieldEnum | Prisma.UserRolesBridgeScalarFieldEnum[];
};
/**
 * UserRolesBridge create
 */
export type UserRolesBridgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserRolesBridge.
     */
    data: Prisma.XOR<Prisma.UserRolesBridgeCreateInput, Prisma.UserRolesBridgeUncheckedCreateInput>;
};
/**
 * UserRolesBridge createMany
 */
export type UserRolesBridgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRolesBridges.
     */
    data: Prisma.UserRolesBridgeCreateManyInput | Prisma.UserRolesBridgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UserRolesBridge createManyAndReturn
 */
export type UserRolesBridgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * The data used to create many UserRolesBridges.
     */
    data: Prisma.UserRolesBridgeCreateManyInput | Prisma.UserRolesBridgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UserRolesBridge update
 */
export type UserRolesBridgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserRolesBridge.
     */
    data: Prisma.XOR<Prisma.UserRolesBridgeUpdateInput, Prisma.UserRolesBridgeUncheckedUpdateInput>;
    /**
     * Choose, which UserRolesBridge to update.
     */
    where: Prisma.UserRolesBridgeWhereUniqueInput;
};
/**
 * UserRolesBridge updateMany
 */
export type UserRolesBridgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRolesBridges.
     */
    data: Prisma.XOR<Prisma.UserRolesBridgeUpdateManyMutationInput, Prisma.UserRolesBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which UserRolesBridges to update
     */
    where?: Prisma.UserRolesBridgeWhereInput;
    /**
     * Limit how many UserRolesBridges to update.
     */
    limit?: number;
};
/**
 * UserRolesBridge updateManyAndReturn
 */
export type UserRolesBridgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * The data used to update UserRolesBridges.
     */
    data: Prisma.XOR<Prisma.UserRolesBridgeUpdateManyMutationInput, Prisma.UserRolesBridgeUncheckedUpdateManyInput>;
    /**
     * Filter which UserRolesBridges to update
     */
    where?: Prisma.UserRolesBridgeWhereInput;
    /**
     * Limit how many UserRolesBridges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UserRolesBridge upsert
 */
export type UserRolesBridgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserRolesBridge to update in case it exists.
     */
    where: Prisma.UserRolesBridgeWhereUniqueInput;
    /**
     * In case the UserRolesBridge found by the `where` argument doesn't exist, create a new UserRolesBridge with this data.
     */
    create: Prisma.XOR<Prisma.UserRolesBridgeCreateInput, Prisma.UserRolesBridgeUncheckedCreateInput>;
    /**
     * In case the UserRolesBridge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserRolesBridgeUpdateInput, Prisma.UserRolesBridgeUncheckedUpdateInput>;
};
/**
 * UserRolesBridge delete
 */
export type UserRolesBridgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
    /**
     * Filter which UserRolesBridge to delete.
     */
    where: Prisma.UserRolesBridgeWhereUniqueInput;
};
/**
 * UserRolesBridge deleteMany
 */
export type UserRolesBridgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserRolesBridges to delete
     */
    where?: Prisma.UserRolesBridgeWhereInput;
    /**
     * Limit how many UserRolesBridges to delete.
     */
    limit?: number;
};
/**
 * UserRolesBridge without action
 */
export type UserRolesBridgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolesBridge
     */
    select?: Prisma.UserRolesBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRolesBridge
     */
    omit?: Prisma.UserRolesBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRolesBridgeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=UserRolesBridge.d.ts.map