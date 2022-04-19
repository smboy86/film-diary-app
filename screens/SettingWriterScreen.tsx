import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AlertDialog, Button, Image, Input, Text } from 'native-base';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Box, BoxPressable } from '../components/basic';
import Images from '../constants/Images';
import authAtomState from '../recoil/auth/authAtomState';
import commonAtomState from '../recoil/common/commonAtomState';
import ApiAuth from '../api/auth';

export default function SettingWriterScreen() {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const cancelRef = useRef(null);
  const navigation = useNavigation();
  const [authAtom, setAuthAtom] = useRecoilState(authAtomState);
  const [commonAtom, setCommonAtom] = useRecoilState(commonAtomState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props: any) => (
        <BoxPressable onPress={saveName} pr={12}>
          <Feather name='save' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
    });
  }, [navigation, name]);

  useEffect(() => {
    async function getData() {
      try {
        const email = await AsyncStorage.getItem('@loginUserEmmail');
        if (email) {
          const result = await ApiAuth.getUserByEmail(email);
          setName(result.data.name);
        }
      } catch (error) {}
    }

    getData();
  }, []);

  const saveName = async () => {
    try {
      const result = await ApiAuth.modName({ id: authAtom.userId, name: name });
      if (result) {
        Alert.alert('', '필명이 수정되었습니다.');
      }
    } catch (error) {
      Alert.alert('', '프로필 업데이트 오류');
    }
  };

  const onClose = () => setIsOpen(false);

  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem('@loginUserId');

      setAuthAtom({
        isLogin: false,
        userId: '9999',
      });

      setCommonAtom({
        isMainLoading: true,
      });
    } catch (error) {
      console.log('errr :: ', error);
    }
  };

  return (
    <Box full ph={16}>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>알림</AlertDialog.Header>
          <AlertDialog.Body>로그아웃 하시겠습니까?</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant='unstyled'
                colorScheme='coolGray'
                onPress={onClose}
                ref={cancelRef}>
                취소
              </Button>
              <Button colorScheme='light' onPress={onLogout}>
                확인
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Box wFull row aCenter pv={30}>
        <Text fontSize={'3xl'} mr={2}>
          필명 설정
        </Text>
      </Box>
      <Box center>
        <Image
          source={Images.imgWriter}
          alt='필명 아이콘'
          style={{
            width: 198,
            height: 135,
          }}
        />
      </Box>
      <Box center>
        <Text fontSize={'md'} mt={6}>
          필명
        </Text>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          w={'80%'}
          placeholder='필명'
        />
      </Box>
      <Box full center pt={'55%'}>
        <BoxPressable onPress={() => setIsOpen(true)}>
          <Text>로그아웃</Text>
        </BoxPressable>
      </Box>
    </Box>
  );
}
