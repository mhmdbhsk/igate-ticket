import { NextComponentType, NextPage, NextPageContext } from 'next';

export type NextPageWithSeo<
  P extends { [key: string]: any } = { [key: string]: any },
  IP = P
> = NextPage<P, IP> & {
  pageTitle?: string;
  title: string;
};

export type NextComponentWithSeo<P = {}, IP = P> = NextPage<P, IP> &
  NextComponentType<NextPageContext, IP, P> &
  Partial<NextPageWithSeo>;
