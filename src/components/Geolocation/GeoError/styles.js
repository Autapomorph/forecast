import styled from 'styled-components';

import Error from '../../common/messages/Error';

// eslint-disable-next-line import/prefer-default-export
export const StyledGeoError = styled(Error)`
  width: 100%;
  margin-top: 10px;
  border: 1px solid transparent;
  font-size: 1.5rem;

  @media screen and (min-width: 600px) {
    width: auto;
    max-width: 320px;
    padding: 5px;
    margin-top: 0;
    margin-left: 10px;
  }
`;
