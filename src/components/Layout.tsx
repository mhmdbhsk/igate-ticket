import { ReactNode } from 'react';
import { Inter, Lilita_One, Secular_One } from '@next/font/google';
import { Box, Container } from '@mantine/core';
import PageTransition from './PageTransition';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './Header';
import CustomSeo from './CustomSeo';
import Footer from './Footer';

const inter = Inter();
const lilita = Lilita_One({ weight: '400' });

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box className='body-grain-effect'>
      <motion.div style={{ scaleX }} />

      <Container
        size='lg'
        px='xs'
        sx={{ position: 'relative' }}
        className={(inter.className, lilita.className)}
      >
        <CustomSeo title={pageTitle} />
        <Header />
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
            gap: 16,
            height: '100%',
          }}
        >
          <PageTransition>{children}</PageTransition>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
