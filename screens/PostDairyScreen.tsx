import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { Image, Input, ScrollView, Text, TextArea } from 'native-base';
import { useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import { RootMainNavigateProps, RootMainRouteProps } from '../types';
import Images from '../constants/Images';
import ApiDairy from '../api/dairy';
import { useRecoilState } from 'recoil';
import authAtomState from '../recoil/auth/authAtomState';

export default function PostDairyScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigation = useNavigation<RootMainNavigateProps<'PostDairy'>>();
  const route = useRoute<RootMainRouteProps<'PostDairy'>>();

  const [authAtom, setAuthAtom] = useRecoilState(authAtomState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: dayjs(new Date()).format('YYYY. MM. DD'),
      headerRight: (props: any) => (
        <BoxPressable onPress={() => writeDairy()} pr={12}>
          <Feather name='save' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
      headerTitleStyle: {
        // 작동 안됨
        textDecorationLine: 'underline',
      },
    });
  }, [navigation, title, content]);

  const writeDairy = async () => {
    if (title === '') {
      Alert.alert('', '제목을 입력해주세요.');
      return;
    }
    if (content === '') {
      Alert.alert('', '내용을 입력해주세요.');
      return;
    }
    try {
      const result = await ApiDairy.writeDairy({
        title: title,
        content: content,
        userId: authAtom.userId,
        myFilmId: route.params.myFilmId,
      });

      navigation.navigate('ModalLoadingPost', {
        nextScreen: 'Home',
      });
    } catch (error) {
      console.log('fail..   :: ', error);
      Alert.alert('오류', error.error);
      // setIsOpen(true);
    }
  };

  return (
    <Box full>
      <Box ph={16} pt={16} full>
        <Input
          value={title}
          onChangeText={(text) => setTitle(text)}
          w={'100%'}
          mb={4}
          placeholder='제목'
          fontSize={20}
        />
        <ScrollView height={'full'}>
          <TextArea
            value={content}
            onChangeText={(text) => setContent(text)}
            w='full'
            h={'full'}
            variant={'unstyled'}
            placeholder='글 내용을 적어주세요'
          />
        </ScrollView>
      </Box>
      <Box
        style={{
          height: 80,
        }}>
        <Box full center row space ph={16}>
          <Box full row pv={4}>
            <BoxPressable onPress={() => Alert.alert('', '문자?')} ph={10}>
              <Text>T</Text>
            </BoxPressable>
            <BoxPressable
              onPress={() => Alert.alert('', '사진 업로드')}
              ph={10}>
              <Image source={Images.icoCamera} size={22} alt={'사진 아이콘'} />
            </BoxPressable>
          </Box>
          <Box>
            <Text>(0/500)</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
