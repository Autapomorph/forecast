import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

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

import * as S from './styles';

type Props = ConnectedProps<typeof connector>;

export const SearchResults: React.FC<Props> = ({
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
  const tC = (key: string, options?: object): string => t(`cities.searchResults.${key}`, options);
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

  const emptyBlock = isLoadedEmpty ? <EmptyResult>{tC('emptyResult')}</EmptyResult> : null;

  return (
    <S.SearchResultsSection isLoading={isLoading}>
      <S.SearchResultsHeader>
        <Title>{tC('title', { searchTerm })}</Title>
      </S.SearchResultsHeader>

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
    </S.SearchResultsSection>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  cities: getCities(state),
  searchTerm: getSearchTerm(state),
  isActive: getIsCitiesActive(state),
  isLoading: getIsCitiesLoading(state),
  errorMessage: getCitiesErrorMessage(state),
  unitsFormat: getCurrentUnitsFormat(state),
  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatch = {
  _fetchCityByPosition: fetchCityWeatherByPosition,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

const connector = connect(mapState, mapDispatch);
export default connector(SearchResults);
