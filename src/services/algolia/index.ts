import {
  ALGOLIA_API_PLACES,
  ALGOLIA_API_REVERSE,
  ALGOLIA_APP_ID_QUERY_PARAM,
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY_QUERY_PARAM,
  ALGOLIA_API_KEY,
  ALGOLIA_API_TYPE_QUERY_PARAM,
  ALGOLIA_API_AROUND_LAT_LNG_VIA_IP_QUERY_PARAM,
  ALGOLIA_API_SEARCH_QUERY_PARAM,
  ALGOLIA_API_LATLNG_QUERY_PARAM,
} from '../../config/algolia';
import combineQueryParams from '../../utils/url/combineQueryParams';
import { isProd } from '../../utils';
import { ICitiesAPIRequest, ICitiesAPIResponse, ICoords } from '../../models';

export default class AlgoliaService {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  private static getQueryString = (searchParams: Record<string, any>): string => {
    const queryString = combineQueryParams(
      {
        [ALGOLIA_APP_ID_QUERY_PARAM]: ALGOLIA_APP_ID,
        [ALGOLIA_API_KEY_QUERY_PARAM]: ALGOLIA_API_KEY,
        ...searchParams,
      },
      { arrayFormat: 'repeat' },
    );

    return queryString;
  };

  private static getAPISearchEndpoint = (searchTerm: string): string => {
    const queryObject: ICitiesAPIRequest = {
      [ALGOLIA_API_SEARCH_QUERY_PARAM]: searchTerm,
      [ALGOLIA_API_AROUND_LAT_LNG_VIA_IP_QUERY_PARAM]: false,
      [ALGOLIA_API_TYPE_QUERY_PARAM]: 'city',
    };

    const queryString = AlgoliaService.getQueryString(queryObject);

    return `${ALGOLIA_API_PLACES}?${queryString}`;
  };

  private static getAPIFindNearbyEndpoint = ({ latitude, longitude }: ICoords): string => {
    const queryObject: ICitiesAPIRequest = {
      [ALGOLIA_API_LATLNG_QUERY_PARAM]: `${latitude},${longitude}`,
    };

    const queryString = AlgoliaService.getQueryString(queryObject);

    return `${ALGOLIA_API_REVERSE}?${queryString}`;
  };

  public static fetchCitiesByName = async (searchTerm: string): Promise<ICitiesAPIResponse> => {
    const apiEndpoint = AlgoliaService.getAPISearchEndpoint(searchTerm);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.Algolia.search.fetchFailed');
    }

    const citiesData: ICitiesAPIResponse = await response.json();

    if (citiesData.status && citiesData.message) {
      if (isProd) throw new Error('messages.errors.Algolia.search.fetchFailed');
      throw new Error(citiesData.message);
    }

    return citiesData;
  };

  public static fetchNearbyPlace = async (position: ICoords): Promise<ICitiesAPIResponse> => {
    const apiEndpoint = AlgoliaService.getAPIFindNearbyEndpoint(position);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.Algolia.findNearby.fetchFailed');
    }

    const nearbyData: ICitiesAPIResponse = await response.json();

    if (nearbyData.status && nearbyData.message) {
      if (isProd) throw new Error('messages.errors.Algolia.findNearby.fetchFailed');
      throw new Error(nearbyData.message);
    }

    return nearbyData;
  };
}
