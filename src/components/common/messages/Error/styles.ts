import styled from 'styled-components/macro';

import Message from 'components/common/messages/Message';

export const ErrorMessage = styled(Message)`
  background: var(--bg-error);
  color: var(--error-text-color);
`;
