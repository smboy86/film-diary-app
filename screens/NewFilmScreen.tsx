import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { Divider, Image, Input, ScrollView, Text, TextArea } from 'native-base';
import { useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import { RootMainNavigateProps } from '../types';
import Images from '../constants/Images';
import Swiper from 'react-native-swiper';

export default function NewFilmScreen() {
  const navigation = useNavigation<RootMainNavigateProps<'PostDairy'>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '새 필름 생성',
      headerRight: (props: any) => (
        <BoxPressable onPress={() => Alert.alert('', '저장하기')} pr={12}>
          <Feather name='film' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
    });
  }, [navigation]);

  return (
    <Box full>
      <Box center pt={60}>
        <Text>어떤 필름에 기록해볼까요?</Text>
        <Box wFull ph={'30%'}>
          <Divider thickness={2} bg='#656565' mt={2} />
        </Box>
      </Box>
      <Box full center>
        <Box height={250}>
          <Swiper>
            <Box center>
              <Image source={Images.imgFilmBox} size={168} alt='img film box' />
              <Text>1번 필름</Text>
            </Box>
            <Box center>
              <Image source={Images.imgFilmBox} size={168} alt='img film box' />
              <Text>2번 필름</Text>
            </Box>
            <Box center>
              <Image source={Images.imgFilmBox} size={168} alt='img film box' />
              <Text>3번 필름</Text>
            </Box>
          </Swiper>
        </Box>
        <Box>
          <Text mt={2}>필름명:</Text>
          <Text mt={4}>필름 수 : (24,36,48,60)</Text>
        </Box>
      </Box>
    </Box>
  );
}
