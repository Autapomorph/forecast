import React, { Component } from 'react';
import { connect } from 'react-redux';

import City from './City';
import Loader from '../../common/messages/Loader';
import Error from '../../common/messages/Error';
import {
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
} from '../../../store/cities/actions';
import {
  getSelectedCity,
  getIsSelectedCityActive,
  getIsSelectedCityLoading,
  getSelectedCityErrorMessage,
  getIsFeaturedCity,
} from '../../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../../config/weather';

export class SelectedCity extends Component {
  fetchCity = cityId => {
    const { _fetchCity } = this.props;

    _fetchCity({
      [OWM_API_CITY_ID_QUERY_PARAM]: cityId,
    });
  };

  render() {
    const {
      city,
      isActive,
      isLoading,
      errorMessage,
      checkIfFeatured,
      _addCityToFeatured,
      _removeCityFromFeatured,
    } = this.props;

    if (!isActive) {
      return null;
    }

    if (isLoading) {
      return <Loader text="fetching city" />;
    }

    if (errorMessage) {
      return <Error>{errorMessage}</Error>;
    }

    if (!city) {
      return <div>no data</div>;
    }

    return (
      <City
        city={city}
        isFeatured={checkIfFeatured(city.id)}
        refetchCity={() => this.fetchCity(city.id)}
        addCityToFeatured={_addCityToFeatured}
        removeCityFromFeatured={_removeCityFromFeatured}
      />
    );
  }
}

const mapStateToProps = state => ({
  city: getSelectedCity(state),
  isActive: getIsSelectedCityActive(state),
  isLoading: getIsSelectedCityLoading(state),
  errorMessage: getSelectedCityErrorMessage(state),

  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatchToProps = {
  _fetchCity: fetchCity,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedCity);
