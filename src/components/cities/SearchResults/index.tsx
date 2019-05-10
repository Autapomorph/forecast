import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  _fetchCityByPosition: (position: ICoords) => void;
  _addCityToFeatured: typeof addCityToFeatured;
  _removeCityFromFeatured: typeof removeCityFromFeatured;
}

type IProps = IPropsFromState & IPropsFromDispatch;

export const SearchResults: React.FC<IProps> = ({
  cities,
  searchTerm,
  isActive,
  isLoading,
  errorMessage,
  unitsFormat,
  checkIfFeatured,
  _fetchCityByPosition,
  _addCityToFeatured,
  _removeCityFromFeatured,
}): React.ReactElement | null => {
  const { t } = useTranslation();
  const toastId = 'cityError';

  useEffect(() => {
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage || ''), {
        toastId,
        autoClose: false,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(toastId);
    }
  });

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
            fetchCity={_fetchCityByPosition}
            addCityToFeatured={_addCityToFeatured}
            removeCityFromFeatured={_removeCityFromFeatured}
          />
        </UnitsFormatContext.Provider>
      )}
    </StyledSearchResultsSection>
  );
};

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
  _fetchCityByPosition: fetchCityWeatherByPosition,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
