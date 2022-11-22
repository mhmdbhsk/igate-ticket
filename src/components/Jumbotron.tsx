import { BackgroundImage, Box, BoxProps } from '@mantine/core';
import Header from './Header';

type JumbotronProps = {
  children: React.ReactNode;
  fullHeight?: boolean;
} & BoxProps;

const Jumbotron = ({ children, fullHeight, ...rest }: JumbotronProps) => {
  return (
    <BackgroundImage
      component={Box}
      src='/images/BackgroundLayer.jpg'
      sx={{ width: '100vw' }}
      className='body-grain-effect'
      {...rest}
    >
      <Header />
      <Box>{children}</Box>
    </BackgroundImage>
  );
};

export default Jumbotron;
