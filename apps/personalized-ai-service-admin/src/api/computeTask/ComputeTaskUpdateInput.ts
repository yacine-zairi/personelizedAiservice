import { InputJsonValue } from "../../types";

export type ComputeTaskUpdateInput = {
  result?: InputJsonValue;
  status?: "Option1" | null;
  taskName?: string | null;
};
