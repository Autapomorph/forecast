import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledFeaturedCities = styled.section`
  grid-area: featured-cities;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 320px;

  @media screen and (min-width: 500px) {
    justify-content: flex-start;
  }
`;
