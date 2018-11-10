import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledCountryFlag = styled.span`
  background-image: ${({ country }) => `url(/images/countries/flags/4x3/${country}.svg)`};
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  width: 1.33333333em;

  &::before {
    content: '\00a0';
  }

  ${
    /* sc-dec */ ({ background }) =>
      background &&
      css`
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
      `
  }

  ${
    /* sc-dec */ ({ squared }) =>
      squared &&
      css`
        background-image: ${({ country }) => `url(/images/countries/flags/1x1/${country}.svg)`};
        width: 1em;
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
