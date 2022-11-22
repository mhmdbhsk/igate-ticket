import { LogoIcon } from '@/assets';
import { createStyles, Container, Group, ActionIcon, Box } from '@mantine/core';
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

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
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
        <Group spacing={0} className={classes.links} position='right' noWrap>
          <ActionIcon size='lg'>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
