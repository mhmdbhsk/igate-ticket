import { GetServerSidePropsContext } from 'next';
import CardTicket from '@/components/Ticket';
import TicketService from '@/services/ticket';
import { Anchor, Box, Button, Stack, Text } from '@mantine/core';
import { useWindowSize } from '@/hooks/useWindowSize';
import Link from 'next/link';

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

export default function Ticket({ ticket }: any) {
  const { isMedium } = useWindowSize();

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        gap: 16,
        height: '100%',
        minHeight: '100vh',
      }}
    >
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
          width: '80%',
          marginTop: isMedium ? 80 : 48,
          marginBottom: isMedium ? 80 : 0,
        }}
      >
        <Text size={36} weight='bold' align='center'>
          Aku sudah punya tiket, mana tiketmu?
        </Text>
        <Text size={24} weight='bold' align='center'>
          Mari bergabung dengan {ticket?.fields?.name} di I-Gate 2022!
        </Text>

        <Anchor component={Link} href='/register'>
          Pesan tempatmu sekarang juga!
        </Anchor>
        <Button variant='subtle'>Bagikan ke temanmu</Button>
      </Box>
    </Box>
  );
}
