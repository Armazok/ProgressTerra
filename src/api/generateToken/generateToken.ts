import { createApi} from '@reduxjs/toolkit/query/react'
import {IGenerateTokenResponse} from "../typesAPI";
import {configKey} from "api/configKey";
import {baseQueryGenerate} from "api/instance";

const {paramValue, idClient} = configKey

export const generateTokenAPI = createApi({
    reducerPath: 'api/token',
    baseQuery: baseQueryGenerate,
    endpoints: build => ({
        createAccessToken: build.query<IGenerateTokenResponse, Partial<void>>({
            query: body => ({
                url: `api/v3/clients/accesstoken`,
                method: 'POST',
                body: {
                    idClient,
                    accessToken: "",
                    paramName: "device",
                    paramValue,
                    latitude: 0,
                    longitude: 0,
                    sourceQuery: 0
                },
            }),
        }),
    }),
})

export const {
    useCreateAccessTokenQuery,
} = generateTokenAPI


