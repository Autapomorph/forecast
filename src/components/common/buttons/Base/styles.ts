import styled from 'styled-components/macro';

export const IconButton = styled.button.attrs({
  type: 'button',
})`
  padding: 5px;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;

  :hover {
    color: var(--white-dark);
  }
`;
