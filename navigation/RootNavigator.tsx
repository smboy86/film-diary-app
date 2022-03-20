import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import authAtomState from '../recoil/auth/authAtomState';
import exampleWithParens from '../recoil/auth/withParens';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default function RootNavigator() {
  const [authAtom, setAuthAtom] = useRecoilState(authAtomState);
  const ttt = useRecoilValue(exampleWithParens);

  useEffect(() => {
    console.log('Root useRecoilValue   ', ttt);
  }, []);

  // 로그인 처리
  return (
    <NavigationContainer>
      {!authAtom.isLogin ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
}
