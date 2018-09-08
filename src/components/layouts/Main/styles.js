import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'header'
    'main';
  grid-gap: 20px;

  max-width: 1000px;
  min-width: 320px;
  margin: 0 auto;
`;

export const StyledLayoutContent = styled.main`
  display: grid;
  grid-area: main;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 20px;

  padding-left: 0;
  padding-right: 0;

  @media screen and (min-width: 340px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 500px) {
    padding: 0 35px;
  }
`;
