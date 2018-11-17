import { DateTime } from 'luxon';

export function toDayMonthHourMinutes(timestamp, locale) {
  return timestamp.setLocale(locale).toLocaleString({
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function toDayMonth(timestamp, locale) {
  return timestamp.setLocale(locale).toLocaleString({
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  });
}

export function toHourMinutes(timestamp, locale) {
  return timestamp.setLocale(locale).toLocaleString(DateTime.TIME_SIMPLE);
}
