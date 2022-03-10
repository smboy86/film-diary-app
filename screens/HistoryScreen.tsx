import { Text } from 'react-native-elements';
import { Box } from '../components/basic';

import { RootLoginStackScreenProps } from '../types';

export default function HistoryScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  return (
    <Box full center>
      <Text>기록 날짜 확인하기</Text>
    </Box>
  );
}
