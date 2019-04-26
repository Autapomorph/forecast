import styled from 'styled-components/macro';

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

  @media screen and (min-width: 380px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 450px) {
    padding: 0 35px;
  }
`;

export const StyledHeaderWrapper = styled.header`
  grid-area: header;
`;

export const StyledContentWrapper = styled.main`
  display: grid;
  grid-area: main;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'cities'
    'featured-cities';
`;
