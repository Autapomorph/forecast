import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeaturedCitiesList from './FeaturedCitiesList';
import Title from '../common/Title';
import TrashButton from '../common/TrashButton';
import { fetchCity, removeCityFromFeatured, clearFeaturedCities } from '../../store/cities/actions';
import { getFeaturedCities } from '../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../config/weather';

import { StyledFeaturedCitiesContainer, StyledFeaturedCitiesHeader } from './styles';

export class FeaturedCities extends Component {
  fetchCity = cityId => {
    const { _fetchCity } = this.props;

    _fetchCity({
      [OWM_API_CITY_ID_QUERY_PARAM]: cityId,
    });
  };

  render() {
    const { featuredCities, _removeCityFromFeatured, _clearFeaturedCities } = this.props;

    if (!featuredCities) {
      return null;
    }

    const isEmpty = !Object.keys(featuredCities).length;

    return (
      <StyledFeaturedCitiesContainer>
        <StyledFeaturedCitiesHeader>
          <Title>
            <span>Избранные города</span>
            <span>&nbsp;</span>
          </Title>

          <TrashButton isEmpty={isEmpty} onClick={_clearFeaturedCities} />
        </StyledFeaturedCitiesHeader>

        {!isEmpty && (
          <FeaturedCitiesList
            cities={featuredCities}
            fetchCity={this.fetchCity}
            removeCityFromFeatured={_removeCityFromFeatured}
          />
        )}
      </StyledFeaturedCitiesContainer>
    );
  }
}

const mapStateToProps = state => ({
  featuredCities: getFeaturedCities(state),
});

const mapDispatchToProps = {
  _fetchCity: fetchCity,
  _removeCityFromFeatured: removeCityFromFeatured,
  _clearFeaturedCities: clearFeaturedCities,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedCities);
