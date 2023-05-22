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
import { useFilterBox } from '../filter-box';

function HeaderSection() {
  const filterBox = useFilterBox();

  return (
    <Row
      position="sticky"
      top={0}
      crossAxisAlignment="center"
      mainAxisAlignment="space-between"
      px={4}
      py={1.25}
      height={68}
      zIndex={8}
      bgcolor="background.default"
      flexShrink={0}
      sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <DisplayModeSelectionWidget />
      <Row gap={2}>
        <LocationSelectionWidget />
        <DateRangeSelectionWidget />
        <RoomCountSelectionWidget />
      </Row>
      <SquareIconButton
        size="large"
        onClick={() =>
          filterBox.visible ? filterBox.hide() : filterBox.show()
        }
        sx={{ bgcolor: 'background.paper' }}
      >
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
      exclusive
    >
      <ToggleButton value="grid">
        <GridOutline />
      </ToggleButton>
      <ToggleButton value="map">
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
  const [count, setCount] = React.useState(4);

  return (
    <Row
      crossAxisAlignment="center"
      gap={2}
      bgcolor="background.paper"
      p={1}
      borderRadius={3}
    >
      <SquareIconButton
        size="small"
        onClick={() => setCount((x) => Math.max(x - 1, 1))}
        sx={{ bgcolor: 'white' }}
      >
        <MinusOutline color="primary" />
      </SquareIconButton>
      <Typography variant="subtitle2">{count} guests</Typography>
      <SquareIconButton
        size="small"
        onClick={() => setCount((x) => Math.min(x + 1, 20))}
        sx={{ bgcolor: 'white' }}
      >
        <PlusOutline color="primary" />
      </SquareIconButton>
    </Row>
  );
}

export default HeaderSection;
