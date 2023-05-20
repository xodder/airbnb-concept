import { Box, IconButton, Typography } from '@mui/material';
import { Column, Flexible, Grid, Row } from '@xod/mui-layout';
import { HeartOutline, Star } from '~/components/icons';
import AspectRatio from '~/components/shared/aspect-ratio';
import IconText from '~/components/shared/icon-text';
import Image from '~/components/shared/image';
import cformat from '~/utils/cformat';
import nformat from '~/utils/nformat';
import places from './data/places';

type Place = (typeof places)[number];

function ContentSection() {
  return (
    <Box p={4} flex={1}>
      <Grid columnTemplate="repeat(auto-fill, minmax(240px, 1fr))" spacing={2}>
        {places.map((place) => (
          <PlaceListItem key={place.id} place={place} />
        ))}
      </Grid>
    </Box>
  );
}

type PlaceCardWidgetProps = {
  place: Place;
};

function PlaceListItem({ place }: PlaceCardWidgetProps) {
  return (
    <Column
      position="relative"
      borderRadius={4}
      overflow="hidden"
      border="1px solid"
      borderColor="grey.200"
      height={1}
      sx={{
        cursor: 'pointer',
        transition: 'box-shadow 0.25s',
        '&:hover': {
          boxShadow: '0 4px 24px 0px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <AspectRatio value={9 / 16}>
        <Image src={place.photo_urls[0]} alt={place.name} />
      </AspectRatio>
      <Column px={2} py={2} flex={1}>
        <Column gap={1}>
          <Typography variant="body1" fontWeight={600}>
            {place.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {place.location.name}
          </Typography>
        </Column>
        <Flexible minHeight={48} />
        <Row crossAxisAlignment="center">
          <Typography variant="body2">
            <strong>{cformat(place.pricing.per_night)}</strong>
            <Typography
              variant="inherit"
              component="span"
              color="text.secondary"
            >
              &nbsp;/&nbsp;night
            </Typography>
          </Typography>
          <Flexible />
          <IconText
            icon={<Star fontSize="small" />}
            text={nformat(place.rating, { minimumFractionDigits: 1 })}
          />
        </Row>
      </Column>
      <Box position="absolute" top={8} right={8}>
        <IconButton
          sx={{
            bgcolor: 'white',
            '&:hover': { bgcolor: 'white' },
          }}
        >
          <HeartOutline sx={{ fontSize: 16, strokeWidth: 2 }} />
        </IconButton>
      </Box>
    </Column>
  );
}

export default ContentSection;
