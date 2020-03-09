import styled, { createGlobalStyle } from 'styled-components/macro';

import { ThemeProp } from 'models';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Content = styled.div`
  @media (min-width: 550px) {
    padding-left: 10px;
    padding-right: 30px;
  }
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SettingTitle = styled.span`
  flex-basis: 25%;
  margin-right: 20px;
  text-align: end;
`;

export const SettingContent = styled.div`
  flex-basis: 75%;
`;

export const Modal = createGlobalStyle`
  body.ReactModal__Body--open {
    overflow: hidden;
  }

  .settings-modal__content {
    position: absolute;
    top: 50%;
    left: 10px;
    right: 10px;
    padding: 10px 15px;
    border: 1px solid ${({ theme }: ThemeProp) => theme.modalBorderColor};
    border-radius: 4px;
    background-color: ${({ theme }: ThemeProp) => theme.baseBg};
    background-image: ${({ theme }: ThemeProp) => theme.baseBgImage};
    transform: translateY(-50%);
    outline: none;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    @media (min-width: 450px) {
      width: 500px;
      max-width: 75%;
      left: 50%;
      right: unset;
      transform: translate(-50%, -50%);
    }

    @media (min-width: 800px) {
      max-width: 50%;
    }
  }

  .settings-modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--black-24-75A);
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }

  .settings-modal__overlay--after-open {
    opacity: 1;
  }

  .settings-modal__overlay--before-close {
    opacity: 0;
  }
`;
