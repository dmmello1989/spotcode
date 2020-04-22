import React, { Fragment } from 'react';
import Discovery from '../../components/discovery';
import SectionWrapper from '../../components/common/sectionWrapper';
import NavbarFooter from '../../components/common/navbarFooter';

const DiscoveryScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  )
}

export default DiscoveryScreen;