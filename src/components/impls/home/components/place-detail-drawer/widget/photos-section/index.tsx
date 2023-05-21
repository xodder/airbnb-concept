import { Box } from '@mui/material';
import { Grid } from '@xod/mui-layout';
import AspectRatio from '~/components/shared/aspect-ratio';
import Image from '~/components/shared/image';
import { useActivePlace } from '../../provider';

function PhotosSection() {
  const place = useActivePlace();

  return (
    <Box flexShrink={0}>
      <Grid columnTemplate="2fr 1fr" rowTemplate="1fr 1fr" spacing={2}>
        <AspectRatio value={9 / 16} sx={{ gridColumn: '1', gridRow: '1/3' }}>
          <Image src={place.photo_urls[0]} alt="" borderRadius={3} />
        </AspectRatio>
        <AspectRatio value={9 / 16} sx={{ gridColumn: 2, gridRow: 1 }}>
          <Image src={place.photo_urls[1]} alt="" borderRadius={3} />
        </AspectRatio>
        <AspectRatio value={9 / 16} sx={{ gridColumn: 2, gridRow: 2 }}>
          <Image src={place.photo_urls[2]} alt="" borderRadius={3} />
        </AspectRatio>
      </Grid>
    </Box>
  );
}

export default PhotosSection;
