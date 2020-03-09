import { DateTime } from 'luxon';

import * as converters from '../converters';

describe('Time converters', () => {
  const timestamp = DateTime.fromMillis(0).setZone('utc');
  const locale = 'en-US';

  describe('To day month', () => {
    it('should return Thu, Jan 1', () => {
      expect(converters.toDayMonth(timestamp, locale)).toBe('Thu, Jan 1');
    });
  });

  describe('To hour minutes', () => {
    it('should return "3:00 AM', () => {
      expect(converters.toHourMinutes(timestamp, locale)).toBe('12:00 AM');
    });
  });

  describe('To day month hour minutes', () => {
    it('should return Thu, Jan 1, 3:00 AM', () => {
      expect(converters.toDayMonthHourMinutes(timestamp, locale)).toBe('Thu, Jan 1, 12:00 AM');
    });
  });

  describe('Get duration hour minutes', () => {
    it('should return 1h 15m', () => {
      const endTimestamp = DateTime.fromMillis(1000 * (1 * 60 + 15) * 60).setZone('utc');
      expect(converters.getDurationHourMinutes(timestamp, endTimestamp, 'h', 'm')).toBe('1h 15m');
    });
  });
});
