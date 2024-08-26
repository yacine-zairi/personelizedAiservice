import { Bookmark as TBookmark } from "../api/bookmark/Bookmark";

export const BOOKMARK_TITLE_FIELD = "title";

export const BookmarkTitle = (record: TBookmark): string => {
  return record.title?.toString() || String(record.id);
};
