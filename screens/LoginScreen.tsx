import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, Input, Icon } from 'native-base';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSetRecoilState } from 'recoil';
import { Box, BoxPressable } from '../components/basic';
import { pxToDp } from '../constants/Layout';

import authAtomState from '../recoil/auth/authAtomState';
import { RootAuthStackScreenProps } from '../types';

export default function LoginScreen() {
  const setAuth = useSetRecoilState(authAtomState);
  const navigation = useNavigation<RootAuthStackScreenProps<'Login'>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box aStart pt={pxToDp(127)} ph={16}>
        <Box center>
          <Box pb={pxToDp(14)}>
            <Entypo name='open-book' size={pxToDp(50)} color='black' />
          </Box>
          <Text
            style={{
              textDecorationLine: 'underline',
            }}>
            일기의 온기
          </Text>
        </Box>
        <Box wFull pt={pxToDp(140)}>
          <Input
            w={'100%'}
            mb={4}
            InputLeftElement={
              <Icon
                as={<Entypo name='email' />}
                size={5}
                ml='2'
                color='light.700'
              />
            }
            placeholder='이메일'
          />
          <Input
            w={'100%'}
            InputLeftElement={
              <Icon
                as={<Feather name='hash' />}
                size={5}
                ml='2'
                color='light.700'
              />
            }
            placeholder='패스워드'
            secureTextEntry
          />
          <Box ph={24} pt={20}>
            <Button onPress={() => setAuth({ isLogin: true })} px='3'>
              기록하기
            </Button>
            <Box row space pt={20} ph={20}>
              <BoxPressable
                onPress={() => navigation.navigate('SearchPasswrd')}>
                <Text>비밀번호 찾기</Text>
              </BoxPressable>
              <BoxPressable onPress={() => navigation.navigate('Join')}>
                <Text>회원가입</Text>
              </BoxPressable>
            </Box>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
