import styled from 'styled-components/macro';
import '@fortawesome/fontawesome-free/css/solid.min.css';

export const SettingsBar = styled.div`
  padding: 0 10px;

  .Collapsible {
    border-radius: 5px;
    background: var(--white);
    color: var(--contrast-text-color);
  }

  .Collapsible__contentOuter {
    border: 1px solid var(--light-gray);
    border-radius: 5px;
  }

  .Collapsible__contentInner {
    padding: 10px;
  }

  .Collapsible__trigger {
    display: block;
    position: relative;
    padding: 10px;
    border: 1px solid var(--light-gray);
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    ::after {
      content: '\f107';
      display: block;
      position: absolute;
      top: 10px;
      right: 10px;
      /* stylelint-disable */
      font-family: 'Font Awesome 5 Free';
      /* stylelint-enable */
      transition: transform 0.4s;
    }

    &.is-open {
      border-bottom: none;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;

      ::after {
        transform: rotateZ(180deg);
      }

      + .Collapsible__contentOuter {
        border-top: none;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
      }
    }

    &.is-closed {
      transition: all 0.4s cubic-bezier(1, 0, 1, 0);

      + .Collapsible__contentOuter {
        border: none;
      }
    }
  }
`;
