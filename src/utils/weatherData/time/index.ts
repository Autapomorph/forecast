import { DateTime } from 'luxon';

const formatTime = (time: number, timezone: string = 'utc'): DateTime =>
  DateTime.fromMillis(time * 1000).setZone(timezone);

export default formatTime;
