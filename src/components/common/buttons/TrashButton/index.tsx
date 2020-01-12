import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledTrashButton } from './styles';

type Props = {
  isEmpty: boolean;
  onClick: () => void;
} & Partial<FontAwesomeIconProps>;

const TrashButton: React.FC<Props> = ({
  isEmpty = false,
  size = 'lg',
  onClick = () => {},
  ...props
}): React.ReactElement => (
  <>
    {!isEmpty && <StyledTrashButton icon={faTrashAlt} onClick={onClick} size={size} {...props} />}
  </>
);

export default TrashButton;
