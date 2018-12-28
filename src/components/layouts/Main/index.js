import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Header from '../../Header';
import SelectedCity from '../../cities/SelectedCity';
import SearchResults from '../../cities/SearchResults';
import FeaturedCities from '../../cities/FeaturedCities';

import 'react-toastify/dist/ReactToastify.min.css';

import { StyledLayoutWrapper, StyledHeaderWrapper, StyledContentWrapper } from './styles';

const MainLayout = () => (
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
