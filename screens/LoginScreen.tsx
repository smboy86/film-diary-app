import { useSetRecoilState } from 'recoil';
import { Box, BoxPressable } from '../components/basic';

import { Text } from '../components/Themed';
import authAtom from '../recoil/common/atom';
import { RootLoginStackScreenProps } from '../types';

export default function LoginScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  const setAuth = useSetRecoilState(authAtom);

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
