import { BoxProps } from '@mui/material';
import IconText from '~/components/shared/icon-text';
import Image from '~/components/shared/image';

type SuperHostTagProps = BoxProps & {
  bordered?: boolean;
};

function SuperHostTag({ bordered, ...props }: SuperHostTagProps) {
  return (
    <IconText
      icon={
        <Image
          src={require('./assets/ic-badge.svg')}
          alt="badge"
          fit="contain"
          width={20}
        />
      }
      text="Superhost"
      border={bordered ? '1px solid' : 'none'}
      borderColor="divider"
      borderRadius={3}
      px={bordered ? 1.5 : undefined}
      py={bordered ? 0.5 : undefined}
      {...props}
    />
  );
}

export default SuperHostTag;
