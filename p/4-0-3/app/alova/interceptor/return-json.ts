import type { InstanceOption } from "./pipe";

function returnJson({ extraOption }: InstanceOption<unknown>) {
  if (extraOption.canHandleResponse === false) return true;
  return true;
}

export default returnJson;
