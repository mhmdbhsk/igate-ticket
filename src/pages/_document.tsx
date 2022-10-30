import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body
          style={{
            background: 'radial-gradient(#fff,#f5f5f5)',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
