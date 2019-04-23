import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { ICoords } from 'models';
import { RootState } from 'store/types';
import {
  getCities,
  getSearchTerm,
  getIsCitiesActive,
  getIsCitiesLoading,
  getCitiesErrorMessage,
  getIsFeaturedCity,
  getCurrentUnitsFormat,
} from 'store/rootSelectors';
import {
  fetchCityWeatherByPosition,
  addCityToFeatured,
  removeCityFromFeatured,
} from 'store/cities/actions';
import { UnitsFormatContext } from 'store/settings/context';
import Title from 'components/common/Title';
import Loader from 'components/common/messages/Loader';
import Message from 'components/common/messages/Message';
import EmptyResult from 'components/common/messages/EmptyResult';
import CitiesList from './CitiesList';

import { StyledSearchResultsSection, StyledSearchResultsHeader } from './styles';

interface IPropsFromState {
  cities: ReturnType<typeof getCities>;
  searchTerm: ReturnType<typeof getSearchTerm>;
  isActive: ReturnType<typeof getIsCitiesActive>;
  isLoading: ReturnType<typeof getIsCitiesLoading>;
  errorMessage: ReturnType<typeof getCitiesErrorMessage>;
  unitsFormat: ReturnType<typeof getCurrentUnitsFormat>;
  checkIfFeatured: ReturnType<typeof getIsFeaturedCity>;
}

interface IPropsFromDispatch {
  _fetchCityWeatherByPosition: (position: ICoords) => void;
  _addCityToFeatured: typeof addCityToFeatured;
  _removeCityFromFeatured: typeof removeCityFromFeatured;
}

type SearchResultsProps = IPropsFromState & IPropsFromDispatch & WithTranslation;

export class SearchResults extends Component<SearchResultsProps> {
  private toastId = 'cityError';

  public componentDidUpdate(): void {
    const { t, isLoading, errorMessage } = this.props;
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(this.toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(this.toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage || ''), {
        toastId: this.toastId,
        autoClose: false,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(this.toastId);
    }
  }

  private fetchCityByPosition = (position: ICoords) => {
    const { _fetchCityWeatherByPosition } = this.props;

    _fetchCityWeatherByPosition(position);
  };

  public render(): React.ReactElement | null {
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
              fetchCity={this.fetchCityByPosition}
              addCityToFeatured={_addCityToFeatured}
              removeCityFromFeatured={_removeCityFromFeatured}
            />
          </UnitsFormatContext.Provider>
        )}
      </StyledSearchResultsSection>
    );
  }
}

const mapStateToProps = (state: RootState): IPropsFromState => ({
  cities: getCities(state),
  searchTerm: getSearchTerm(state),
  isActive: getIsCitiesActive(state),
  isLoading: getIsCitiesLoading(state),
  errorMessage: getCitiesErrorMessage(state),
  unitsFormat: getCurrentUnitsFormat(state),

  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatchToProps: IPropsFromDispatch = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(SearchResults));
