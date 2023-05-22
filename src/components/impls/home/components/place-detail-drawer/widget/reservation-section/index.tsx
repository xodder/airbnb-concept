import { Button, MenuItem, Typography } from '@mui/material';
import { Column, Row } from '@xod/mui-layout';
import { CalendarOutline, Star } from '~/components/icons';
import Divider from '~/components/shared/divider';
import IconText from '~/components/shared/icon-text';
import PlainTextField from '~/components/shared/plain-textfield';
import { TextFieldProps } from '~/components/shared/textfield';
import cformat from '~/utils/cformat';
import nformat from '~/utils/nformat';
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
            <Typography component="span" variant="h5" fontWeight={800}>
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
          <DatePickerField label="Check In" defaultValue="6/14/2023" />
          <DatePickerField label="Check Out" defaultValue="6/21/2023" />
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

type DatePickerFieldProps = TextFieldProps;

function DatePickerField(props: DatePickerFieldProps) {
  return (
    <PlainTextField
      {...props}
      InputProps={{
        startAdornment: <CalendarOutline color="action" sx={{ mr: 2 }} />,
      }}
      fullWidth
    />
  );
}

export default ReservationSection;
