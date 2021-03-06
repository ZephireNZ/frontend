import { formatDateTimeWithSeconds } from "../../../common/datetime/format_date_time";
import { formatTimeWithSeconds } from "../../../common/datetime/format_time";
import { FrontendTranslationData } from "../../../data/translation";

export const formatSystemLogTime = (date, locale: FrontendTranslationData) => {
  const today = new Date().setHours(0, 0, 0, 0);
  const dateTime = new Date(date * 1000);
  const dateTimeDay = new Date(date * 1000).setHours(0, 0, 0, 0);

  return dateTimeDay < today
    ? formatDateTimeWithSeconds(dateTime, locale)
    : formatTimeWithSeconds(dateTime, locale);
};
