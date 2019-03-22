import { DateTime, DateTimeFormatOptions } from 'luxon';

export function toDayMonthHourMinutes(timestamp: DateTime, locale: string): string {
  const dateTimeFormatOptions: DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
  };

  return timestamp.setLocale(locale).toLocaleString(dateTimeFormatOptions);
}

export function toDayMonth(timestamp: DateTime, locale: string): string {
  const dateTimeFormatOptions: DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  };

  return timestamp.setLocale(locale).toLocaleString(dateTimeFormatOptions);
}

export function toHourMinutes(timestamp: DateTime, locale: string): string {
  const dateTimeFormatOptions: DateTimeFormatOptions = DateTime.TIME_SIMPLE;

  return timestamp.setLocale(locale).toLocaleString(dateTimeFormatOptions);
}
