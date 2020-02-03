import styled, { css } from 'styled-components/macro';

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 15px;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  flex-grow: 1;
  background: var(--white);
  padding: 10px;
  border: 1px solid var(--light-gray);
  border-right: 0;
  border-radius: 5px 0 0 5px;
  font-size: 1.3rem;
  line-height: 1.2;
  outline: none;

  ::selection {
    background: var(--bg-violet);
    color: var(--base-text-color);
  }
`;

export const InputButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: 0;
  border-right: 1px solid var(--gray);
  background: var(--light-gray);
  color: var(--contrast-text-color);
  font-size: 1.5rem;
  transition: 0.3s;
  cursor: pointer;

  :last-child {
    border: 0;
    border-radius: 0 5px 5px 0;
  }

  :hover {
    background: var(--gray);
  }

  ${({ disabled }) =>
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

export const SearchButton = styled(InputButton).attrs({
  type: 'submit',
})``;

export const ClearButton = styled(InputButton)`
  border: 0;
  background: var(--white);
  color: var(--secondary-text-color);
  outline: none;

  :hover {
    background: var(--white);
    color: var(--contrast-text-color);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}

  svg {
    opacity: 1;
    transition: 0.3s;

    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0;
      `}
  }
`;
