import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Header from 'components/Header';
import City from 'components/cities/City';
import Cities from 'components/cities/Cities';
import Featured from 'components/cities/Featured';
import SettingsModal from 'components/settings/Modal';
import ModalContext from 'context/settingsModal';

import * as S from './styles';

const MainLayout = (): React.ReactElement => {
  const modalContext = useContext(ModalContext);

  return (
    <S.LayoutWrapper>
      <ToastContainer position={toast.POSITION.BOTTOM_CENTER as 'bottom-center'} />

      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.ContentWrapper>
        <City />
        <Cities />
        <Featured />
        <SettingsModal isOpen={modalContext.isOpen} close={modalContext.close} />
      </S.ContentWrapper>
    </S.LayoutWrapper>
  );
};

export default MainLayout;
