import i18n from '~/config/settings/i18n';
import {
  GEONAMES_API_SEARCH,
  GEONAMES_API_FIND_NEARBY,
  GEONAMES_API_KEY_QUERY_PARAM,
  GEONAMES_API_KEY,
  GEONAMES_API_LANG_QUERY_PARAM,
  GEONAMES_API_STYLE_QUERY_PARAM,
  GEONAMES_API_MAX_ROWS_QUERY_PARAM,
  GEONAMES_API_LATITUDE_QUERY_PARAM,
  GEONAMES_API_LONGITUDE_QUERY_PARAM,
  GEONAMES_API_SEARCH_QUERY_PARAM,
  GEONAMES_API_NAME_REQUIRED_QUERY_PARAM,
  GEONAMES_API_FEATURE_CLASS_QUERY_PARAM,
  GEONAMES_API_FEATURE_CODE_QUERY_PARAM,
} from '~/config/geonames';
import combineQueryParams from '~/utils/url/combineQueryParams';
import { isProd } from '~/utils';

export default class GeonamesService {
  static getQueryString = searchParams => {
    const currentLanguage = i18n.languages[0];

    const queryString = combineQueryParams(
      {
        [GEONAMES_API_KEY_QUERY_PARAM]: GEONAMES_API_KEY,
        [GEONAMES_API_LANG_QUERY_PARAM]: currentLanguage,
        [GEONAMES_API_STYLE_QUERY_PARAM]: 'medium',
        [GEONAMES_API_MAX_ROWS_QUERY_PARAM]: 8,
        ...searchParams,
      },
      { arrayFormat: 'repeat' },
    );

    return queryString;
  };

  static getAPISearchEndpoint = searchTerm => {
    const queryString = GeonamesService.getQueryString({
      [GEONAMES_API_SEARCH_QUERY_PARAM]: searchTerm,
      [GEONAMES_API_NAME_REQUIRED_QUERY_PARAM]: true,
      [GEONAMES_API_FEATURE_CLASS_QUERY_PARAM]: ['P'],
      [GEONAMES_API_FEATURE_CODE_QUERY_PARAM]: ['PPLC', 'PPLA', 'PPLA2', 'PPLA3', 'PPLA4', 'PPL'],
    });

    return `${GEONAMES_API_SEARCH}?${queryString}`;
  };

  static getAPIFindNearbyEndpoint = ({ latitude, longitude }) => {
    const queryString = GeonamesService.getQueryString({
      [GEONAMES_API_LATITUDE_QUERY_PARAM]: latitude,
      [GEONAMES_API_LONGITUDE_QUERY_PARAM]: longitude,
    });

    return `${GEONAMES_API_FIND_NEARBY}?${queryString}`;
  };

  static fetchCitiesByName = async searchTerm => {
    const apiEndpoint = GeonamesService.getAPISearchEndpoint(searchTerm);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.geonames.search.fetchFailed');
    }

    const citiesData = await response.json();

    if (citiesData.status) {
      if (isProd) throw new Error('messages.errors.geonames.search.fetchFailed');
      throw new Error(citiesData.status.message);
    }

    return citiesData;
  };

  static fetchNearbyPlace = async position => {
    const apiEndpoint = GeonamesService.getAPIFindNearbyEndpoint(position);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.geonames.findNearby.fetchFailed');
    }

    const nearbyData = await response.json();

    if (nearbyData.status) {
      if (isProd) throw new Error('messages.errors.geonames.findNearby.fetchFailed');
      throw new Error(nearbyData.status.message);
    }

    return nearbyData;
  };
}
