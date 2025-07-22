import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    console.log('alovaBaseUrl', config.public.alovaBaseUrl)

    const alovaInstance = createAlova({
        baseURL: config.public.alovaBaseUrl,
        requestAdapter: adapterFetch(),
        responded: response => response.json()
    });
    return {
        provide: {
            alova: alovaInstance
        }
    }
})
