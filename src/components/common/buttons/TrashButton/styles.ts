import styled from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/BaseIconButton';

// eslint-disable-next-line import/prefer-default-export
export const StyledTrashButton = styled(BaseIconButton)`
  color: var(--red);

  :hover {
    color: var(--dark-red);
  }
`;
