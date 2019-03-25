import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { UnitsFormatContext } from '../../../store/settings/context';
import City from './City';
import Loader from '../../common/messages/Loader';
import Message from '../../common/messages/Message';
import {
  fetchCityWeatherByPosition,
  addCityToFeatured,
  removeCityFromFeatured,
} from '../../../store/cities/actions';
import {
  getSelectedCity,
  getIsSelectedCityActive,
  getIsSelectedCityLoading,
  getSelectedCityErrorMessage,
  getIsFeaturedCity,
  getCurrentUnitsFormat,
} from '../../../store/rootSelectors';
import { RootState } from '../../../store/types';
import { ICoords } from '../../../models';

import { StyledSelectedCitySection } from './styles';

interface IPropsFromState {
  city: ReturnType<typeof getSelectedCity>;
  isActive: ReturnType<typeof getIsSelectedCityActive>;
  isLoading: ReturnType<typeof getIsSelectedCityLoading>;
  errorMessage: ReturnType<typeof getSelectedCityErrorMessage>;
  unitsFormat: ReturnType<typeof getCurrentUnitsFormat>;
  checkIfFeatured: ReturnType<typeof getIsFeaturedCity>;
}

interface IPropsFromDispatch {
  _fetchCityWeatherByPosition: (position: ICoords) => void;
  _addCityToFeatured: typeof addCityToFeatured;
  _removeCityFromFeatured: typeof removeCityFromFeatured;
}

type SelectedCityProps = IPropsFromState & IPropsFromDispatch & WithTranslation;

export class SelectedCity extends Component<SelectedCityProps> {
  private toastId = 'cityError';

  public componentDidUpdate(): void {
    const { t, isLoading, errorMessage } = this.props;
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(this.toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(this.toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage || ''), {
        toastId: this.toastId,
        autoClose: false,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(this.toastId);
    }
  }

  private fetchCityByPosition = (position: ICoords) => {
    const { _fetchCityWeatherByPosition } = this.props;

    _fetchCityWeatherByPosition(position);
  };

  public render(): React.ReactElement | null {
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

    if (!isActive || !city) {
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

const mapStateToProps = (state: RootState): IPropsFromState => ({
  city: getSelectedCity(state),
  isActive: getIsSelectedCityActive(state),
  isLoading: getIsSelectedCityLoading(state),
  errorMessage: getSelectedCityErrorMessage(state),
  unitsFormat: getCurrentUnitsFormat(state),

  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatchToProps: IPropsFromDispatch = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(SelectedCity));
