import { Text, Icon, Menu, Pressable } from 'native-base';
import { Entypo } from '@native-base/icons';

import { Box } from '../components/basic';

import { RootLoginStackScreenProps } from '../types';

export default function HistoryScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  return (
    <Box center full>
      <Text>기록 날짜 확인하기</Text>
      <Box border>
        <Menu
          shadow={2}
          w='190'
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel='More options menu'
                {...triggerProps}>
                <Icon as={Entypo} name='user'></Icon>
              </Pressable>
            );
          }}>
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
          <Menu.Item>Poppins</Menu.Item>
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
          <Menu.Item isDisabled>Sofia</Menu.Item>
          <Menu.Item>Cookie</Menu.Item>
        </Menu>
      </Box>
    </Box>
  );
}
