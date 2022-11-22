import { NextComponentWithSeo } from '@/types/next-page-with-seo';
import { Box, Button, Text } from '@mantine/core';
import { useRouter } from 'next/router';

type NotFoundProps = {} & NextComponentWithSeo;

const NotFound: NextComponentWithSeo<NotFoundProps> = () => {
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <Text size={44} weight='bold' align='center'>
          404
        </Text>
        <Text align='center'>Halaman Tidak Ditemukan</Text>

        <Button color='violet' radius='xl' onClick={() => router.push('/')}>
          Kembali ke beranda
        </Button>
      </Box>
    </Box>
  );
};

NotFound.title = 'Halaman Tidak Ditemukan';
NotFound.pageTitle = 'Halaman Tidak Ditemukan';

export default NotFound;
