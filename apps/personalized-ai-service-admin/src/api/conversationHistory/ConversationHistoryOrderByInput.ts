import { SortOrder } from "../../util/SortOrder";

export type ConversationHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
