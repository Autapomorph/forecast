import styled from 'styled-components';

export const StyledWeatherDetailsWrapper = styled.div`
  grid-area: city-weather;
  margin-top: 12px;

  @media screen and (min-width: 600px) {
    margin-top: 0;
  }
`;

export const StyledWeatherDetailsItem = styled.dl`
  display: grid;
  grid-template-columns: [wd-title] fit-content(50%) [wd-desc] auto;
  grid-gap: 5px 20px;
  align-items: baseline;
`;

export const StyledWeatherDetailsItemTitle = styled.dt`
  grid-column: wd-title;
  margin: 0;
`;

export const StyledWeatherDetailsItemDescription = styled.dd`
  grid-column: wd-desc;
  margin: 0;
`;
