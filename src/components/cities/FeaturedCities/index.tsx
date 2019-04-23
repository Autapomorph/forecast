import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { withTranslation, WithTranslation } from 'react-i18next';

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

type FeaturedCitiesProps = IPropsFromState & IPropsFromDispatch & WithTranslation;

export class FeaturedCities extends Component<FeaturedCitiesProps> {
  private fetchCityByPosition = (position: ICoords) => {
    const { _fetchCityWeatherByPosition } = this.props;

    _fetchCityWeatherByPosition(position);
  };

  private onDragEnd = ({ source, destination }: DropResult) => {
    const { _reorderFeaturedCities } = this.props;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    _reorderFeaturedCities(source.index, destination.index);
  };

  public render(): React.ReactElement {
    const { t, featuredCities, _removeCityFromFeatured, _clearFeaturedCities } = this.props;

    const isEmpty = !featuredCities || !Object.keys(featuredCities).length;

    return (
      <StyledFeaturedCitiesSection>
        <StyledFeaturedCitiesHeader>
          <Title>{t('cities.featured.title')}</Title>

          <TrashButton isEmpty={isEmpty} onClick={_clearFeaturedCities} />
        </StyledFeaturedCitiesHeader>

        {isEmpty && <EmptyResult>{t('cities.featured.addToFeatured')}</EmptyResult>}

        {!isEmpty && (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <FeaturedCitiesList
              cities={featuredCities}
              fetchCity={this.fetchCityByPosition}
              removeCityFromFeatured={_removeCityFromFeatured}
            />
          </DragDropContext>
        )}
      </StyledFeaturedCitiesSection>
    );
  }
}

const mapStateToProps = (state: RootState): IPropsFromState => ({
  featuredCities: getFeaturedCities(state),
});

const mapDispatchToProps: IPropsFromDispatch = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _removeCityFromFeatured: removeCityFromFeatured,
  _clearFeaturedCities: clearFeaturedCities,
  _reorderFeaturedCities: reorderFeaturedCities,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(FeaturedCities));
