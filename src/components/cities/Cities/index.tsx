import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { useTranslation } from 'react-i18next';

import { RootState } from 'store/types';
import {
  getCities,
  getTotalCount,
  getOffset,
  getSearchTerm,
  getIsCitiesActive,
  getIsCitiesLoading,
  getCitiesErrorMessage,
  getIsFeatured,
  getCurrentUnitsFormat,
} from 'store/rootSelectors';
import {
  fetchCititesByName,
  fetchWeatherByPosition,
  addToFeatured,
  removeFromFeatured,
} from 'store/cities/actions';
import UnitsFormatContext from 'context/unitsFormat';
import Title from 'components/common/Title';
import Loader from 'components/common/messages/Loader';
import Message from 'components/common/messages/Base';
import EmptyResult from 'components/common/messages/EmptyResult';
import useToast from 'utils/hooks/useToast';
import List from './List';
import Pagination from './Pagination';

import * as S from './styles';

type Props = ConnectedProps<typeof connector>;

export const Cities = ({
  cities,
  totalCount,
  offset,
  searchTerm,
  isActive,
  isLoading,
  errorMessage,
  unitsFormat,
  checkIfFeatured,
  _fetchCititesByName,
  _fetchCityByPosition,
  _addToFeatured,
  _removeFromFeatured,
}: Props): React.ReactElement | null => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 8;
  const { t } = useTranslation();
  const tC = (key: string, options?: object): string => t(`cities.cities.${key}`, options);

  useToast({
    toastId: 'cityError',
    autoClose: false,
    isLoading,
    errorMessage,
  });

  useUpdateEffect(() => {
    _fetchCititesByName(searchTerm, currentPage * perPage);
  }, [currentPage]);

  useUpdateEffect(() => {
    if (offset === 0) {
      setCurrentPage(0);
    }
  }, [offset]);

  useUpdateEffect(() => {
    setCurrentPage(0);
  }, [searchTerm]);

  if (!isActive || !cities) return null;

  const citiesCount = Object.keys(cities).length;
  const isEmpty = !citiesCount;
  const isLoadedEmpty = !isLoading && !errorMessage && isEmpty;
  const isLoadedNotEmpty = !isLoading && !errorMessage && !isEmpty;

  return (
    <S.CitiesSection isLoading={isLoading}>
      <S.CitiesHeader>
        <Title>{tC('title', { searchTerm })}</Title>
      </S.CitiesHeader>

      {isLoading ? <Loader /> : null}
      {errorMessage ? <Message>¯\_(ツ)_/¯</Message> : null}
      {isLoadedEmpty ? <EmptyResult>{tC('emptyResult')}</EmptyResult> : null}

      {isLoadedNotEmpty && (
        <UnitsFormatContext.Provider value={unitsFormat}>
          <List
            cities={cities}
            checkIfFeatured={checkIfFeatured}
            fetchCity={_fetchCityByPosition}
            addToFeatured={_addToFeatured}
            removeFromFeatured={_removeFromFeatured}
          />
          <Pagination
            total={totalCount}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </UnitsFormatContext.Provider>
      )}
    </S.CitiesSection>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  cities: getCities(state),
  totalCount: getTotalCount(state),
  offset: getOffset(state),
  searchTerm: getSearchTerm(state),
  isActive: getIsCitiesActive(state),
  isLoading: getIsCitiesLoading(state),
  errorMessage: getCitiesErrorMessage(state),
  unitsFormat: getCurrentUnitsFormat(state),
  checkIfFeatured: getIsFeatured(state),
});

const mapDispatch = {
  _fetchCititesByName: fetchCititesByName,
  _fetchCityByPosition: fetchWeatherByPosition,
  _addToFeatured: addToFeatured,
  _removeFromFeatured: removeFromFeatured,
};

const connector = connect(mapState, mapDispatch);
export default connector(Cities);
