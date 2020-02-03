import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Header from 'components/Header';
import City from 'components/cities/City';
import Cities from 'components/cities/Cities';
import Featured from 'components/cities/Featured';

import * as S from './styles';

const MainLayout = (): React.ReactElement => (
  <S.LayoutWrapper>
    <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />

    <S.HeaderWrapper>
      <Header />
    </S.HeaderWrapper>

    <S.ContentWrapper>
      <City />
      <Cities />
      <Featured />
    </S.ContentWrapper>
  </S.LayoutWrapper>
);

export default MainLayout;
