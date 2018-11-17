import { DateTime } from 'luxon';

export default function formatTime({
  timestamp: rawTimestamp,
  sunrise: rawSunrise,
  sunset: rawSunset,
  timezoneData: timeZone,
}) {
  let timestamp = DateTime.fromMillis(rawTimestamp * 1000).setZone('utc');
  let sunrise = DateTime.fromMillis(rawSunrise * 1000).setZone('utc');
  let sunset = DateTime.fromMillis(rawSunset * 1000).setZone('utc');

  if (timeZone) {
    timestamp = timestamp.setZone(timeZone.zoneName);
    sunrise = sunrise.setZone(timeZone.zoneName);
    sunset = sunset.setZone(timeZone.zoneName);
  }

  return {
    timeZone,
    timestamp,
    sunrise,
    sunset,
  };
}
