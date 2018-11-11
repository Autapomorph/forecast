import styled from 'styled-components';

import Error from '../../common/messages/Error';

// eslint-disable-next-line import/prefer-default-export
export const StyledGeoError = styled(Error)`
  width: 100%;
  border: 1px solid transparent;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    width: auto;
    max-width: 320px;
    margin-left: auto;
  }
`;
