import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { toast } from 'react-toastify';

import { UnitsFormatContext } from '../../../store/settings/context';
import CitiesList from './CitiesList';
import Title from '../../common/Title';
import Loader from '../../common/messages/Loader';
import Message from '../../common/messages/Message';
import EmptyResult from '../../common/messages/EmptyResult';
import {
  fetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
} from '../../../store/cities/actions';
import {
  getCities,
  getSearchTerm,
  getIsCitiesActive,
  getIsCitiesLoading,
  getCitiesErrorMessage,
  getIsFeaturedCity,
  getCurrentUnitsFormat,
} from '../../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../../config/weather';

import { StyledSearchResultsSection, StyledSearchResultsHeader } from './styles';

export class SearchResults extends Component {
  toastId = 'cityError';

  componentDidUpdate() {
    const { t, isLoading, errorMessage } = this.props;
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(this.toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(this.toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage), {
        toastId: this.toastId,
        autoClose: false,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(this.toastId);
    }
  }

  fetchCityWeather = cityId => {
    const { _fetchCityWeather } = this.props;

    _fetchCityWeather({
      [OWM_API_CITY_ID_QUERY_PARAM]: cityId,
    });
  };

  render() {
    const {
      t,
      cities,
      searchTerm,
      isActive,
      isLoading,
      errorMessage,
      unitsFormat,
      checkIfFeatured,
      _addCityToFeatured,
      _removeCityFromFeatured,
    } = this.props;

    if (!isActive) {
      return null;
    }

    const isEmpty = !cities || !Object.keys(cities).length;
    const isLoadedEmpty = !isLoading && !errorMessage && isEmpty;
    const isLoadedNotEmpty = !isLoading && !errorMessage && !isEmpty;

    const loaderBlock = isLoading ? <Loader /> : null;

    const errorBlock = errorMessage ? <Message>¯\_(ツ)_/¯</Message> : null;

    const emptyBlock = isLoadedEmpty ? (
      <EmptyResult>{t('cities.searchResults.emptyResult')}</EmptyResult>
    ) : null;

    return (
      <StyledSearchResultsSection isLoading={isLoading}>
        <StyledSearchResultsHeader>
          <Title>{t('cities.searchResults.title', { searchTerm })}</Title>
        </StyledSearchResultsHeader>

        {loaderBlock}
        {errorBlock}
        {emptyBlock}

        {isLoadedNotEmpty && (
          <UnitsFormatContext.Provider value={unitsFormat}>
            <CitiesList
              cities={cities}
              checkIfFeatured={checkIfFeatured}
              fetchCityWeather={this.fetchCityWeather}
              addCityToFeatured={_addCityToFeatured}
              removeCityFromFeatured={_removeCityFromFeatured}
            />
          </UnitsFormatContext.Provider>
        )}
      </StyledSearchResultsSection>
    );
  }
}

const mapStateToProps = state => ({
  cities: getCities(state),
  searchTerm: getSearchTerm(state),
  isActive: getIsCitiesActive(state),
  isLoading: getIsCitiesLoading(state),
  errorMessage: getCitiesErrorMessage(state),
  unitsFormat: getCurrentUnitsFormat(state),

  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatchToProps = {
  _fetchCityWeather: fetchCityWeather,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNamespaces()(SearchResults));
