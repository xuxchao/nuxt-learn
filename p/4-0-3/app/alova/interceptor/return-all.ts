import type { InstanceOption } from "./pipe";

export function returnAll({ method, extraOption }: InstanceOption<Response>) {
  if (extraOption.canHandleResponse === false) return true;
  if (method.meta?.resAll) {
    return true;
  }
}
