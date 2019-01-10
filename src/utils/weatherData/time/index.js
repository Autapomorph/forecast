import { DateTime } from 'luxon';

const formatTime = (time, timezone) => DateTime.fromMillis(time * 1000).setZone(timezone || 'utc');

export default formatTime;
