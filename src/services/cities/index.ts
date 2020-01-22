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
      maxRows: 8,
      ...searchParams,
    };

    return super.getQueryString(queryObject, { arrayFormat: 'repeat' });
  }

  private getSearchEndpoint(searchTerm: string): string {
    const queryObject: Partial<CitiesAPIRequest> = {
      q: searchTerm,
      isNameRequired: true,
      featureClass: ['P'],
      featureCode: ['PPLC', 'PPLA', 'PPLA2', 'PPLA3', 'PPLA4', 'PPL'],
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

  private async fetchCitiesByName(searchTerm: string): Promise<CitiesAPIResponse> {
    let citiesData: CitiesAPIResponse;
    const apiEndpoint = this.getSearchEndpoint(searchTerm);

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

  public request(requestParam: Coords | string): Promise<CitiesAPIResponse> {
    if (typeof requestParam === 'string') {
      return this.fetchCitiesByName(requestParam);
    }
    return this.fetchNearbyPlace(requestParam);
  }
}
export default new CitiesService();
