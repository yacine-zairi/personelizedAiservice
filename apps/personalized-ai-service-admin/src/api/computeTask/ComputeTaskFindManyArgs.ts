import { ComputeTaskWhereInput } from "./ComputeTaskWhereInput";
import { ComputeTaskOrderByInput } from "./ComputeTaskOrderByInput";

export type ComputeTaskFindManyArgs = {
  where?: ComputeTaskWhereInput;
  orderBy?: Array<ComputeTaskOrderByInput>;
  skip?: number;
  take?: number;
};
