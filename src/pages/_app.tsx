import NextApp, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Layout from '@/components/Layout';
import DismissableToast from '@/components/DismissableToast';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import { NextComponentType, NextPageContext } from 'next';
import theme from '@/styles/theme';
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Lilita_One } from '@next/font/google';

type NextComponentWithSeo = NextComponentType<NextPageContext, any, {}> &
  Partial<NextPageWithSeo>;

type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithSeo;
};

const lilita = Lilita_One({ weight: '400' });
const inter = Inter({ subsets: ['latin'] });

export default function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily} ${lilita.style.fontFamily};
        }
      `}</style>
      <Head>
        <link rel='preload' href='/images/background-layer.webp' as='image' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='shortcut icon' href='/favicon.svg' />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <LazyMotion features={domAnimation}>
          <AnimatePresence
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
            mode='wait'
          >
            <Layout pageTitle={Component.pageTitle as string}>
              <DismissableToast />
              <NextNProgress color='#7950f2' />
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </AnimatePresence>
        </LazyMotion>
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
