import React, { Component } from 'react';
import { connect } from 'react-redux';

import CitiesList from './CitiesList';
import Title from '../../common/Title';
import Loader from '../../common/messages/Loader';
import Error from '../../common/messages/Error';
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
} from '../../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../../config/weather';

import { StyledSearchResultsSection, StyledSearchResultsHeader } from './styles';

export class SearchResults extends Component {
  fetchCityWeather = cityId => {
    const { _fetchCityWeather } = this.props;

    _fetchCityWeather({
      [OWM_API_CITY_ID_QUERY_PARAM]: cityId,
    });
  };

  render() {
    const {
      cities,
      searchTerm,
      isActive,
      isLoading,
      errorMessage,
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
    const errorBlock = errorMessage ? <Error>{errorMessage}</Error> : null;
    const emptyBlock = isLoadedEmpty ? (
      <EmptyResult>
        <h2>Города не найдены</h2>
      </EmptyResult>
    ) : null;

    return (
      <StyledSearchResultsSection isLoading={isLoading}>
        <StyledSearchResultsHeader>
          <Title>{`Результаты поиска по запросу "${searchTerm}"`}</Title>
        </StyledSearchResultsHeader>

        {loaderBlock}
        {errorBlock}
        {emptyBlock}

        {isLoadedNotEmpty && (
          <CitiesList
            cities={cities}
            checkIfFeatured={checkIfFeatured}
            fetchCityWeather={this.fetchCityWeather}
            addCityToFeatured={_addCityToFeatured}
            removeCityFromFeatured={_removeCityFromFeatured}
          />
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
)(SearchResults);
