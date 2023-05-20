import { Column, Row } from '@xod/mui-layout';
import React from 'react';
import PageSEO from '~/components/shared/page-seo';
import Sidebar from './sidebar';
import ContentSection from './content-section';
import HeaderSection from './header-section';

function HomePageImpl() {
  return (
    <React.Fragment>
      <PageSEO title="Home" />
      <Column>
        <HeaderSection />
        <Row>
          <Sidebar />
          <ContentSection />
        </Row>
      </Column>
    </React.Fragment>
  );
}

export default HomePageImpl;
