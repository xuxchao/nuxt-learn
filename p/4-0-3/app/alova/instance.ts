import { createAlova } from "alova";
import fetchAdapter from "alova/fetch";
import NuxtHook from "alova/nuxt";
import { convertToJsonData } from "./interceptor/convert-to-json-data";
import { httpError } from "./interceptor/http-error";
import { pipe } from "./interceptor/pipe";
import { returnAll } from "./interceptor/return-all";
import returnData from "./interceptor/return-data";
import returnJson from "./interceptor/return-json";

export const alovaInstance = createAlova({
  requestAdapter: fetchAdapter(),
  statesHook: NuxtHook({
    nuxtApp: useNuxtApp, // 必须指定useNuxtApp
  }),
  responded: {
    onSuccess: pipe([
      // 是否直接返回 response
      returnAll,
      // 是否判断有 http error
      httpError,
      // 将数据转化伪 json
      convertToJsonData, // 注意：后面的拦截器拿到的是 json 数据
      // 是否直接返回 response.json() 数据
      returnJson,
      // -- 业务状态码非 200 是否弹窗提醒
      // 是否返回 data 数据
      returnData,
      // -- 是否将 data 数据数据转化一层 json 数据
    ]),
  },
});
