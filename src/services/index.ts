import { IStringifyOptions } from 'qs';

import combineQueryParams from 'utils/url/combineQueryParams';

export default abstract class Service {
  // eslint-disable-next-line @typescript-eslint/ban-types
  protected getQueryString(queryParams: object, options?: IStringifyOptions): string {
    return combineQueryParams(queryParams, options);
  }

  protected async fetch<T>(apiEndpoint: string): Promise<T> {
    try {
      const response = await fetch(apiEndpoint);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    } catch (error) {
      throw new Error('messages.errors.common.fetchFailed');
    }
  }
}
