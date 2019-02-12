import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { UnitsFormatContext } from '~/store/settings/context';
import City from './City';
import Loader from '~/components/common/messages/Loader';
import Message from '~/components/common/messages/Message';
import {
  fetchCityWeatherByPosition,
  addCityToFeatured,
  removeCityFromFeatured,
} from '~/store/cities/actions';
import {
  getSelectedCity,
  getIsSelectedCityActive,
  getIsSelectedCityLoading,
  getSelectedCityErrorMessage,
  getIsFeaturedCity,
  getCurrentUnitsFormat,
} from '~/store/rootSelectors';

import { StyledSelectedCitySection } from './styles';

export class SelectedCity extends Component {
  toastId = 'cityError';

  componentDidUpdate() {
    const { t, isLoading, errorMessage } = this.props;
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(this.toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(this.toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage), {
        toastId: this.toastId,
        autoClose: false,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(this.toastId);
    }
  }

  fetchCityByPosition = position => {
    const { _fetchCityWeatherByPosition } = this.props;

    _fetchCityWeatherByPosition(position);
  };

  render() {
    const {
      city,
      isActive,
      isLoading,
      errorMessage,
      unitsFormat,
      checkIfFeatured,
      _addCityToFeatured,
      _removeCityFromFeatured,
    } = this.props;

    if (!isActive) {
      return null;
    }

    if (isLoading) {
      return (
        <StyledSelectedCitySection isLoading>
          <Loader />
        </StyledSelectedCitySection>
      );
    }

    if (errorMessage) {
      return (
        <StyledSelectedCitySection>
          <Message>¯\_(ツ)_/¯</Message>
        </StyledSelectedCitySection>
      );
    }

    return (
      <StyledSelectedCitySection>
        <UnitsFormatContext.Provider value={unitsFormat}>
          <City
            city={city}
            isFeatured={checkIfFeatured(city.id)}
            refetchCityWeather={() => this.fetchCityByPosition(city.coords)}
            addCityToFeatured={_addCityToFeatured}
            removeCityFromFeatured={_removeCityFromFeatured}
          />
        </UnitsFormatContext.Provider>
      </StyledSelectedCitySection>
    );
  }
}

const mapStateToProps = state => ({
  city: getSelectedCity(state),
  isActive: getIsSelectedCityActive(state),
  isLoading: getIsSelectedCityLoading(state),
  errorMessage: getSelectedCityErrorMessage(state),
  unitsFormat: getCurrentUnitsFormat(state),

  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatchToProps = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(SelectedCity));
