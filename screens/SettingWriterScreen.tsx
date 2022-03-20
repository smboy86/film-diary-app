import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AlertDialog, Button, Image, Input, Text } from 'native-base';
import { useLayoutEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useRecoilState } from 'recoil';
import { Box, BoxPressable } from '../components/basic';
import Images from '../constants/Images';
import authAtomState from '../recoil/auth/authAtomState';
import commonAtomState from '../recoil/common/commonAtomState';

export default function SettingWriterScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const cancelRef = useRef(null);
  const navigation = useNavigation();
  const [authAtom, setAuthAtom] = useRecoilState(authAtomState);
  const [commonAtom, setCommonAtom] = useRecoilState(commonAtomState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props: any) => (
        <BoxPressable onPress={() => Alert.alert('', '저장하기')} pr={12}>
          <Feather name='save' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
    });
  }, [navigation]);

  const onClose = () => setIsOpen(false);

  const onLogout = () => {
    setCommonAtom({
      isMainLoading: true,
    }),
      setAuthAtom({
        isLogin: false,
      });
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
        <Input w={'80%'} placeholder='필명' />
      </Box>
      <Box full center pt={'55%'}>
        <BoxPressable onPress={() => setIsOpen(true)}>
          <Text>로그아웃</Text>
        </BoxPressable>
      </Box>
    </Box>
  );
}
