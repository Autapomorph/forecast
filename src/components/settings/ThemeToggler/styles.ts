import styled from 'styled-components/macro';

import { ThemeProp } from 'models';

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  box-sizing: content-box;
  width: 52px;
  height: 26px;
  padding: 2px;
  border: 1px solid ${({ theme }: ThemeProp) => theme.borderColor};
  background: ${({ theme }: ThemeProp) => theme.elementBg};
  border-radius: 26px;
  cursor: pointer;
  user-select: none;
  outline: 0;

  ::after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 50%;
    height: 100%;
    border-radius: 26px;
    background: ${({ theme }: ThemeProp) =>
      theme.mode === 'dark' ? theme.baseTextColor : theme.accentElementBg};
    transition: all 300ms ease;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }

  :active::after {
    padding-right: 0.8em;
  }

  ${Checkbox}:checked + & {
    ::after {
      left: 50%;
    }

    :active::after {
      margin-left: -0.8em;
    }
  }
`;
