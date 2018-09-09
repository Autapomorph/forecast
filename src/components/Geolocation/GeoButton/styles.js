import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledGeoButton = styled.button.attrs({
  type: 'submit',
})`
  width: 80%;
  background: var(--white);
  color: var(--base-text-color);
  padding: 5px 10px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: var(--light-gray);
    color: var(--base-text-color);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--light-gray);
      color: var(--disabled-text-color);
      cursor: default;

      &:hover {
        color: var(--disabled-text-color);
      }
    `};

  @media screen and (min-width: 500px) {
    width: auto;
  }
`;
