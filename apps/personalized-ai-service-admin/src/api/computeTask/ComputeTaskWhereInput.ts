import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ComputeTaskWhereInput = {
  id?: StringFilter;
  result?: JsonFilter;
  status?: "Option1";
  taskName?: StringNullableFilter;
};
