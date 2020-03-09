import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';

import CloseButton from 'components/common/buttons/Close';
import UnitsFormats from 'components/settings/UnitsFormats';
import Languages from 'components/settings/Languages';
import ThemeToggler from 'components/settings/ThemeToggler';
import ToggleMode from 'context/toggleMode';

import * as S from './styles';

type Props = {
  isOpen: boolean;
  close: () => void;
};

const Modal = ({ isOpen, close }: Props): React.ReactElement => {
  const { t } = useTranslation();
  const toggleMode = useContext(ToggleMode);

  return (
    <ReactModal
      isOpen={isOpen}
      className={{
        base: 'settings-modal__content',
        afterOpen: 'settings-modal__content--after-open',
        beforeClose: 'settings-modal__content--before-close',
      }}
      overlayClassName={{
        base: 'settings-modal__overlay',
        afterOpen: 'settings-modal__overlay--after-open',
        beforeClose: 'settings-modal__overlay--before-close',
      }}
      contentLabel={t('settings.title')}
      onRequestClose={close}
      closeTimeoutMS={150}
      appElement={document.getElementById('root') ?? undefined}
    >
      <S.Modal />
      <S.Header>
        <S.Title>{t('settings.title')}</S.Title>
        <CloseButton onClick={close} />
      </S.Header>

      <S.Content>
        <Languages />
        <UnitsFormats />
        <ThemeToggler onClick={toggleMode} />
      </S.Content>
    </ReactModal>
  );
};

export default Modal;
