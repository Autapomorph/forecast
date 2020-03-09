import { DateTime, Zone } from 'luxon';

const formatTime = (time: number, timezone: Zone | string = 'utc'): DateTime =>
  DateTime.fromMillis(time * 1000).setZone(timezone);

export default formatTime;
