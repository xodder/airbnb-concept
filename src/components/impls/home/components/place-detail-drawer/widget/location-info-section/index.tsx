import { Typography } from '@mui/material';
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
      <AspectRatio
        value={9 / 16}
        borderRadius={5}
        overflow="hidden"
        bgcolor="grey.200"
      >
        <iframe
          src="https://maps.google.com/maps?q=48.410967,-114.331586&z=13&output=embed"
          frameBorder={0}
        />
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
