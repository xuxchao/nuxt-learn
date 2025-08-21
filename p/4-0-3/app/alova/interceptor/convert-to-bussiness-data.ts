import type { InstanceOption } from "./pipe";

export function convertToBussinessData({
  response,
  extraOption,
}: InstanceOption<any>) {
  if (extraOption.canHandleResponse === false) return true;
  return response.data;
}
