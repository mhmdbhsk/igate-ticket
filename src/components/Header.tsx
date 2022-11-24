import { useWindowSize } from '@/hooks/useWindowSize';
import { Box, Container, Image } from '@mantine/core';
import { useRouter } from 'next/router';

export default function Header() {
  const { isMedium } = useWindowSize();
  const router = useRouter();

  return (
    <Box sx={{ height: 96 }}>
      <Container
        size='sm'
        p='lg'
        sx={() => ({
          display: 'flex',
          flexDirection: isMedium ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Box
          sx={{ width: 100, cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          <Image src='/images/logo.webp' alt='Logo' width={100} height='100%' />
        </Box>
      </Container>
    </Box>
  );
}
