import { AppBar, Toolbar } from '@mui/material';
import Logo from '~/components/generics/logo';
import Link from '~/components/shared/link';
import ProfileAddon from './profile-addon';
import TopLevelNavigation from './top-level-navigation';

function Header() {
  return (
    <AppBar
      position="relative"
      color="default"
      elevation={0}
      sx={{ borderBottom: '1px solid', borderColor: 'grey.300' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', height: 72 }}>
        <Link href="/">
          <Logo />
        </Link>
        <TopLevelNavigation />
        <ProfileAddon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
