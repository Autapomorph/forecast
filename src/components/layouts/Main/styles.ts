import styled from 'styled-components/macro';
import 'react-toastify/dist/ReactToastify.min.css';

export const LayoutWrapper = styled.div`
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

export const HeaderWrapper = styled.header`
  grid-area: header;
`;

export const ContentWrapper = styled.main`
  display: grid;
  grid-area: main;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'cities'
    'featured';
`;
