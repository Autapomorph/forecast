import styled, { css } from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  width: 100%;
  padding: 0 10px;
`;

export const StyledSearchInput = styled.input.attrs({
  type: 'text',
})`
  flex-grow: 1;
  background: var(--white);
  padding: 5px;
  border: 1px solid var(--gray);
  border-radius: 5px 0 0 5px;
  font-size: 1.5rem;
  outline: none;
`;

export const StyledSearchButton = styled.button.attrs({
  type: 'submit',
})`
  flex-shrink: 0;
  padding: 5px 10px;
  border: 1px solid var(--gray);
  border-left: 0;
  border-radius: 0 5px 5px 0;
  background: var(--white);
  color: var(--base-text-color);
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
`;
