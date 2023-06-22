import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {IInfoBonusResponse} from "api/typesAPI";
import {baseQueryInfoBonus} from "api/instance/instance";


export const bonusClientAPI = createApi({
    reducerPath: 'api/bonus',
    baseQuery: baseQueryInfoBonus,
    endpoints: build => ({
        giveInfoBonus: build.query<IInfoBonusResponse, Partial<string>>({
            query: accessToken => ({
                url: `/api/v3/ibonus/generalinfo/${accessToken}`,
                method: 'GET',
            }),
        }),
    }),
})

export const {
    useGiveInfoBonusQuery
} = bonusClientAPI