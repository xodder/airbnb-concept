import { Column, Row } from '@xod/mui-layout';
import Divider from '~/components/shared/divider';
import AboutSection from './about-section';
import AmenitiesSection from './amenities-section';
import HostInfoSection from './host-info-section';
import InfoSection from './info-section';
import LocationInfoSection from './location-info-section';
import OptionsSection from './options-section';
import PhotosSection from './photos-section';
import RareFindSnippet from './rare-find-snippet';
import ReservationSection from './reservation-section';
import ReviewsSection from './reviews-section';

function PlaceDetailWidget() {
  return (
    <Column overflow="auto" p={3} gap={3}>
      <PhotosSection />
      <Row gap={5}>
        <Column
          flex={2}
          divider={<Divider color="grey.300" my={4} width={1} />}
        >
          <InfoSection />
          <OptionsSection />
          <AboutSection />
          <AmenitiesSection />
          <ReviewsSection />
          <LocationInfoSection />
          <HostInfoSection />
        </Column>
        <Column position="sticky" top={0} alignSelf="start" gap={3} flex={1}>
          <ReservationSection />
          <RareFindSnippet />
        </Column>
      </Row>
    </Column>
  );
}

export default PlaceDetailWidget;
