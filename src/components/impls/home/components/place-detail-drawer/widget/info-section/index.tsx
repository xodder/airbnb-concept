import { IconButton, Typography } from '@mui/material';
import { Column, Row, Spacer } from '@xod/mui-layout';
import {
  BedOutline,
  BedroomOutline,
  GuestOutline,
  HeartOutline,
  ShowerOutline,
  Upload,
} from '~/components/icons';
import IconText from '~/components/shared/icon-text';
import { useActivePlace } from '../../provider';
import SuperHostTag from '../shared/superhost-tag';

function InfoSection() {
  const place = useActivePlace();

  return (
    <Column>
      <SuperHostTag sx={{ alignSelf: 'start' }} bordered />
      <Spacer sy={2} />
      <Row gap={2} crossAxisAlignment="start" mainAxisAlignment="space-between">
        <Column gap={1}>
          <Typography variant="h5">{place.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {place.location.name}
          </Typography>
        </Column>
        <Row gap={1} crossAxisAlignment="center">
          <IconButton sx={{ bgcolor: 'background.paper' }}>
            <Upload fontSize="xsmall" />
          </IconButton>
          <IconButton sx={{ bgcolor: 'background.paper' }}>
            <HeartOutline fontSize="xsmall" sx={{ strokeWidth: 2.5 }} />
          </IconButton>
        </Row>
      </Row>
      <Spacer sy={3} />
      <Row gap={4}>
        <FeatureWidget
          Icon={GuestOutline}
          label={`${place.features.guest_count}+ guests`}
        />
        <FeatureWidget
          Icon={BedroomOutline}
          label={`${place.features.bedroom_count} bedrooms`}
        />
        <FeatureWidget
          Icon={BedOutline}
          label={`${place.features.bed_count} beds`}
        />
        <FeatureWidget
          Icon={ShowerOutline}
          label={`${place.features.bath_count} baths`}
        />
      </Row>
    </Column>
  );
}

type FeatureWidgetProps = {
  Icon: typeof GuestOutline;
  label: string;
};

function FeatureWidget({ Icon, label }: FeatureWidgetProps) {
  return (
    <IconText
      icon={<Icon fontSize="xsmall" />}
      text={label}
      textProps={{ variant: 'caption', sx: { mt: 0.5 } }}
    />
  );
}

export default InfoSection;
