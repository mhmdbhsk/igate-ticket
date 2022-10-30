import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { Box, Button, Container, Text } from '@mantine/core';
import { useWindowSize } from '@/hooks/useWindowSize';

const inter = Inter();

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isMedium } = useWindowSize();

  return (
    <Container
      size='lg'
      px='xs'
      sx={{ position: 'relative' }}
      className={inter.className}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }}
      >
        <Container
          size='sm'
          p='lg'
          className={inter.className}
          sx={{
            display: 'flex',
            flexDirection: isMedium ? 'column' : 'row',
            justifyContent: isMedium ? 'center' : 'space-between',
            alignItems: 'center',
          }}
        >
          <Text weight='bold'>I-Gate</Text>
          <Text size={12}>Informatics! Gate to the Future</Text>
        </Container>
      </Box>
      <Box
        sx={{
          height: '100%',
          minHeight: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
