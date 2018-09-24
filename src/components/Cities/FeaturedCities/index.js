import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeaturedCitiesList from './FeaturedCitiesList';
import Title from '../../common/Title';
import TrashButton from '../../common/buttons/TrashButton';
import {
  fetchCityWeather,
  removeCityFromFeatured,
  clearFeaturedCities,
} from '../../../store/cities/actions';
import { getFeaturedCities } from '../../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../../config/weather';

import { StyledFeaturedCitiesSection, StyledFeaturedCitiesHeader } from './styles';

export class FeaturedCities extends Component {
  fetchCity = cityId => {
    const { _fetchCityWeather } = this.props;

    _fetchCityWeather({
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
      <StyledFeaturedCitiesSection>
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
      </StyledFeaturedCitiesSection>
    );
  }
}

const mapStateToProps = state => ({
  featuredCities: getFeaturedCities(state),
});

const mapDispatchToProps = {
  _fetchCityWeather: fetchCityWeather,
  _removeCityFromFeatured: removeCityFromFeatured,
  _clearFeaturedCities: clearFeaturedCities,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedCities);
