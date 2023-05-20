import { IconButton, IconButtonProps } from '@mui/material';
import React from 'react';

function SquareIconButton(props: IconButtonProps) {
  return <IconButton {...props} sx={{ borderRadius: 2, ...props.sx }} />;
}

export default SquareIconButton;
