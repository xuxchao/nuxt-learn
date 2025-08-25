import type { InstanceOption } from "../types";

export function httpError({ response, extraOption }: InstanceOption<Response>) {
  if (extraOption.canHandleResponse === false) return true;
  if (response.status >= 300 || response.status < 200) {
    return new Error(`HTTP Error: ${response.status}`);
  }
}
