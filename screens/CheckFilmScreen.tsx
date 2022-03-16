import { Text } from 'native-base';
import { Box } from '../components/basic';

import { RootLoginStackScreenProps } from '../types';

export default function CheckFilmScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  return (
    <Box full center>
      <Text>현상된 필름 </Text>
    </Box>
  );
}
