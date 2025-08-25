import type { Method } from "alova";
import type { ExtraOption, InstanceOption, InstanceResult } from "../types";

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
