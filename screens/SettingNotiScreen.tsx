import { Text } from 'react-native-elements';
import { Box } from '../components/basic';

import { RootLoginStackScreenProps } from '../types';

export default function SettingNotiScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  return (
    <Box full center>
      <Text>알림설정</Text>
    </Box>
  );
}
