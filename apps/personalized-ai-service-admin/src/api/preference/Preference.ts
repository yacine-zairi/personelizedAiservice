import { JsonValue } from "type-fest";

export type Preference = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  value: JsonValue;
};
