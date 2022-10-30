import React from 'react';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Box, Grid, Text } from '@mantine/core';
import QRCode from 'react-qr-code';

function CardTicket(data: any) {
  const { isMedium } = useWindowSize();

  const ticketData = data?.data;

  return (
    <Tilt
      scale={1.15}
      transitionSpeed={2500}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        sx={{
          backgroundColor: '#fff',
          borderRadius: 16,
          boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
          border: '2px solid #f5f5f5',
          width: isMedium ? '100%' : 600,
          height: isMedium ? '100%' : 300,
        }}
      >
        <Grid.Col xs={12} sm={8} md={8} lg={8} sx={{ padding: 0 }}>
          <Box
            sx={{
              borderLeft: !isMedium ? '2px dashed #f5f5f5' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
            p={16}
          >
            <Text size={28} weight='bold' align='center'>
              I-Gate
            </Text>
            <Box>
              <Text size={14} weight='bold' align='center'>
                17 December 2022
              </Text>
              <Text size={14} weight='bold' align='center'>
                3 PM to 9 PM
              </Text>
              <Text size={14} weight='bold' align='center'>
                @ Prof.Soedarto
              </Text>
            </Box>
          </Box>
        </Grid.Col>

        <Grid.Col xs={12} sm={4} md={4} lg={3} sx={{ padding: 0 }}>
          <Box
            sx={{
              borderLeft: !isMedium ? '2px dashed #f5f5f5' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
            p={16}
          >
            <Text size={28} weight='bold' align='center'>
              I-Gate
            </Text>

            <Box>
              <Text size={10} align='center' sx={{ opacity: 0.5 }}>
                Issued to
              </Text>
              <Text align='center'>{ticketData?.fields?.name}</Text>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <QRCode
                size={64}
                style={{ height: 96, maxWidth: '100%', width: '100%' }}
                value={ticketData?.fields?.ticketId}
                viewBox='0 0 64 64'
              />
              <Box p={8} sx={{ backgroundColor: '#f5f5f5', borderRadius: 8 }}>
                <Text size={12}>#{ticketData?.fields?.ticketId}</Text>
              </Box>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Tilt>
  );
}

export default CardTicket;
