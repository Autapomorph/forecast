// eslint-disable-next-line import/prefer-default-export
export enum CitiesActionTypes {
  /**
   * city action types
   */
  CITY_WEATHER_FETCH_REQUEST = '@cities/CITY_WEATHER_FETCH_REQUEST',
  CITY_WEATHER_FETCH_SUCCESS = '@cities/CITY_WEATHER_FETCH_SUCCESS',
  CITY_WEATHER_FETCH_FAILURE = '@cities/CITY_WEATHER_FETCH_FAILURE',

  /**
   * cities action types
   */
  CITIES_FETCH_REQUEST = '@cities/CITIES_FETCH_REQUEST',
  CITIES_FETCH_SUCCESS = '@cities/CITIES_FETCH_SUCCESS',
  CITIES_FETCH_FAILURE = '@cities/CITIES_FETCH_FAILURE',

  /**
   * featured cities action types
   */
  FEATURED_CITY_ADD = '@cities/FEATURED_CITY_ADD',
  FEATURED_CITY_REMOVE = '@cities/FEATURED_CITY_REMOVE',
  FEATURED_CITIES_CLEAR = '@cities/FEATURED_CITIES_CLEAR',
  FEATURED_CITIES_REORDER = '@cities/FEATURED_CITIES_REORDER',
}
