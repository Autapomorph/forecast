import styled from 'styled-components';

export const StyledForecastWrapper = styled.div`
  grid-area: city-forecast;
  max-width: calc(100% - 25px * 2);
  margin: 30px auto 0;

  @media screen and (min-width: 600px) {
    margin: 0 auto;
  }
`;

export const StyledForecastItem = styled.div`
  outline: none;
`;

export const StyledForecastItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const StyledDescription = styled.div`
  display: block;
  height: 2em;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* stylelint-disable */
export const StyledWeatherIcon = styled(StyledForecastItemDetail)``;
export const StyledTemperature = styled(StyledForecastItemDetail)``;
export const StyledTimestamp = styled(StyledForecastItemDetail)``;
/* stylelint-enable */

export const StyledHumidity = styled(StyledForecastItemDetail)`
  flex-direction: row;
  color: var(--light-gray);
`;

export const StyledPressure = styled(StyledForecastItemDetail)`
  flex-direction: row;
  color: var(--light-gray);
`;

export const StyledWind = styled(StyledForecastItemDetail)`
  flex-direction: row;
  color: var(--light-gray);
`;

export const StyledDivider = styled.hr`
  border: 0;
  border-top: 1px solid var(--gray);
  margin: 5px 0;
`;
