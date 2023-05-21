import _omit from 'lodash/omit';
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';
import { Spacer, SpacerProps } from '@xod/mui-layout';

type RichTextProps = BoxProps & {
  content: RichTextContent;
};

function RichText({ content, ...props }: RichTextProps) {
  return (
    <Box {...props}>
      {content.map((entry, i) => {
        if (entry.type === 'spacer') {
          return <Spacer key={i} {..._omit(entry, 'type')} />;
        }

        return (
          <Typography
            key={i}
            variant={entry.type}
            {..._omit(entry, ['type', 'content'])}
          >
            {entry.content}
          </Typography>
        );
      })}
    </Box>
  );
}

type RichTextContent = Array<SpacerType | TypographyType>;

type SpacerType = { type: 'spacer' } & Pick<SpacerProps, 'sx' | 'sy'>;
type TypographyType = {
  type: TypographyProps['variant'];
  content: string;
} & Omit<TypographyProps, 'variant'>;

export default RichText;
