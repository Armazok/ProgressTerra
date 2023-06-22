import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { configKey } from "api/keys/configKey";

const { accessKey } = configKey;

const createBaseQuery = (baseUrl: string) =>
    fetchBaseQuery({
        baseUrl: baseUrl,
        // credentials: 'include', CORS ERR
        headers: {
            AccessKey: accessKey,
        },
    });

export const baseQueryGenerate = createBaseQuery(configKey.baseUrlGenerate);
export const baseQueryInfoBonus = createBaseQuery(configKey.baseUrlInfoBonus);
