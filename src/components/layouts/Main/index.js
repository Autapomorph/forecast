import React, { Fragment } from 'react';

import Header from '../../Header';
import Geolocation from '../../Geolocation';
import SelectedCity from '../../SelectedCity';
import SearchResults from '../../SearchResults';
import FeaturedCities from '../../FeaturedCities';

const MainLayout = () => (
  <Fragment>
    <Header />

    <main>
      <Geolocation />
      <SelectedCity />
      <SearchResults />
      <FeaturedCities />
    </main>
  </Fragment>
);

export default MainLayout;
