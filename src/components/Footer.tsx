import { InstagramIcon, LogoIcon, WhatsAppIcon } from '@/assets';
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Box,
  Tooltip,
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons';

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
          <LogoIcon />
        </Box>
        <Group spacing={0} position='right' noWrap>
          <Tooltip label='Instagram I-Gate 2022'>
            <ActionIcon
              size='lg'
              component='a'
              href='https://www.instagram.com/igate.2022/'
              target='_blank'
            >
              <InstagramIcon />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Narahubung 1'>
            <ActionIcon
              size='lg'
              component='a'
              href='https://wa.me/62'
              target='_blank'
            >
              <WhatsAppIcon />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Narahubung 2'>
            <ActionIcon
              size='lg'
              component='a'
              href='https://wa.me/62'
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
