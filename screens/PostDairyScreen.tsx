import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { Image, Input, ScrollView, Text, TextArea } from 'native-base';
import { useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import { RootMainNavigateProps } from '../types';
import IcoCamera from '../assets/svgs/IcoCamera.svg';
import Images from '../constants/Images';

export default function PostDairyScreen() {
  const navigation = useNavigation<RootMainNavigateProps<'PostDairy'>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props: any) => (
        // <BoxPressable onPress={() => Alert.alert('', '저장하기')} pr={12}>
        <BoxPressable
          onPress={() =>
            navigation.navigate('ModalLoadingPost', {
              nextScreen: 'Home',
            })
          }
          pr={12}>
          <Feather name='save' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
      headerTitle: dayjs(new Date()).format('YYYY. MM. DD'),
      headerTitleStyle: {
        // 작동 안됨
        textDecorationLine: 'underline',
      },
    });
  }, [navigation]);

  return (
    <Box full>
      <Box ph={16} pt={16} full>
        <Input w={'100%'} mb={4} placeholder='제목' fontSize={20} />
        <ScrollView height={'full'}>
          <TextArea
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
