import { ThemeIcon } from '@/assets';
import FAQ from '@/components/FAQ';
import Jumbotron from '@/components/Jumbotron';
import { NextComponentWithSeo } from '@/types/next-page-with-seo';
import { Box, Button, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Tilt from 'react-parallax-tilt';

type HomeProps = {} & NextComponentWithSeo;

const Home: NextComponentWithSeo<HomeProps> = () => {
  const router = useRouter();
  const smallScreen = useMediaQuery('(max-width: 575px)');

  return (
    <Box>
      <Jumbotron>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Tilt
              scale={1.2}
              transitionSpeed={2500}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box w={{ base: 300, sm: 500, md: 600, lg: 750 }}>
                <ThemeIcon />
              </Box>
            </Tilt>
          </Box>
          <Box
            p={smallScreen ? 8 : 12}
            sx={{
              position: 'absolute',
              backgroundColor: '#fff',
              bottom: smallScreen ? -26 : -42,
              borderRadius: 999,
            }}
          >
            <Button
              variant='light'
              size={smallScreen ? 'sm' : 'xl'}
              radius='xl'
              color='violet'
              onClick={() => router.push('/register')}
            >
              Daftar
            </Button>
          </Box>
        </Box>
      </Jumbotron>

      <FAQ />
    </Box>
  );
};

Home.title = 'Beranda';
Home.pageTitle = 'Beranda';

export default Home;
