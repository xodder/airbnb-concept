import { lighten, Theme, Typography } from '@mui/material';
import { Column, Row } from '@xod/mui-layout';
import Image from '~/components/shared/image';

function RareFindSnippet() {
  return (
    <Row
      crossAxisAlignment="start"
      gap={3}
      p={3}
      bgcolor={(theme: Theme) => lighten(theme.palette.primary.main, 0.95)}
      border="1px solid"
      borderColor="grey.200"
      borderRadius={4}
    >
      <Image
        src={require('./assets/ic-diamond.svg')}
        alt="diamond"
        width={36}
        fit="cover"
      />
      <Column>
        <Typography variant="h6">This is a rare find</Typography>
        <Typography variant="body2" color="text.secondary">
          Kathryn's place on Airbnb is usually fully booked.
        </Typography>
      </Column>
    </Row>
  );
}

export default RareFindSnippet;
