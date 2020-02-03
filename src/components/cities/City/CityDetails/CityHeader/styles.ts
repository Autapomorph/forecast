import styled from 'styled-components/macro';

import { Title } from 'components/common/Title/styles';

export const CityHeader = styled.div`
  grid-area: city-title;
  display: flex;

  ${Title} {
    flex-grow: 1;
  }
`;

export const TitleButtonsWrapper = styled.div`
  flex-shrink: 0;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
