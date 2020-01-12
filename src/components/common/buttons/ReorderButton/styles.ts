import styled, { css } from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/BaseIconButton';

type ReorderButtonProps = {
  isDragging: boolean;
};

export const StyledReorderButton = styled(BaseIconButton)`
  color: var(--gray);

  :hover {
    color: var(--secondary-text-color);
  }

  ${/* sc-dec */ ({ isDragging }: ReorderButtonProps) =>
    isDragging &&
    css`
      color: var(--contrast-text-color);
    `}
`;
