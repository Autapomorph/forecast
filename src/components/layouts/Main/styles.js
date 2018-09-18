import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'header'
    'main';
  grid-gap: 20px;

  min-width: 320px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const StyledLayoutContent = styled.main`
  display: grid;
  grid-area: main;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'geolocation'
    'cities'
    'featured-cities';
`;
