import { AiResponseWhereInput } from "./AiResponseWhereInput";
import { AiResponseOrderByInput } from "./AiResponseOrderByInput";

export type AiResponseFindManyArgs = {
  where?: AiResponseWhereInput;
  orderBy?: Array<AiResponseOrderByInput>;
  skip?: number;
  take?: number;
};
