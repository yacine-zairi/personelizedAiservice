import { AiResponse as TAiResponse } from "../api/aiResponse/AiResponse";

export const AIRESPONSE_TITLE_FIELD = "id";

export const AiResponseTitle = (record: TAiResponse): string => {
  return record.id?.toString() || String(record.id);
};
