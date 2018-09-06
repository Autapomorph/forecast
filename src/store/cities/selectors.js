// city selectors
export const getSelectedCity = state => state.selectedCity.data;
export const getIsSelectedCityActive = state => state.selectedCity.active;
export const getIsSelectedCityLoading = state => state.selectedCity.loading;
export const getSelectedCityErrorMessage = state => state.selectedCity.errorMessage;

// cities selectors
export const getCities = state => state.cities.data;
export const getIsCitiesActive = state => state.cities.active;
export const getIsCitiesLoading = state => state.cities.loading;
export const getCitiesErrorMessage = state => state.cities.errorMessage;

// featured cities selectors
export const getFeaturedCities = state => state.featuredCities.data;
export const getIsFeaturedCity = state => cityId =>
  Object.prototype.hasOwnProperty.call(state.featuredCities.data, String(cityId));
