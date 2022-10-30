import { useMediaQuery } from '@mantine/hooks';

export const useWindowSize = () => {
  const isSmall = useMediaQuery('(max-width: 30em)');
  const isMedium = useMediaQuery('(max-width: 48em)');
  const isLarge = useMediaQuery('(max-width: 62em)');
  const isExtraLarge = useMediaQuery('(max-width: 80em)');
  const isSuperLarge = useMediaQuery('(max-width: 96em)');

  return { isSmall, isMedium, isLarge, isExtraLarge, isSuperLarge };
};
