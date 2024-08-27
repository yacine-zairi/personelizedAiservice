import { ContextWhereInput } from "./ContextWhereInput";
import { ContextOrderByInput } from "./ContextOrderByInput";

export type ContextFindManyArgs = {
  where?: ContextWhereInput;
  orderBy?: Array<ContextOrderByInput>;
  skip?: number;
  take?: number;
};
