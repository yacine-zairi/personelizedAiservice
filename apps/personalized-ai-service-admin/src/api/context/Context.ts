import { JsonValue } from "type-fest";

export type Context = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
