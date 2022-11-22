import Jumbotron from '@/components/Jumbotron';
import { NextComponentWithSeo } from '@/types/next-page-with-seo';
import { Box, Button, Text } from '@mantine/core';
import { useRouter } from 'next/router';

const RegisterSuccess: NextComponentWithSeo = () => {
  const router = useRouter();

  return (
    <Jumbotron>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          minHeight: 'calc(100vh - 192px)',
          padding: '0px 48px',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 36,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
            gap: 16,
            borderRadius: 32,
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
              Jika kamu sudah terverifikasi, kamu akan mendapatkan email dari
              kami. Terima kasih!
            </Text>
          </Box>

          <Button
            color='violet'
            radius='xl'
            onClick={() => router.push('/')}
            variant='light'
          >
            Kembali ke beranda
          </Button>
        </Box>
      </Box>
    </Jumbotron>
  );
};

RegisterSuccess.title = 'RegisterSuccess';
RegisterSuccess.pageTitle = 'RegisterSuccess';

export default RegisterSuccess;
