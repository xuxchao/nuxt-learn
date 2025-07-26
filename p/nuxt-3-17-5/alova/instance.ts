import { createAlova } from 'alova';
import NuxtHook from 'alova/nuxt';
import adapterFetch from 'alova/fetch';


export const alovaInstance = createAlova({
    requestAdapter: adapterFetch(),
    statesHook: NuxtHook({
        nuxtApp: useNuxtApp // 必须指定useNuxtApp
    }),
    baseURL: 'http://localhost:3000',
    cacheFor: {
        get: 0,
    },
    responded: async (response, method) => {
        const data = await response.json()
        console.log('查看 alova 数据', data, method.baseURL)
        return data
    }
});