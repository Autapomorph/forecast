import styled from 'styled-components/macro';

import { Title } from 'components/common/Title/styles';

export const CityHeader = styled.div`
  grid-area: city-title;
  display: flex;
  align-items: baseline;

  ${Title} {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const TitleButtonsWrapper = styled.div`
  flex-shrink: 0;
`;
