import { ConversationHistoryWhereInput } from "./ConversationHistoryWhereInput";
import { ConversationHistoryOrderByInput } from "./ConversationHistoryOrderByInput";

export type ConversationHistoryFindManyArgs = {
  where?: ConversationHistoryWhereInput;
  orderBy?: Array<ConversationHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
