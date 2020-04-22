import React, { Fragment } from 'react';
import { Heading } from 'react-bulma-components';
import SectionWrapper from '../../components/common/sectionWrapper'
import Search from '../../components/search';
import NavbarFooter from '../../components/common/navbarFooter';

const SearchScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Buscar</Heading>
        <Search />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  );
}

export default SearchScreen;