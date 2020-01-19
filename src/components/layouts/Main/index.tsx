import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Header from 'components/Header';
import SelectedCity from 'components/cities/SelectedCity';
import SearchResults from 'components/cities/SearchResults';
import FeaturedCities from 'components/cities/FeaturedCities';

import 'react-toastify/dist/ReactToastify.min.css';

import * as S from './styles';

const MainLayout: React.FC = (): React.ReactElement => (
  <S.LayoutWrapper>
    <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />

    <S.HeaderWrapper>
      <Header />
    </S.HeaderWrapper>

    <S.ContentWrapper>
      <SelectedCity />
      <SearchResults />
      <FeaturedCities />
    </S.ContentWrapper>
  </S.LayoutWrapper>
);

export default MainLayout;
