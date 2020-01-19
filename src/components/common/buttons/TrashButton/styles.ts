import styled from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/BaseIconButton';

export const TrashButton = styled(BaseIconButton)`
  color: var(--red);

  :hover {
    color: var(--dark-red);
  }
`;
