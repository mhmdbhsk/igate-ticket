import { NextComponentWithSeo } from '@/types/next-page-with-seo';
import { Anchor, Box, Text } from '@mantine/core';
import Link from 'next/link';

type NotFoundProps = {} & NextComponentWithSeo;

const NotFound: NextComponentWithSeo<NotFoundProps> = () => {
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

        <Anchor component={Link} href='/' sx={{ textAlign: 'center' }}>
          Kembali ke beranda
        </Anchor>
      </Box>
    </Box>
  );
};

NotFound.title = 'Halaman Tidak Ditemukan';
NotFound.pageTitle = 'Halaman Tidak Ditemukan';

export default NotFound;
