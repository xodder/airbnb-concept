import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import DefaultLayout from '~/components/layouts/default-layout';
import DefaultGuard from '~/guards/default-guard';
import defineComponent from '~/helpers/define-component';
import theme from '~/theme';
import { RecordLike } from '~/types';
import createEmotionCache from '~/utils/create-emotion-cache';

type AppProps = Omit<NextAppProps, 'Component' | 'pageProps'> & {
  emotionCache: EmotionCache;
  Component: Component;
  pageProps: RecordLike<{
    __state__?: unknown;
  }>;
};

type Component = NextAppProps['Component'] & {
  Layout?: never;
  Guard?: never;
};

const __emotionCache = createEmotionCache(); // used on the client

function App({ emotionCache = __emotionCache, ...props }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ActivePage {...props} />
      </ThemeProvider>
    </CacheProvider>
  );
}

type ActivePageProps = Omit<AppProps, 'emotionCache'>;

function ActivePage({ Component, pageProps }: ActivePageProps) {
  const Layout = defineComponent(Component.Layout || DefaultLayout, {});
  const Guard = defineComponent(Component.Guard || DefaultGuard, {});

  return (
    <Guard.Component {...Guard.props}>
      <Layout.Component {...Layout.props}>
        <Component {...pageProps} />
      </Layout.Component>
    </Guard.Component>
  );
}

export default App;
