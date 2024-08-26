import { ComputeTask as TComputeTask } from "../api/computeTask/ComputeTask";

export const COMPUTETASK_TITLE_FIELD = "taskName";

export const ComputeTaskTitle = (record: TComputeTask): string => {
  return record.taskName?.toString() || String(record.id);
};
