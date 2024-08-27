import { Segment as TSegment } from "../api/segment/Segment";

export const SEGMENT_TITLE_FIELD = "name";

export const SegmentTitle = (record: TSegment): string => {
  return record.name?.toString() || String(record.id);
};
