import { useTheme } from '@mui/material';
import TextField, { TextFieldProps } from '../textfield';

function PlainTextField(props: TextFieldProps) {
  const theme = useTheme();

  return (
    <TextField
      {...props}
      variant="standard"
      InputProps={{
        ...props.InputProps,
        disableUnderline: true,
        sx: {
          bgcolor: 'white',
          borderRadius: 2,
          px: 2,
          py: 1,
          ...theme.typography.subtitle2,
          ...props.InputProps?.sx,
        },
      }}
      raisedLabel
    />
  );
}

export default PlainTextField;
