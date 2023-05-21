import { Box, Button } from '@mui/material';
import { Grid } from '@xod/mui-layout';
import AspectRatio from '~/components/shared/aspect-ratio';
import Image from '~/components/shared/image';
import { useActivePlace } from '../../provider';

function PhotosSection() {
  const place = useActivePlace();

  return (
    <Box position="relative">
      <AspectRatio value={3 / 8} flexShrink={0}>
        <Grid
          columnTemplate="2fr 1fr"
          rowTemplate="1fr 1fr"
          spacing={2}
          height={1}
        >
          <Image
            src={place.photo_urls[0]}
            alt=""
            borderRadius={3}
            fit="cover"
            width={1}
            height={1}
            sx={{ gridColumn: '1/2', gridRow: '1/3' }}
          />
          <Image
            src={place.photo_urls[1]}
            alt=""
            borderRadius={3}
            fit="cover"
            width={1}
            height={1}
            sx={{ gridColumn: '2/3', gridRow: '1/2' }}
          />
          <Image
            src={place.photo_urls[2]}
            alt=""
            borderRadius={3}
            fit="cover"
            width={1}
            height={1}
            sx={{ gridColumn: '2/3', gridRow: '2/3' }}
          />
        </Grid>
      </AspectRatio>
      <Box position="absolute" bottom={16} left={16}>
        <Button
          variant="contained"
          color="inherit"
          size="small"
          sx={{ borderRadius: 2 }}
        >
          View All Photos
        </Button>
      </Box>
    </Box>
  );
}

export default PhotosSection;
