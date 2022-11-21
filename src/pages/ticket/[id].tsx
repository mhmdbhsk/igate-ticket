import { GetServerSidePropsContext } from 'next';
import CardTicket from '@/components/Ticket';
import TicketService from '@/services/ticket';
import { Box, Button, Stack, Text } from '@mantine/core';
import { useWindowSize } from '@/hooks/useWindowSize';
import { NextComponentWithSeo } from '@/types/next-page-with-seo';
import Head from 'next/head';
import { GetTicketByIdResponse } from '@/dto/TicketDto';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  const ticket = await TicketService.getTicketsById(id as string);

  return {
    props: {
      ticket,
    },
  };
};

type TicketProps = {
  ticket: GetTicketByIdResponse;
} & NextComponentWithSeo;

const Ticket: NextComponentWithSeo<TicketProps> = ({ ticket, title }) => {
  const { isMedium } = useWindowSize();
  const imgUrl = `https://${process.env.NEXT_PUBLIC_APP_URL}/api/og?title=${title}?name=${ticket.fields.name}?id=${ticket.fields.id}`;

  return (
    <Box>
      <Head>
        <meta property='og:image' content={imgUrl} />
      </Head>
      <Stack
        justify='center'
        align='center'
        sx={{
          marginTop: isMedium ? 80 : 0,
          padding: isMedium ? 24 : 0,
          height: '100%',
        }}
      >
        <CardTicket data={ticket} />
      </Stack>

      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
          gap: 16,
          width: '100%',
          marginTop: isMedium ? 80 : 48,
          marginBottom: isMedium ? 80 : 0,
        }}
      >
        <Text size={36} weight='bold' align='center'>
          Aku sudah punya tiket, mana tiketmu?
        </Text>
        <Text size={24} align='center'>
          Mari bergabung dengan {ticket?.fields?.name} di I-Gate 2022!
        </Text>

        <Button variant='subtle' radius='xl'>
          Bagikan ke temanmu
        </Button>
      </Box>
    </Box>
  );
};

Ticket.title = 'Tiket';
Ticket.pageTitle = 'Tiket';

export default Ticket;
