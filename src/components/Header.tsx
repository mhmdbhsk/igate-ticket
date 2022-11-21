import { LogoIcon } from '@/assets';
import { useWindowSize } from '@/hooks/useWindowSize';
import theme from '@/styles/theme';
import { Box, Container, Text } from '@mantine/core';
import { useRouter } from 'next/router';

export default function Header() {
  const { isMedium } = useWindowSize();
  const router = useRouter();

  return (
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
        sx={() => ({
          display: 'flex',
          flexDirection: isMedium ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Box sx={{ width: 100 }}>
          <LogoIcon />
        </Box>
      </Container>
    </Box>
  );
}
