import { Text } from 'react-native-elements';
import { Box } from '../components/basic';

import { RootLoginStackScreenProps } from '../types';

export default function HomeScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  return (
    <Box full center>
      <Text>홈</Text>
    </Box>
  );
}
