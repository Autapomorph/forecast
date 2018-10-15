import { DateTime } from 'luxon';

export default function formatTime({
  timestamp: rawTimestamp,
  sunrise: rawSunrise,
  sunset: rawSunset,
  timezoneData,
}) {
  let timestamp = DateTime.fromMillis(rawTimestamp * 1000).setZone('utc');
  let sunrise = DateTime.fromMillis(rawSunrise * 1000).setZone('utc');
  let sunset = DateTime.fromMillis(rawSunset * 1000).setZone('utc');

  if (timezoneData) {
    timestamp = timestamp.setZone(timezoneData.zoneName);
    sunrise = sunrise.setZone(timezoneData.zoneName);
    sunset = sunset.setZone(timezoneData.zoneName);
  }

  const timestampLocalized = timestamp.toLocaleString(DateTime.TIME_SIMPLE);
  const timestampLocalizedDM = timestamp.toLocaleString({
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  });
  const sunriseLocalized = sunrise.toLocaleString(DateTime.TIME_SIMPLE);
  const sunsetLocalized = sunset.toLocaleString(DateTime.TIME_SIMPLE);

  const timestampUnix = timestamp.toMillis();
  const sunriseUnix = sunrise.toMillis();
  const sunsetUnix = sunset.toMillis();

  return {
    timestampLocalized,
    timestampLocalizedDM,
    sunriseLocalized,
    sunsetLocalized,
    timestampUnix,
    sunriseUnix,
    sunsetUnix,
  };
}
