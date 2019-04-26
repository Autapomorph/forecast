import styled from 'styled-components/macro';

import Message from 'components/common/messages/Message';

// eslint-disable-next-line import/prefer-default-export
export const StyledErrorMessage = styled(Message)`
  background: var(--bg-error);
  color: var(--error-text-color);
`;
