import Image, { ImageProps } from '~/components/shared/image';

type LogoProps = Omit<ImageProps, 'src'>;

function Logo(props: LogoProps) {
  return (
    <Image
      height={32}
      {...props}
      src={require('./assets/airbnb.svg')}
      alt="logo"
    />
  );
}

export default Logo;
