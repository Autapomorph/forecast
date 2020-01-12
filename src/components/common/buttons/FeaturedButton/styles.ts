import styled from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/BaseIconButton';

export const StyledFeaturedButton = styled(BaseIconButton)`
  color: var(--yellow);

  :hover {
    color: var(--dark-yellow);
  }
`;
