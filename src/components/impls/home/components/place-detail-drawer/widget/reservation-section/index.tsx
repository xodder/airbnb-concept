import { Button, MenuItem, Typography } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Column, Row } from '@xod/mui-layout';
import dayjs from 'dayjs';
import { CalendarOutline, Star } from '~/components/icons';
import Divider from '~/components/shared/divider';
import IconText from '~/components/shared/icon-text';
import PlainTextField from '~/components/shared/plain-textfield';
import { Maybe } from '~/types';
import cformat from '~/utils/cformat';
import nformat from '~/utils/nformat';
import useControlled from '~/utils/use-controlled';
import { useActivePlace } from '../../provider';

function ReservationSection() {
  const place = useActivePlace();
  const pricing = place.pricing;

  return (
    <Column
      p={3}
      gap={4}
      bgcolor="rgb(245, 245, 244)"
      borderRadius={4}
      minWidth={400}
    >
      <Column gap={3}>
        <Row crossAxisAlignment="center" mainAxisAlignment="space-between">
          <Typography>
            <Typography component="span" variant="h5">
              {cformat(pricing.per_night)}
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              color="text.secondary"
            >
              &nbsp;/&nbsp;night
            </Typography>
          </Typography>
          <IconText icon={<Star />} text={nformat(place.rating)} />
        </Row>
        <Row gap={2} crossAxisAlignment="center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerFieldX label="Check In" defaultValue={new Date()} />
            <DatePickerFieldX
              label="Check Out"
              defaultValue={dayjs().add(6, 'd').toDate()}
            />
          </LocalizationProvider>
        </Row>
        <PlainTextField label="Guests" defaultValue="1" raisedLabel select>
          <MenuItem value="1">1 guest</MenuItem>
          <MenuItem value="2">2 guests</MenuItem>
          <MenuItem value="3">3 guests</MenuItem>
        </PlainTextField>
      </Column>
      <Divider />
      <Column gap={1.5}>
        <FeeWidget label="6 nights" amount={pricing.per_night * 6} />
        <FeeWidget label="Cleaning fee" amount={pricing.cleaning_fee} />
        <FeeWidget label="Airbnb service fee" amount={pricing.service_fee} />
      </Column>
      <Divider />
      <FeeWidget
        label="Total"
        sublabel="Before taxes"
        amount={
          pricing.per_night * 6 + pricing.cleaning_fee + pricing.service_fee
        }
        emphasized
      />
      <Button variant="contained" size="large">
        Reserve
      </Button>
    </Column>
  );
}

type FeeWidgetProps = {
  label: string;
  sublabel?: string;
  amount: number;
  hint?: string;
  emphasized?: boolean;
};

function FeeWidget({ label, sublabel, amount, emphasized }: FeeWidgetProps) {
  return (
    <Row
      crossAxisAlignment={!sublabel ? 'center' : 'start'}
      mainAxisAlignment="space-between"
    >
      <Column>
        <Typography variant={emphasized ? 'h6' : 'subtitle2'}>
          {label}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {sublabel}
        </Typography>
      </Column>
      <Typography variant={emphasized ? 'body1' : 'subtitle2'} align="right">
        {cformat(amount)}
      </Typography>
    </Row>
  );
}

type DatePickerFieldXProps = {
  label: string;
  value?: Maybe<Date>;
  onChange?: (value: Maybe<Date> | undefined) => void;
  defaultValue?: Date;
};

function DatePickerFieldX({
  value: valueProp,
  label,
  defaultValue,
  onChange,
}: DatePickerFieldXProps) {
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
  });

  function handleChange(value: Maybe<Date> | undefined) {
    setValue(value);
    onChange?.(value);
  }

  return (
    <MobileDatePicker
      toolbarTitle="Due on"
      value={value}
      inputFormat="M/DD/YYYY"
      onChange={handleChange}
      componentsProps={{ actionBar: { actions: [] } }}
      renderInput={(props) => {
        return (
          <PlainTextField
            {...props}
            label={label}
            InputProps={{
              startAdornment: (
                <CalendarOutline color="action" sx={{ mr: 2, mt: -0.25 }} />
              ),
              sx: { cursor: 'pointer' },
              inputProps: {
                disabled: true,
                style: {
                  pointerEvents: 'none',
                },
              },
            }}
            fullWidth
          />
        );
      }}
      disablePast
      disableHighlightToday
      disableMaskedInput
      closeOnSelect
    />
  );
}

export default ReservationSection;
