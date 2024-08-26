import { ConversationHistory as TConversationHistory } from "../api/conversationHistory/ConversationHistory";

export const CONVERSATIONHISTORY_TITLE_FIELD = "id";

export const ConversationHistoryTitle = (
  record: TConversationHistory
): string => {
  return record.id?.toString() || String(record.id);
};
