import React from 'react';
import Page from '~/components/shared/page';
import Header from './header';

type MainLayoutProps = React.PropsWithChildren<unknown>;

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Page>
      <Header />
      {children}
    </Page>
  );
}

export default MainLayout;
