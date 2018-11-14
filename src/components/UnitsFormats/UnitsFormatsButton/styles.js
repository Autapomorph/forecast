import styled from 'styled-components';

export const StyledSwitchButton = styled.span`
  flex-grow: 1;
  height: 40px;
  border: 1px solid var(--light-gray);
  background: var(--white);
  color: var(--contrast-text-color);
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: ${({ checked }) => checked && 'underline'};

  :hover {
    border-color: var(--gray);
    background: var(--light-gray);
  }

  :first-child {
    border-radius: 5px 0 0 5px;
  }

  :not(:first-child) {
    margin-left: -1px;
  }

  :last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const StyledLabelText = styled.span`
  overflow: hidden;
`;

export const StyledRadioButton = styled.input.attrs({
  type: 'radio',
})`
  display: none;
`;
