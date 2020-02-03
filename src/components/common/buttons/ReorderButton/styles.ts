import styled, { css } from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/BaseIconButton';

type Props = {
  isDragging: boolean;
};

export const ReorderButton = styled(BaseIconButton)`
  color: var(--gray);

  :hover {
    color: var(--secondary-text-color);
  }

  ${({ isDragging }: Props) =>
    isDragging &&
    css`
      color: var(--contrast-text-color);
    `}
`;
