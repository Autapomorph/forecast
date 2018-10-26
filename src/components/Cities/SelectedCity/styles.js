import styled from 'styled-components';

import Error from '../../common/messages/Error';

export const StyledSelectedCitySection = styled.section`
  grid-area: cities;
  padding: 0 10px;
`;

export const StyledSelectedCityError = styled(Error)`
  margin: 10px 0;
`;
