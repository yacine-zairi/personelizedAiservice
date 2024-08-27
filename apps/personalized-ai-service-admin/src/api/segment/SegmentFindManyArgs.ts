import { SegmentWhereInput } from "./SegmentWhereInput";
import { SegmentOrderByInput } from "./SegmentOrderByInput";

export type SegmentFindManyArgs = {
  where?: SegmentWhereInput;
  orderBy?: Array<SegmentOrderByInput>;
  skip?: number;
  take?: number;
};
