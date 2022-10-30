import { Box, Button } from '@mantine/core';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

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
      <Button
        variant='light'
        radius='xl'
        onClick={() => router.push('/register')}
      >
        Daftar
      </Button>
    </Box>
  );
}
