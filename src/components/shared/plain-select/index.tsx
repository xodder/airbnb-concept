import React from 'react';
import { Select, SelectProps, useTheme, selectClasses } from '@mui/material';
import { ChevronDownOutline } from '~/components/icons';

function PlainSelect(props: SelectProps) {
  const cx = selectClasses;
  const theme = useTheme();

  return (
    <Select
      {...props}
      variant="standard"
      sx={{
        bgcolor: 'background.paper',
        px: 2,
        py: 1,
        borderRadius: 3,
        [`.${cx.icon}`]: {
          right: 12,
        },
        ...props.sx,
      }}
      IconComponent={ChevronDownOutline}
      SelectDisplayProps={{
        ...props.SelectDisplayProps,
        style: {
          backgroundColor: 'transparent',
          ...theme.typography.subtitle2,
          padding: 0,
          paddingRight: theme.spacing(5),
          ...props.SelectDisplayProps?.style,
        },
      }}
      MenuProps={{ PaperProps: { sx: { boxShadow: 0 } } }}
      disableUnderline
    />
  );
}

export default PlainSelect;
