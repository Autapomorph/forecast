import { CitiesAPIRequest, CitiesAPIResponse, Coords } from 'models';
import i18n from 'config/settings/i18n';
import { API_SEARCH, API_FIND_NEARBY, API_KEY } from 'config/geonames';
import { isProd } from 'utils';
import combineQueryParams from 'utils/url/combineQueryParams';

export default class GeonamesService {
  private static getQueryString = (searchParams: Partial<CitiesAPIRequest>): string => {
    const currentLanguage = i18n.languages[0];

    const queryObject: CitiesAPIRequest = {
      username: API_KEY,
      lang: currentLanguage,
      style: 'medium',
      maxRows: 8,
      ...searchParams,
    };

    const queryString = combineQueryParams(queryObject, { arrayFormat: 'repeat' });

    return queryString;
  };

  private static getSearchEndpoint = (searchTerm: string): string => {
    const queryObject: Partial<CitiesAPIRequest> = {
      q: searchTerm,
      isNameRequired: true,
      featureClass: ['P'],
      featureCode: ['PPLC', 'PPLA', 'PPLA2', 'PPLA3', 'PPLA4', 'PPL'],
    };

    const queryString = GeonamesService.getQueryString(queryObject);

    return `${API_SEARCH}?${queryString}`;
  };

  private static getFindNearbyEndpoint = ({ latitude, longitude }: Coords): string => {
    const queryObject: Partial<CitiesAPIRequest> = {
      lat: latitude,
      lng: longitude,
    };

    const queryString = GeonamesService.getQueryString(queryObject);

    return `${API_FIND_NEARBY}?${queryString}`;
  };

  private static fetchCitiesByName = async (searchTerm: string): Promise<CitiesAPIResponse> => {
    const apiEndpoint = GeonamesService.getSearchEndpoint(searchTerm);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.geonames.search.fetchFailed');
    }

    const citiesData: CitiesAPIResponse = await response.json();

    if (citiesData.status) {
      if (isProd) throw new Error('messages.errors.geonames.search.fetchFailed');
      throw new Error(citiesData.status.message);
    }

    return citiesData;
  };

  private static fetchNearbyPlace = async (position: Coords): Promise<CitiesAPIResponse> => {
    const apiEndpoint = GeonamesService.getFindNearbyEndpoint(position);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.geonames.findNearby.fetchFailed');
    }

    const nearbyData: CitiesAPIResponse = await response.json();

    if (nearbyData.status) {
      if (isProd) throw new Error('messages.errors.geonames.findNearby.fetchFailed');
      throw new Error(nearbyData.status.message);
    }

    return nearbyData;
  };

  public static request(requestParam: Coords | string): Promise<CitiesAPIResponse> {
    if (typeof requestParam === 'string') {
      return GeonamesService.fetchCitiesByName(requestParam);
    }
    return GeonamesService.fetchNearbyPlace(requestParam);
  }
}
