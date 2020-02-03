import Service from 'services';
import { CitiesAPIRequest, CitiesAPIResponse, Coords } from 'models';
import i18n from 'config/settings/i18n';
import { API_SEARCH, API_FIND_NEARBY, API_KEY } from 'config/cities';

class CitiesService extends Service {
  protected getQueryString(searchParams: Partial<CitiesAPIRequest>): string {
    const currentLanguage = i18n.languages[0];

    const queryObject: CitiesAPIRequest = {
      username: API_KEY,
      lang: currentLanguage,
      style: 'medium',
      ...searchParams,
    };

    return super.getQueryString(queryObject, { arrayFormat: 'repeat' });
  }

  private getSearchEndpoint(searchTerm: string, offset: number): string {
    const queryObject: Partial<CitiesAPIRequest> = {
      q: searchTerm,
      isNameRequired: true,
      featureClass: ['P'],
      featureCode: ['PPLC', 'PPLA', 'PPLA2', 'PPLA3', 'PPLA4', 'PPL'],
      maxRows: 8,
      startRow: offset,
    };

    const queryString = this.getQueryString(queryObject);
    return `${API_SEARCH}?${queryString}`;
  }

  private getFindNearbyEndpoint({ latitude, longitude }: Coords): string {
    const queryObject: Partial<CitiesAPIRequest> = {
      lat: latitude,
      lng: longitude,
    };

    const queryString = this.getQueryString(queryObject);
    return `${API_FIND_NEARBY}?${queryString}`;
  }

  private async fetchCitiesByName(searchTerm: string, offset: number): Promise<CitiesAPIResponse> {
    let citiesData: CitiesAPIResponse;
    const apiEndpoint = this.getSearchEndpoint(searchTerm, offset);

    try {
      citiesData = await this.fetch(apiEndpoint);
    } catch {
      throw new Error('messages.errors.cities.search.fetchFailed');
    }

    return citiesData;
  }

  private async fetchNearbyPlace(position: Coords): Promise<CitiesAPIResponse> {
    let nearbyData: CitiesAPIResponse;
    const apiEndpoint = this.getFindNearbyEndpoint(position);

    try {
      nearbyData = await this.fetch(apiEndpoint);
    } catch {
      throw new Error('messages.errors.cities.findNearby.fetchFailed');
    }

    return nearbyData;
  }

  /* eslint-disable lines-between-class-members */
  public request(coords: Coords): Promise<CitiesAPIResponse>;
  public request(searchTerm: string, offset: number): Promise<CitiesAPIResponse>;
  public request(requestParam: Coords | string, offset?: number): Promise<CitiesAPIResponse> {
    if (typeof requestParam === 'string' && typeof offset !== 'undefined') {
      return this.fetchCitiesByName(requestParam, offset);
    }

    if (
      typeof requestParam !== 'string' &&
      'latitude' in (requestParam as Coords) &&
      'longitude' in (requestParam as Coords)
    ) {
      return this.fetchNearbyPlace(requestParam);
    }

    throw new TypeError('`requestParam` must be a string or Coords type');
  }
  /* eslint-enable lines-between-class-members */
}

export default new CitiesService();
