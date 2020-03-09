import styled from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/Base';

export const TrashButton = styled(BaseIconButton)`
  color: var(--red);

  :hover {
    color: var(--red-dark);
  }
`;
