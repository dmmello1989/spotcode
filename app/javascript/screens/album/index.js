import React, { Fragment } from 'react';
import Albums from '../../components/albums';
import NavbarFooter from '../../components/common/navbarFooter';
import SectionWrapper from '../../components/common/sectionWrapper';

const AlbumScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Albums />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  )
}

export default AlbumScreen;