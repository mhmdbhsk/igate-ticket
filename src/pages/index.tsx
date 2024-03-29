import FAQ from '@/components/FAQ';
import Jumbotron from '@/components/Jumbotron';
import faqConfigs from '@/configs/faq-configs';
import { NextComponentWithSeo } from '@/types/next-page-with-seo';
import { Box, Button, Flex, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Tilt from 'react-parallax-tilt';

type HomeProps = {} & NextComponentWithSeo;

const Home: NextComponentWithSeo<HomeProps> = () => {
  const router = useRouter();
  const smallScreen = useMediaQuery('(max-width: 767px)');

  return (
    <Box>
      <Jumbotron>
        <Box
          p={{
            base: '0px 0px 64px',
            sm: '16px 0px 74px',
            md: '24px 0px 96px',
            lg: '64px 0px 128px',
          }}
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
              transform: 'translateZ(100px)',
            }}
          >
            <Tilt
              scale={1.05}
              transitionSpeed={2500}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                w={{ base: 300, sm: 600, md: 800, lg: 900 }}
                sx={{
                  borderRadius: 32,
                  background: '#000',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    zIndex: 99,
                    color: 'white',
                  }}
                >
                  <span style={{ fontSize: 32, fontWeight: 'bold' }}>
                    Penjualan Tiket Ditutup
                  </span>
                  <span style={{ fontSize: 16, width: '50%' }}>
                    Tenang, kamu masih bisa menikmati keseruannya dengan membeli
                    tiket on the spot di Prof. Soedarto
                  </span>
                </Box>
                <Image
                  alt='Ticket'
                  src={
                    smallScreen
                      ? '/images/vertical-ticket.webp'
                      : '/images/ticket.webp'
                  }
                  styles={{
                    image: {
                      borderRadius: 32,
                    },
                    imageWrapper: {
                      opacity: 0.3,
                      boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
                    },
                  }}
                />
              </Box>
            </Tilt>
          </Box>
          <Box
            p={smallScreen ? 8 : 12}
            sx={{
              position: 'absolute',
              backgroundColor: '#fff',
              bottom: -42,
              borderRadius: 999,
            }}
          >
            <Button
              size={'xl'}
              radius='xl'
              onClick={() => router.push('/register')}
              sx={{ fontFamily: '__Lilita_One_4c05dc' }}
              disabled
              styles={(theme) => ({
                root: {
                  background: theme.colors.brand6[4],
                  color: theme.colors.brand5[1],
                  ':hover': {
                    background: theme.colors.brand6[6],
                  },
                },
              })}
            >
              Beli Tiket
            </Button>
          </Box>
        </Box>
      </Jumbotron>

      <Box mt={64}>
        <FAQ data={faqConfigs} />
      </Box>
    </Box>
  );
};

Home.title = 'Beranda';
Home.pageTitle = 'Beranda';

export default Home;
