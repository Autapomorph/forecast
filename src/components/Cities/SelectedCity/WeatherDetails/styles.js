import styled from 'styled-components';

export const StyledWeatherDetailsWrapper = styled.div`
  grid-area: city-weather;
  margin-top: 12px;

  @media screen and (min-width: 600px) {
    margin-top: 0;
  }
`;

export const StyledWeatherDetailsItem = styled.dl`
  margin: 5px 0;
`;

export const StyledWeatherDetailsItemTitle = styled.dt`
  display: inline-block;
  width: 25%;

  @media screen and (min-width: 600px) {
    width: 40%;
  }
`;

export const StyledWeatherDetailsItemDescription = styled.dd`
  display: inline-block;
  margin: 0 0 0 10px;
`;
