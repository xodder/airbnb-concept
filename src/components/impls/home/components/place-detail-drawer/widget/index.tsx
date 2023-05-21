import { Column, Grid } from '@xod/mui-layout';
import AboutSection from './about-section';
import AmenitiesSection from './amenities-section';
import HostInfoSection from './host-info-section';
import InfoSection from './info-section';
import LocationInfoSection from './location-info-section';
import OptionsSection from './options-section';
import PhotosSection from './photos-section';
import ReservationSection from './reservation-section';
import ReviewsSection from './reviews-section';

function PlaceDetailWidget() {
  return (
    <Column overflow="auto" p={3}>
      <PhotosSection />
      <Grid columnTemplate="2fr 1fr">
        <Column height={1400}>
          <InfoSection />
          <OptionsSection />
          <AboutSection />
          <AmenitiesSection />
          <ReviewsSection />
          <LocationInfoSection />
          <HostInfoSection />
        </Column>
        <Column position="sticky" top={0} alignSelf="start">
          <ReservationSection />
        </Column>
      </Grid>
    </Column>
  );
}

export default PlaceDetailWidget;
