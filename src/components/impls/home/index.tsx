import { Column, Row } from '@xod/mui-layout';
import React from 'react';
import PageSEO from '~/components/shared/page-seo';
import ContentSection from './components/content-section';
import FilterBox from './components/filter-box';
import HeaderSection from './components/header-section';
import PlaceDetailDrawer from './components/place-detail-drawer';
import Sidebar from './components/sidebar';

function HomePageImpl() {
  return (
    <React.Fragment>
      <PageSEO title="Home" />
      <Column height={1}>
        <HeaderSection />
        <Row flex={1} position="relative">
          <Sidebar />
          <ContentSection />
          <FilterBox />
        </Row>
      </Column>
      <PlaceDetailDrawer />
    </React.Fragment>
  );
}

export default HomePageImpl;
