import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Header from 'components/Header';
import SelectedCity from 'components/cities/SelectedCity';
import SearchResults from 'components/cities/SearchResults';
import FeaturedCities from 'components/cities/FeaturedCities';

import 'react-toastify/dist/ReactToastify.min.css';

import { StyledLayoutWrapper, StyledHeaderWrapper, StyledContentWrapper } from './styles';

const MainLayout: React.FC = (): React.ReactElement => (
  <StyledLayoutWrapper>
    <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />

    <StyledHeaderWrapper>
      <Header />
    </StyledHeaderWrapper>

    <StyledContentWrapper>
      <SelectedCity />
      <SearchResults />
      <FeaturedCities />
    </StyledContentWrapper>
  </StyledLayoutWrapper>
);

export default MainLayout;
