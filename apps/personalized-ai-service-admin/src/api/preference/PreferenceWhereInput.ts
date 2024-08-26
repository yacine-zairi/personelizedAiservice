import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PreferenceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: JsonFilter;
};
