import styled, { css } from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/Base';

type Props = {
  isDragging: boolean;
};

export const ReorderButton = styled(BaseIconButton)`
  color: var(--gray-light-lighter);

  :hover {
    color: var(--gray);
  }

  ${({ isDragging }: Props) =>
    isDragging &&
    css`
      color: var(--gray-dark-darker);
    `}
`;
