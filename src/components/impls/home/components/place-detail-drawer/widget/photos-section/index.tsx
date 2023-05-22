import { Box, BoxProps, Button } from '@mui/material';
import { Grid } from '@xod/mui-layout';
import AspectRatio from '~/components/shared/aspect-ratio';
import Image, { ImageProps } from '~/components/shared/image';
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
          <GridImage src={place.photo_urls[0]} column="1/2" row="1/3" />
          <GridImage src={place.photo_urls[1]} column="2/3" row="1/2" />
          <GridImage src={place.photo_urls[2]} column="2/3" row="2/3" />
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

type GridImageProps = {
  column: BoxProps['gridColumn'];
  row: BoxProps['gridRow'];
} & Pick<ImageProps, 'src'>;

function GridImage({ src, column, row }: GridImageProps) {
  return (
    <Box position="relative" gridColumn={column} gridRow={row}>
      <Image
        type="bg"
        src={src}
        alt=""
        borderRadius={3}
        fit="cover"
        width={1}
        height={1}
      />
    </Box>
  );
}

export default PhotosSection;
