import { Box, Button, Text } from '@mantine/core';
import { useRouter } from 'next/router';

export default function RegisterSuccess() {
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
      <Text size={36} weight='bold' align='center'>
        Hebat! Pendaftaran Berhasil
      </Text>
      <Box>
        <Text size={18} align='center' sx={{ opacity: 0.5 }}>
          Tunggu kami memverifikasi data kamu.
        </Text>
        <Text size={18} align='center' sx={{ opacity: 0.5 }}>
          Jika kamu sudah terverifikasi, kamu akan mendapatkan email dari kami.
          Terima kasih!
        </Text>
      </Box>

      <Button variant='subtle' onClick={() => router.push('/')}>
        Kembali ke beranda
      </Button>
    </Box>
  );
}
