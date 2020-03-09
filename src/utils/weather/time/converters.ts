import { DateTime, DateTimeFormatOptions } from 'luxon';

export function toDayMonthHourMinutes(timestamp: DateTime, locale: string): string {
  const dateTimeFormatOptions: DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
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
  const dateTimeFormatOptions = DateTime.TIME_SIMPLE;
  return timestamp.setLocale(locale).toLocaleString(dateTimeFormatOptions);
}

export function getDurationHourMinutes(
  startT: DateTime,
  endT: DateTime,
  hoursSymbol: string,
  minutesSymbol: string,
): string {
  const duration = endT.minus({ hours: startT.hour, minutes: startT.minute });
  return duration.toFormat(`H'${hoursSymbol}' m'${minutesSymbol}'`);
}
