import { JsonValue } from "type-fest";

export type ComputeTask = {
  createdAt: Date;
  id: string;
  result: JsonValue;
  status?: "Option1" | null;
  taskName: string | null;
  updatedAt: Date;
};
