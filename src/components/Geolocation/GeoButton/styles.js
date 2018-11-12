import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledGeoButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 5px 10px;
  border: 0;
  border-left: 1px solid var(--gray);
  border-radius: 0 5px 5px 0;
  background: var(--light-gray);
  color: var(--contrast-text-color);
  font-size: 1.5rem;
  cursor: pointer;

  :hover {
    background: var(--gray);
  }

  ${/* sc-dec */ ({ disabled }) =>
    disabled &&
    css`
      background: var(--light-gray);
      color: var(--disabled-text-color);
      cursor: default;

      :hover {
        background: var(--light-gray);
        color: var(--disabled-text-color);
      }
    `}
`;
