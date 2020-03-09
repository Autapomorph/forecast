import styled from 'styled-components/macro';

import BaseIconButton from 'components/common/buttons/Base';

export const FeaturedButton = styled(BaseIconButton)`
  color: var(--yellow);

  :hover {
    color: var(--yellow-dark);
  }
`;
