import {
  TZDB_API_TIMEZONE,
  TZDB_API_KEY_QUERY_PARAM,
  TZDB_API_KEY,
  TZDB_API_FORMAT_QUERY_PARAM,
  TZDB_API_BY_QUERY_PARAM,
  TZDB_API_LATITUDE_QUERY_PARAM,
  TZDB_API_LONGITUDE_QUERY_PARAM,
} from '~/config/timezone';
import combineQueryParams from '~/utils/url/combineQueryParams';
import { isProd } from '~/utils';

export default class TimezoneService {
  static getQueryString = searchParams => {
    const queryString = combineQueryParams({
      [TZDB_API_KEY_QUERY_PARAM]: TZDB_API_KEY,
      [TZDB_API_FORMAT_QUERY_PARAM]: 'json',
      [TZDB_API_BY_QUERY_PARAM]: 'position',
      [TZDB_API_LATITUDE_QUERY_PARAM]: searchParams.latitude,
      [TZDB_API_LONGITUDE_QUERY_PARAM]: searchParams.longitude,
    });

    return queryString;
  };

  static getAPITimezoneEndpoint = searchParams => {
    const queryString = TimezoneService.getQueryString(searchParams);

    return `${TZDB_API_TIMEZONE}?${queryString}`;
  };

  static fetchTimezoneByCoords = async searchParams => {
    const apiEndpoint = TimezoneService.getAPITimezoneEndpoint(searchParams);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.timezone.fetchFailed');
    }

    const timezoneData = await response.json();

    if (timezoneData.status !== 'OK') {
      if (isProd) throw new Error('messages.errors.timezone.fetchFailed');
      throw new Error(timezoneData.message);
    }

    return timezoneData;
  };
}
