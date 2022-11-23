import { ReactNode } from 'react';

import { Box, Container } from '@mantine/core';
import PageTransition from './PageTransition';
import { motion, useScroll, useSpring } from 'framer-motion';

import CustomSeo from './CustomSeo';
import Footer from './Footer';

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
    <Box>
      <motion.div style={{ scaleX }} />

      <Container
        size='lg'
        sx={{
          position: 'relative',
          minHeight: 'calc(100vh - 96px)',
          height: '100%',
        }}
      >
        <CustomSeo title={pageTitle} />
        {/* <Header /> */}
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
