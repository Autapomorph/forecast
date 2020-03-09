import { ResponseObject as WeatherAPIResponse } from 'dark-sky';

import { Weather } from 'models';
import formatCurrent from './formatCurrent';
import formatDaily from './formatDaily';

export default function format(weather: WeatherAPIResponse): Weather {
  const { currently: current, daily, timezone, latitude, longitude } = weather;

  if (!current || !daily) {
    throw new TypeError('Weather object is undefined');
  }

  return {
    timezone,
    coords: {
      latitude,
      longitude,
    },
    current: formatCurrent(current, daily.data[0], timezone),
    daily: formatDaily(daily.data, timezone),
  };
}
