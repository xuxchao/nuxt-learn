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

export type BusinessResponse<T> = {
  code: number;
  message: string;
  data: T;
};
