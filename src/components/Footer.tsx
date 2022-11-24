import { InstagramIcon, WhatsAppIcon } from '@/assets';
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Box,
  Tooltip,
  Image,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `.5px solid ${theme.colors.gray[2]}`,
    height: 96,
  },

  inner: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container size='sm' p='lg' className={classes.inner}>
        <Box sx={{ width: 100 }}>
          <Image src='/images/logo.webp' alt='Logo' width={100} height='100%' />
        </Box>
        <Group spacing={0} position='right' noWrap>
          <Tooltip label='Instagram I-Gate 2022' sx={{ fontSize: 12 }}>
            <ActionIcon
              size='lg'
              component='a'
              href='https://www.instagram.com/igate.2022/'
              target='_blank'
            >
              <InstagramIcon />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Narahubung 1 ( Bima )' sx={{ fontSize: 12 }}>
            <ActionIcon
              size='lg'
              component='a'
              href='https://wa.me/6285265588042'
              target='_blank'
            >
              <WhatsAppIcon />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Narahubung 2 ( Tiara )' sx={{ fontSize: 12 }}>
            <ActionIcon
              size='lg'
              component='a'
              href='https://wa.me/6282166464195'
              target='_blank'
            >
              <WhatsAppIcon />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Container>
    </div>
  );
}
