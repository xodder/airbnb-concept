import { Typography } from '@mui/material';
import { Column } from '@xod/mui-layout';
import Link from '~/components/shared/link';
import RichText from '~/components/shared/rich-text';
import { useActivePlace } from '../../provider';

function AboutSection() {
  const place = useActivePlace();

  return (
    <Column gap={3}>
      <Typography fontWeight={800}>About this Space</Typography>
      <RichText content={place.about as any} />
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

export default AboutSection;
