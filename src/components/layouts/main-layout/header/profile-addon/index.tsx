import Image from '~/components/shared/image';

function ProfileAddon() {
  return (
    <Image
      src={require('./assets/avatar.jpg')}
      alt="profile photo"
      width={40}
      height={40}
      borderRadius="50%"
    />
  );
}

export default ProfileAddon;
