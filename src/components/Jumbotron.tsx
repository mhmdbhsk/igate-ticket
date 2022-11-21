import { BackgroundImage, Box, BoxProps } from '@mantine/core';

type JumbotronProps = {
  children: React.ReactNode;
  fullHeight?: boolean;
} & BoxProps;

const Jumbotron = ({ children, fullHeight, ...rest }: JumbotronProps) => {
  return (
    <BackgroundImage
      component={Box}
      src='/images/BackgroundLayer.svg'
      h={{ base: 250, xs: 300, sm: 400, lg: 500 }}
      sx={{ width: '100vw' }}
      {...rest}
    >
      {children}
    </BackgroundImage>
  );
};

export default Jumbotron;
