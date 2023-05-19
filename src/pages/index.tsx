import HomePageImpl from '~/components/impls/home';
import MainLayout from '~/components/layouts/main-layout';

function HomePage() {
  return <HomePageImpl />;
}

HomePage.Layout = MainLayout;

export default HomePage;
