import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { Column, Grid, Row, Spacer } from '@xod/mui-layout';
import Divider from '~/components/shared/divider';
import TextField from '~/components/shared/textfield';
import useControlled from '~/utils/use-controlled';

function FilterBoxWidget() {
  return (
    <Box position="relative" height={1}>
      <Column p={3} divider={<Divider my={3} />}>
        <Row
          gap={2}
          crossAxisAlignment="center"
          mainAxisAlignment="space-between"
        >
          <Typography variant="h6">Filters</Typography>
          <MuiLink variant="caption">Clear All</MuiLink>
        </Row>
        <Column gap={3}>
          <Column>
            <Typography variant="h6">Price range</Typography>
            <Typography variant="body2" color="text.secondary">
              The average nightly price is $133
            </Typography>
          </Column>
          <Row gap={2} crossAxisAlignment="center">
            <TextField
              variant="outlined"
              label="Min Price"
              defaultValue="0"
              InputProps={{ startAdornment: '$', sx: { borderRadius: 3 } }}
              inputProps={{ style: { paddingTop: 12, paddingBlock: 12 } }}
              fullWidth
              raisedLabel
            />
            <TextField
              variant="outlined"
              label="Max Price"
              defaultValue="500"
              InputProps={{ startAdornment: '$', sx: { borderRadius: 3 } }}
              inputProps={{ style: { paddingTop: 12, paddingBlock: 12 } }}
              fullWidth
              raisedLabel
            />
          </Row>
        </Column>
        <Column gap={3}>
          <Typography variant="h6">Type of place</Typography>
          <Column gap={2}>
            <PlaceTypeSelectionItem
              title="Entire Place"
              subtitle="A place to yourself"
            />
            <PlaceTypeSelectionItem
              title="Private room"
              subtitle="Your own room in a home or a hotel, plus some shared common spaces."
            />
            <PlaceTypeSelectionItem
              title="Shared room"
              subtitle="A sleeping space and common areas that may be shared with others."
            />
          </Column>
        </Column>
        <Column gap={3}>
          <Typography variant="h6">Rooms, beds, and baths</Typography>
          <Column gap={3}>
            <EntityCountSelectionWidget label="Bedrooms" defaultValue="Any" />
            <EntityCountSelectionWidget label="Beds" defaultValue="2" />
            <EntityCountSelectionWidget label="Bathrooms" defaultValue="Any" />
          </Column>
        </Column>
      </Column>
      <Spacer sy={3} />
      <Box
        position="sticky"
        bottom={0}
        width={1}
        py={2}
        px={3}
        borderTop="1px solid"
        borderColor="divider"
        bgcolor="background.default"
      >
        <Button variant="contained" size="large" fullWidth>
          Show 836 Homes
        </Button>
      </Box>
    </Box>
  );
}

type PlaceTypeSelectionItemProps = {
  title: string;
  subtitle: string;
};

function PlaceTypeSelectionItem({
  title,
  subtitle,
}: PlaceTypeSelectionItemProps) {
  return (
    <FormControlLabel
      control={<Checkbox sx={{ py: 0.25, color: 'divider' }} disableRipple />}
      label={
        <Column>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        </Column>
      }
      sx={{ alignItems: 'start', gap: 1 }}
      disableTypography
    />
  );
}

type EntityCountSelectionWidgetProps = {
  label: string;
  value?: string;
  defaultValue?: string;
  options?: string[];
  onChange?: (value: string) => void;
};

function EntityCountSelectionWidget({
  label,
  value: valueProp,
  defaultValue,
  options = ['Any', '1', '2', '3', '4', '5+'],
  onChange,
}: EntityCountSelectionWidgetProps) {
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
  });

  function setSelectedValue(value: string) {
    setValue(value);
    onChange?.(value);
  }

  return (
    <Column gap={1}>
      <Typography variant="subtitle2">{label}</Typography>
      <Grid columnTemplate={`repeat(${options.length}, 1fr)`} spacing={2}>
        {options.map((option, i) => {
          const selected = option === value;

          return (
            <Chip
              key={i}
              variant={selected ? 'filled' : 'outlined'}
              label={option}
              onClick={() => setSelectedValue(option)}
              clickable
            />
          );
        })}
      </Grid>
    </Column>
  );
}

export default FilterBoxWidget;
