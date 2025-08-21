import type { InstanceOption } from "./pipe";

export function convertToJsonData({
  response,
  extraOption,
}: InstanceOption<Response>) {
  if (extraOption.canHandleResponse === false) return true;
  return response.json();
}
