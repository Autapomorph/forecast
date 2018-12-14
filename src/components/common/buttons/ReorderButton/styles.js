import styled, { css } from 'styled-components';

import BaseIconButton from '../BaseIconButton';

// eslint-disable-next-line import/prefer-default-export
export const StyledReorderButton = styled(BaseIconButton)`
  color: var(--gray);

  :hover {
    color: var(--secondary-text-color);
  }

  ${/* sc-block */ ({ isDragging }) =>
    isDragging &&
    css`
      color: var(--contrast-text-color);
    `}
`;
