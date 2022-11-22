import { Title, Accordion, createStyles, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    backgroundColor: theme.colors.brand4[0],
    border: '1px solid transparent',
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colors.brand6[0],

      boxShadow: theme.shadows.md,
      borderColor: theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));

type FAQProps = {
  data: {
    id: number;
    answer: string | React.ReactNode;
    question: string;
  }[];
};

export default function FAQ({ data }: FAQProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Title
        align='center'
        className={classes.title}
        sx={{ fontFamily: '__Lilita_One_4c05dc' }}
        id='faq'
      >
        Pertanyaan Yang Sering Diajukan
      </Title>

      <Accordion
        sx={{ maxWidth: 500 }}
        mx='auto'
        variant='separated'
        defaultValue='customization'
        classNames={classes}
      >
        {data.map((item) => (
          <Accordion.Item
            className={classes.item}
            value={item.id.toString()}
            key={item.id}
          >
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
