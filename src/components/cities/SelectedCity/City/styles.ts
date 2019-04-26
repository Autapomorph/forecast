import styled from 'styled-components/macro';

// eslint-disable-next-line import/prefer-default-export
export const StyledCityWrapper = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'city-title city-title'
      'city-weather city-forecast';
  }
`;
