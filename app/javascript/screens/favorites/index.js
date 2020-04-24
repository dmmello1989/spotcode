import React, { Fragment, useState, useEffect } from 'react';
import { Heading } from 'react-bulma-components';
import NavbarFooter from '../../components/common/navbarFooter';
import SectionWrapper from '../../components/common/sectionWrapper';
import Favorites from '../../components/favorites';

const FavoritesScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Favoritos</Heading>
        <Favorites />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  )
}

export default FavoritesScreen;