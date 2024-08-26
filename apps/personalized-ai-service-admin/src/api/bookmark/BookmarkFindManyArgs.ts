import { BookmarkWhereInput } from "./BookmarkWhereInput";
import { BookmarkOrderByInput } from "./BookmarkOrderByInput";

export type BookmarkFindManyArgs = {
  where?: BookmarkWhereInput;
  orderBy?: Array<BookmarkOrderByInput>;
  skip?: number;
  take?: number;
};
