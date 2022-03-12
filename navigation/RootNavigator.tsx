import { NavigationContainer } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import authAtom from '../recoil/common/atom';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default function RootNavigator() {
  const [auth, setAuth] = useRecoilState(authAtom);

  // 로그인 처리
  return (
    <NavigationContainer>
      {!auth.isLogin ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
}
