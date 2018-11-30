import styled, { css } from 'styled-components';

import BaseIconButton from '../BaseIconButton';

// eslint-disable-next-line import/prefer-default-export
export const StyledReorderButton = styled(BaseIconButton)`
  margin-right: 8px;
  color: var(--gray);

  ${/* sc-custom */ ({ isDragging }) =>
    isDragging &&
    css`
      color: var(--bg-violet);
    `};

  :hover {
    color: var(--secondary-text-color);
  }
`;
