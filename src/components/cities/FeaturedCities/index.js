import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { withTranslation } from 'react-i18next';

import FeaturedCitiesList from './FeaturedCitiesList';
import Title from '../../common/Title';
import TrashButton from '../../common/buttons/TrashButton';
import EmptyResult from '../../common/messages/EmptyResult';
import {
  fetchCityWeatherByPosition,
  removeCityFromFeatured,
  clearFeaturedCities,
  reorderFeaturedCities,
} from '../../../store/cities/actions';
import { getFeaturedCities } from '../../../store/rootSelectors';

import { StyledFeaturedCitiesSection, StyledFeaturedCitiesHeader } from './styles';

export class FeaturedCities extends Component {
  fetchCityByPosition = position => {
    const { _fetchCityWeatherByPosition } = this.props;

    _fetchCityWeatherByPosition(position);
  };

  onDragEnd = ({ source, destination }) => {
    const { _reorderFeaturedCities } = this.props;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    _reorderFeaturedCities(source.index, destination.index);
  };

  render() {
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

const mapStateToProps = state => ({
  featuredCities: getFeaturedCities(state),
});

const mapDispatchToProps = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _removeCityFromFeatured: removeCityFromFeatured,
  _clearFeaturedCities: clearFeaturedCities,
  _reorderFeaturedCities: reorderFeaturedCities,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(FeaturedCities));
