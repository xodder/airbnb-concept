import { Box, Typography } from '@mui/material';
import { Column } from '@xod/mui-layout';
import AspectRatio from '~/components/shared/aspect-ratio';
import Link from '~/components/shared/link';
import RichText from '~/components/shared/rich-text';
import { useActivePlace } from '../../provider';

function LocationInfoSection() {
  const place = useActivePlace();

  return (
    <Column gap={3} crossAxisAlignment="start">
      <Typography variant="h6">Where you'll be</Typography>
      <AspectRatio value={9 / 16}>
        <Box bgcolor="grey.200" borderRadius={5} />
      </AspectRatio>
      <Column gap={1}>
        <Typography variant="h6">{place.location.name}</Typography>
        <RichText content={place.location.description as any} />
      </Column>
      <Link href="#" variant="body2" fontWeight={700} mui>
        View more
      </Link>
    </Column>
  );
}

export default LocationInfoSection;
