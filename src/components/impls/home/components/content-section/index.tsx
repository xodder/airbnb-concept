import { Box, IconButton, Typography } from '@mui/material';
import { Column, Flexible, Grid, Row } from '@xod/mui-layout';
import React from 'react';
import { HeartOutline, Star } from '~/components/icons';
import AspectRatio from '~/components/shared/aspect-ratio';
import IconText from '~/components/shared/icon-text';
import Image from '~/components/shared/image';
import cformat from '~/utils/cformat';
import nformat from '~/utils/nformat';
import places from '../../data/places';
import usePlaceSelection from '../../helpers/use-place-selection';
import { Place } from '../../types';

function ContentSection() {
  const [, selectPlace] = usePlaceSelection();

  return (
    <Box p={4} flex={1}>
      <Grid columnTemplate="repeat(auto-fill, minmax(220px, 1fr))" spacing={2}>
        {places.map((place) => (
          <PlaceListItem
            key={place.id}
            place={place}
            onClick={() => selectPlace(place.id)}
          />
        ))}
      </Grid>
    </Box>
  );
}

type PlaceCardWidgetProps = {
  place: Place;
  onClick: () => void;
};

function PlaceListItem({ place, onClick }: PlaceCardWidgetProps) {
  const [liked, setLiked] = React.useState(false);

  return (
    <Box
      position="relative"
      borderRadius={4}
      overflow="hidden"
      border="1px solid"
      borderColor="grey.200"
      height={1}
      sx={{
        transition: 'box-shadow 0.25s, width 0.3s ease-in',
        '&:hover': {
          boxShadow: '0 4px 24px 0px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <Column height={1} onClick={onClick} sx={{ cursor: 'pointer' }}>
        <AspectRatio value={9 / 16}>
          <Image src={place.photo_urls[0]} alt={place.name} />
        </AspectRatio>
        <Column p={2} flex={1}>
          <Column gap={1}>
            <Typography variant="h6">{place.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {place.location.name}
            </Typography>
          </Column>
          <Flexible minHeight={48} />
          <Row
            gap={2}
            crossAxisAlignment="center"
            mainAxisAlignment="space-between"
          >
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
            <IconText icon={<Star />} text={nformat(place.rating)} />
          </Row>
        </Column>
      </Column>
      <Box position="absolute" top={8} right={8}>
        <IconButton
          sx={{
            bgcolor: 'white',
            '&:hover': { bgcolor: 'black', color: 'white' },
          }}
        >
          <HeartOutline
            color={liked ? 'primary' : 'inherit'}
            fontSize="xsmall"
            onClick={() => setLiked((x) => !x)}
            sx={{
              strokeWidth: 2,
              fill: liked ? 'currentColor' : undefined,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ContentSection;
