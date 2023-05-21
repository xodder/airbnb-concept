import { Typography, TypographyProps } from '@mui/material';
import { Row, RowProps } from '@xod/mui-layout';
import React from 'react';

export type IconTextProps = RowProps<React.ElementType> & {
  icon: any;
  text: string;
  textProps?: TypographyProps;
};

function IconText({ icon, text, textProps, ...props }: IconTextProps) {
  return (
    <Row crossAxisAlignment="center" gap={1} {...props}>
      {icon}
      <Typography variant="subtitle2" {...textProps}>
        {text}
      </Typography>
    </Row>
  );
}

export default IconText;
