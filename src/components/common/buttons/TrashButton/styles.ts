import styled from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/BaseIconButton';

export const StyledTrashButton = styled(BaseIconButton)`
  color: var(--red);

  :hover {
    color: var(--dark-red);
  }
`;
