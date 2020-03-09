import { DateTime } from 'luxon';
import formatTime from '..';

describe('Format time', () => {
  it('should return instance of DateTime', () => {
    expect(formatTime(0, 'Europe/Moscow')).toBeInstanceOf(DateTime);
  });

  it('should convert to UTC+3 zone', () => {
    const res = formatTime(0, 'UTC+3');
    expect(res.toString()).toEqual('1970-01-01T03:00:00.000+03:00');
  });

  it('should convert to UTC zone', () => {
    const res = formatTime(0);
    expect(res.toString()).toEqual('1970-01-01T00:00:00.000Z');
  });

  it('should handle nonexistent IANA time zone', () => {
    const res = formatTime(0, 'nonexistent IANA time zone');
    expect(res.toString()).toBe('Invalid DateTime');
  });
});
