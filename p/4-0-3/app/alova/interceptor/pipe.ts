import type { Method } from "alova";

export type ExtraOption = {
  /** 是否能够继续处理 response */
  canHandleResponse?: boolean;
  /** 是否有 error 错误 */
  error?: Error;
};

export type InstanceOption<T> = {
  response: T;
  method: Method;
  extraOption: ExtraOption;
};

export type InstanceResultBase<T> = boolean | Error | undefined | T;

export type InstanceResult<T> =
  | InstanceResultBase<T>
  | Promise<InstanceResultBase<T>>;

export function pipe(
  arr: ((option: InstanceOption<any>) => InstanceResult<any>)[],
) {
  return async (response: Response, method: Method) => {
    const extraOption: ExtraOption = {
      canHandleResponse: true,
    };
    let _response = response;
    for (let i = 0; i < arr.length; i++) {
      const fun = arr[i];
      if (!fun) continue;
      const res = await fun({
        response: _response,
        method,
        extraOption,
      });
      if (res === true && extraOption.canHandleResponse) {
        extraOption.canHandleResponse = false;
      }
      if (res instanceof Error && extraOption.canHandleResponse === true) {
        extraOption.canHandleResponse = false;
      }
      if (res instanceof Error && !extraOption.error) {
        extraOption.error = res;
      }
      if (
        !(res instanceof Error || typeof res === "boolean" || res === undefined)
      ) {
        _response = res;
      }
    }
    if (extraOption.error) {
      throw extraOption.error;
    }
    return _response;
  };
}
