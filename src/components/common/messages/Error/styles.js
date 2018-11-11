import styled from 'styled-components';

import Message from '../Message';

// eslint-disable-next-line import/prefer-default-export
export const StyledErrorMessage = styled(Message)`
  background: var(--bg-error);
  color: var(--error-text-color);
  font-size: 1.3rem;
`;
