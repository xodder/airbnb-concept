import { Typography } from '@mui/material';
import { Column, Grid } from '@xod/mui-layout';
import {
  BedOutline,
  BedroomOutline,
  GuestOutline,
  ShowerOutline,
} from '~/components/icons';
import IconText from '~/components/shared/icon-text';
import Link from '~/components/shared/link';
import { useActivePlace } from '../../provider';

function AmenitiesSection() {
  const place = useActivePlace();

  return (
    <Column gap={4}>
      <Typography variant="h6">What this place offers</Typography>
      <Grid columnTemplate="repeat(3, 1fr)" spacing={4}>
        {place.amenities.map((amenity, i) => {
          const Icon = tagToIconMap[amenity.tag];

          return <IconText key={i} icon={<Icon />} text={amenity.label} />;
        })}
      </Grid>
      <Link
        href="#"
        variant="body2"
        fontWeight={700}
        sx={{ alignSelf: 'start' }}
        mui
      >
        View more
      </Link>
    </Column>
  );
}

const tagToIconMap: Record<string, typeof GuestOutline> = {
  kitchen: GuestOutline,
  workspace: BedroomOutline,
  tv: BedOutline,
  dryer: ShowerOutline,
  balcony: GuestOutline,
  wifi: BedroomOutline,
  park: BedOutline,
  wash: ShowerOutline,
  ac: GuestOutline,
  heater: BedOutline,
  security: BedroomOutline,
  fan: ShowerOutline,
};

export default AmenitiesSection;
