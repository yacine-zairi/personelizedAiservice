import { Preference as TPreference } from "../api/preference/Preference";

export const PREFERENCE_TITLE_FIELD = "name";

export const PreferenceTitle = (record: TPreference): string => {
  return record.name?.toString() || String(record.id);
};
