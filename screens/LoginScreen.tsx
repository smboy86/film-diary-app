import { Text } from 'react-native-elements/dist/Text';
import { useSetRecoilState } from 'recoil';
import { Box, BoxPressable } from '../components/basic';

import authAtomState from '../recoil/auth/authAtomState';
import { RootLoginStackScreenProps } from '../types';

export default function LoginScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  const setAuth = useSetRecoilState(authAtomState);

  return (
    <Box full center>
      <Text>로그인 Screen</Text>
      <BoxPressable
        onPress={() => setAuth({ isLogin: true })}
        border
        pd={10}
        mt={10}>
        <Text>로그인 하기</Text>
      </BoxPressable>
    </Box>
  );
}
