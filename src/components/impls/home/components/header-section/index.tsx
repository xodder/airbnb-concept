import {
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { Row } from '@xod/mui-layout';
import React from 'react';
import {
  CalendarOutline,
  FilterOutline,
  GridOutline,
} from '~/components/icons';
import MapOutline from '~/components/icons/generated/map-outline';
import MinusOutline from '~/components/icons/generated/minus-outline';
import PlusOutline from '~/components/icons/generated/plus-outline';
import PlainSelect from '~/components/shared/plain-select';
import SquareIconButton from '~/components/shared/square-icon-button';

function HeaderSection() {
  return (
    <Row
      position="sticky"
      top={0}
      crossAxisAlignment="center"
      mainAxisAlignment="space-between"
      px={4}
      py={1.25}
      sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      zIndex={4}
      bgcolor="background.default"
    >
      <DisplayModeSelectionWidget />
      <Row gap={2}>
        <LocationSelectionWidget />
        <DateRangeSelectionWidget />
        <RoomCountSelectionWidget />
      </Row>
      <SquareIconButton size="large" sx={{ bgcolor: 'background.paper' }}>
        <FilterOutline />
      </SquareIconButton>
    </Row>
  );
}

function DisplayModeSelectionWidget() {
  const [value, setValue] = React.useState('grid');

  return (
    <ToggleButtonGroup
      value={value}
      onChange={(_, newValue) => setValue(newValue || value)}
      sx={{ border: 'none', borderRadius: 2.5 }}
      exclusive
    >
      <ToggleButton value="grid" sx={{ p: 1.8 }}>
        <GridOutline />
      </ToggleButton>
      <ToggleButton value="map" sx={{ p: 1.85 }}>
        <MapOutline />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function LocationSelectionWidget() {
  return (
    <PlainSelect variant="standard" defaultValue="anywhere">
      <MenuItem value="anywhere">Anywhere</MenuItem>
    </PlainSelect>
  );
}

function DateRangeSelectionWidget() {
  return (
    <Row
      crossAxisAlignment="center"
      gap={2}
      bgcolor="background.paper"
      px={2}
      py={1}
      borderRadius={3}
    >
      <CalendarOutline color="action" />
      <Typography variant="subtitle2">June 14 - 11</Typography>
    </Row>
  );
}

function RoomCountSelectionWidget() {
  return (
    <Row
      crossAxisAlignment="center"
      gap={2}
      bgcolor="background.paper"
      p={1}
      borderRadius={3}
    >
      <SquareIconButton size="small" sx={{ bgcolor: 'white' }}>
        <MinusOutline color="primary" />
      </SquareIconButton>
      <Typography variant="subtitle2">4 guests</Typography>
      <SquareIconButton size="small" sx={{ bgcolor: 'white' }}>
        <PlusOutline color="primary" />
      </SquareIconButton>
    </Row>
  );
}

export default HeaderSection;
