import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import { StyledGeoError } from './styles';

export class GeoError extends Component {
  state = {
    isVisible: true,
  };

  handleClickOutside = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const { children } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null;
    }

    return <StyledGeoError>{children}</StyledGeoError>;
  }
}

export default onClickOutside(GeoError);
