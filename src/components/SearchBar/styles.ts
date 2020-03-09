import styled, { css } from 'styled-components/macro';

import { ThemeProp } from 'models';

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
  background: ${({ theme }: ThemeProp) => theme.inputBg};
  color: ${({ theme }: ThemeProp) => theme.inputColor};
  padding: 10px;
  border: 1px solid ${({ theme }: ThemeProp) => theme.borderColor};
  border-right: 0;
  border-radius: 5px 0 0 5px;
  font-size: 1.3rem;
  line-height: 1.3;
  outline: none;

  ::placeholder {
    color: ${({ theme }: ThemeProp) => theme.inputPlaceholderColor};
  }

  ::selection {
    background: ${({ theme }: ThemeProp) => theme.inputSelectionBg};
    color: ${({ theme }: ThemeProp) => theme.inputSelectionColor};
  }
`;

export const InputButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
`;

export const InputButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 5px 10px;
  border: none;
  border-right: 1px solid ${({ theme }: ThemeProp) => theme.menuItemBorderColor};
  background: ${({ theme }: ThemeProp) => theme.menuItemBg};
  color: ${({ theme }: ThemeProp) => theme.menuItemColor};
  font-size: 1.5rem;
  transition: 0.3s;
  cursor: pointer;

  :last-child {
    border: none;
    border-radius: 0 5px 5px 0;
  }

  :hover {
    background: ${({ theme }: ThemeProp) => theme.menuItemHoverBg};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }: ThemeProp) => theme.menuItemDisabledBg};
      color: ${({ theme }: ThemeProp) => theme.menuItemDisabledColor};
      cursor: default;

      :hover {
        background: ${({ theme }: ThemeProp) => theme.menuItemDisabledBg};
        color: ${({ theme }: ThemeProp) => theme.menuItemDisabledColor};
      }
    `}
`;

export const SettingsButton = styled(InputButton)``;

export const SearchButton = styled(InputButton).attrs({
  type: 'submit',
})``;

export const ClearButton = styled(InputButton)`
  border: none;
  border-top: 1px solid ${({ theme }: ThemeProp) => theme.borderColor};
  border-bottom: 1px solid ${({ theme }: ThemeProp) => theme.borderColor};
  background: ${({ theme }: ThemeProp) => theme.menuClearButtonBg};
  color: ${({ theme }: ThemeProp) => theme.menuClearButtonColor};
  outline: none;
  transition: none;

  :hover {
    background: ${({ theme }: ThemeProp) => theme.menuClearButtonBg};
    color: ${({ theme }: ThemeProp) => theme.menuClearButtonHoverColor};
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
