import { Context as TContext } from "../api/context/Context";

export const CONTEXT_TITLE_FIELD = "typeField";

export const ContextTitle = (record: TContext): string => {
  return record.typeField?.toString() || String(record.id);
};
