import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, Input, Icon, AlertDialog } from 'native-base';
import { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSetRecoilState } from 'recoil';

import { Box, BoxPressable } from '../components/basic';
import { pxToDp } from '../constants/Layout';
import authAtomState from '../recoil/auth/authAtomState';
import { RootAuthStackScreenProps } from '../types';
import ApiAuth from '../api/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const setAuth = useSetRecoilState(authAtomState);
  const navigation = useNavigation<RootAuthStackScreenProps<'Login'>>();
  const cancelRef = useRef(null);

  const login = async () => {
    try {
      const ttt = await ApiAuth.login({
        email: email,
        password: pw,
      });

      setAuth({ isLogin: true });
    } catch (error) {
      console.log('fail..   :: ', error);
      setIsOpen(true);
    }
  };

  const onClose = () => setIsOpen(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>알림</AlertDialog.Header>
          <AlertDialog.Body>이메일과 패스워드를 확인해주세요.</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button colorScheme='light' onPress={() => setIsOpen(false)}>
                확인
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
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
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={pw}
            onChangeText={(text) => setPw(text)}
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
            <Button onPress={login} px='3'>
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
