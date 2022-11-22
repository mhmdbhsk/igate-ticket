import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Layout from '@/components/Layout';
import DismissableToast from '@/components/DismissableToast';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import { NextComponentType, NextPageContext } from 'next';
import theme from '@/styles/theme';
import NextNProgress from 'nextjs-progressbar';

type NextComponentWithSeo = NextComponentType<NextPageContext, any, {}> &
  Partial<NextPageWithSeo>;

type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithSeo;
};

export default function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <link rel='preload' href='/images/BackgroundLayer.jpg' as='image' />
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
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
            </Layout>
          </AnimatePresence>
        </LazyMotion>
      </MantineProvider>
    </>
  );
}
