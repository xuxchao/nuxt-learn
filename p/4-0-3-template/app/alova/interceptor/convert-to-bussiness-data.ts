import type { BusinessResponse, InstanceOption } from "../types";

export function convertToBussinessData({
  response,
  extraOption,
}: InstanceOption<BusinessResponse<any>>) {
  if (extraOption.canHandleResponse === false) return true;
  return response.data;
}
