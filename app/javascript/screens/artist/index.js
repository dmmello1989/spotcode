import React, { Fragment } from 'react';
import NavBarFooter from '../../components/common/navbarFooter';
import Artists from '../../components/artists';
import SectionWrapper from '../../components/common/sectionWrapper';

const ArtistScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Artists />
        <NavBarFooter/>
      </SectionWrapper>
    </Fragment>
  )
}

export default ArtistScreen;