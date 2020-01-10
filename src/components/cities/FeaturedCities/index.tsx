import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';

import { ICoords } from 'models';
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

interface IPropsFromState {
  featuredCities: ReturnType<typeof getFeaturedCities>;
}

interface IPropsFromDispatch {
  _fetchCityWeatherByPosition: (position: ICoords) => void;
  _removeCityFromFeatured: typeof removeCityFromFeatured;
  _clearFeaturedCities: typeof clearFeaturedCities;
  _reorderFeaturedCities: typeof reorderFeaturedCities;
}

type IProps = IPropsFromState & IPropsFromDispatch;

export const FeaturedCities: React.FC<IProps> = ({
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

const mapState = (state: RootState): IPropsFromState => ({
  featuredCities: getFeaturedCities(state),
});

const mapDispatch: IPropsFromDispatch = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _removeCityFromFeatured: removeCityFromFeatured,
  _clearFeaturedCities: clearFeaturedCities,
  _reorderFeaturedCities: reorderFeaturedCities,
};

export default connect(mapState, mapDispatch)(FeaturedCities);
