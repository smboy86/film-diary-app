import { Text } from 'react-native-elements';
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
