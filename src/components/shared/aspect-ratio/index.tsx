import { Box, BoxProps } from '@mui/material';
import React from 'react';

type AspectRatioProps<C extends React.ElementType> = Omit<
  BoxProps<C>,
  'children'
> & {
  value: number;
  children: React.ReactElement<HTMLElement>;
};

function AspectRatio<C extends React.ElementType>({
  value,
  children,
  ...props
}: AspectRatioProps<C>) {
  return (
    <Box position="relative" width={1} {...props}>
      <div style={{ paddingTop: `${value * 100}%` }} />
      {React.cloneElement(React.Children.only(children), {
        ...children.props,
        style: {
          position: 'absolute',
          inset: '0px',
          width: '100%',
          height: '100%',
          ...(children.props ? children.props.style : {}),
        } as CSSStyleDeclaration,
      })}
    </Box>
  );
}

export default AspectRatio;
