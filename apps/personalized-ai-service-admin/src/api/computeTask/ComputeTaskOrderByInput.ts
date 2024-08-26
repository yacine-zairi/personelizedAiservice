import { SortOrder } from "../../util/SortOrder";

export type ComputeTaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  status?: SortOrder;
  taskName?: SortOrder;
  updatedAt?: SortOrder;
};
