import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeaturedCitiesList from './FeaturedCitiesList';
import TrashButton from '../common/TrashButton';
import { fetchCity, removeCityFromFeatured, clearFeaturedCities } from '../../store/cities/actions';
import { getFeaturedCities } from '../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../config/weather';

import { StyledFeaturedCities } from './styles';

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
      <StyledFeaturedCities>
        <h3>
          FEATURED CITIES
          <span>&nbsp;</span>
          <TrashButton isEmpty={isEmpty} onClick={_clearFeaturedCities} />
        </h3>
        {!isEmpty && (
          <FeaturedCitiesList
            cities={featuredCities}
            fetchCity={this.fetchCity}
            removeCityFromFeatured={_removeCityFromFeatured}
          />
        )}
      </StyledFeaturedCities>
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
