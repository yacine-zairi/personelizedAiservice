import { PreferenceWhereInput } from "./PreferenceWhereInput";
import { PreferenceOrderByInput } from "./PreferenceOrderByInput";

export type PreferenceFindManyArgs = {
  where?: PreferenceWhereInput;
  orderBy?: Array<PreferenceOrderByInput>;
  skip?: number;
  take?: number;
};
