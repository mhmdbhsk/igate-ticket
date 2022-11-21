import { NextSeo, NextSeoProps } from 'next-seo';
import Head from 'next/head';

export interface CustomSeoProps extends NextSeoProps {
  title?: string;
}

const CustomSeo: React.FunctionComponent<CustomSeoProps> = ({
  title,
  ...props
}: CustomSeoProps) => {
  // if there is no template provided, use the default template which is your Name
  // if you pass title = "next admin" and template = "gakidomo"
  // the result would be = "next admin — gakidomo" otherwise it would be = "next admin — Next.js App"
  const customTemplate = `%s - I-Gate 2022`;
  const imgUrl = `https://${process.env.NEXT_PUBLIC_APP_URL}/api/og?title=${title}`;

  return (
    <div>
      <Head>
        <meta property='og:image' content={imgUrl} />
      </Head>
      <NextSeo
        {...props}
        titleTemplate={customTemplate}
        title={title ?? 'I-Gate 2022'}
      />
    </div>
  );
};

export default CustomSeo;
