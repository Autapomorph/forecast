import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledCountryFlag = styled.span`
  display: inline-block;
  position: relative;
  width: 1.33333333em;
  background-image: ${({ country }) => `url(/images/countries/flags/4x3/${country}.svg)`};
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;

  ::before {
    content: '\00a0';
  }

  ${
    /* sc-dec */ ({ background }) =>
      background &&
      css`
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
      `
  }

  ${
    /* sc-dec */ ({ squared }) =>
      squared &&
      css`
        width: 1em;
        background-image: ${({ country }) => `url(/images/countries/flags/1x1/${country}.svg)`};
      `
  }

  ${
    /* sc-dec */ ({ size }) =>
      size &&
      css`
        font-size: ${size};
      `
  }
`;
