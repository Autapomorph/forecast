import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';

import { RootState } from 'store/types';
import { getFeaturedCities } from 'store/rootSelectors';
import {
  fetchCityWeatherByPosition,
  removeCityFromFeatured,
  clearFeaturedCities,
  reorderFeaturedCities,
} from 'store/cities/actions';
import Title from 'components/common/Title';
import TrashButton from 'components/common/buttons/TrashButton';
import EmptyResult from 'components/common/messages/EmptyResult';
import FeaturedCitiesList from './FeaturedCitiesList';

import { StyledFeaturedCitiesSection, StyledFeaturedCitiesHeader } from './styles';

type Props = ConnectedProps<typeof connector>;

export const FeaturedCities: React.FC<Props> = ({
  featuredCities,
  _fetchCityWeatherByPosition,
  _removeCityFromFeatured,
  _clearFeaturedCities,
  _reorderFeaturedCities,
}): React.ReactElement => {
  const { t } = useTranslation();
  const isEmpty = !featuredCities || !Object.keys(featuredCities).length;

  const onDragEnd = ({ source, destination }: DropResult): void => {
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    _reorderFeaturedCities(source.index, destination.index);
  };

  return (
    <StyledFeaturedCitiesSection>
      <StyledFeaturedCitiesHeader>
        <Title>{t('cities.featured.title')}</Title>

        <TrashButton isEmpty={isEmpty} onClick={_clearFeaturedCities} />
      </StyledFeaturedCitiesHeader>

      {isEmpty && <EmptyResult>{t('cities.featured.addToFeatured')}</EmptyResult>}

      {!isEmpty && (
        <DragDropContext onDragEnd={onDragEnd}>
          <FeaturedCitiesList
            cities={featuredCities}
            fetchCity={_fetchCityWeatherByPosition}
            removeCityFromFeatured={_removeCityFromFeatured}
          />
        </DragDropContext>
      )}
    </StyledFeaturedCitiesSection>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  featuredCities: getFeaturedCities(state),
});

const mapDispatch = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _removeCityFromFeatured: removeCityFromFeatured,
  _clearFeaturedCities: clearFeaturedCities,
  _reorderFeaturedCities: reorderFeaturedCities,
};

const connector = connect(mapState, mapDispatch);
export default connector(FeaturedCities);
