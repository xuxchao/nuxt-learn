import type { InstanceOption } from "./pipe";

function returnData({ extraOption }: InstanceOption<unknown>) {
  if (extraOption.canHandleResponse === false) return true;
  return true;
}

export default returnData;
