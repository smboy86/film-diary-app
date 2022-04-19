import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Divider, Image, Text } from 'native-base';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Alert, DeviceEventEmitter } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import { RootMainNavigateProps, RootMainRouteProps } from '../types';
import Swiper from 'react-native-swiper';
import ApiFilm from '../api/film';
import { useRecoilState } from 'recoil';
import authAtomState from '../recoil/auth/authAtomState';

export default function NewFilmScreen() {
  const [filmList, setFilmList] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  const navigation = useNavigation<RootMainNavigateProps<'PostDairy'>>();
  const route = useRoute<RootMainRouteProps<'NewFilm'>>();
  const [authAtom, setAuthAtom] = useRecoilState(authAtomState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '새 필름 생성',
      headerRight: (props: any) => (
        <BoxPressable onPress={selectFilm} pr={12}>
          <Feather name='film' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
    });
  }, [navigation, curIndex, filmList]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await ApiFilm.getAllFilmList();
        // console.log('asdfdasf :: ', result);
        setFilmList(result.data);
      } catch (error) {}
    }

    getData();

    return () => {
      DeviceEventEmitter.emit('home');
    };
  }, []);

  const selectFilm = () => {
    Alert.alert(
      '필름',
      '필름을 생성하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: async () => {
            try {
              const result = await ApiFilm.createMyFilm({
                filmIndex: route.params.lastFilmIndex + 1,
                filmName: filmList[curIndex]['name'],
                filmId: filmList[curIndex]['id'],
                userId: authAtom.userId,
              });

              Alert.alert('', '새로운 필름이 생성되었습니다.');
            } catch (error) {
              Alert.alert('오류', '필름 생성시 오류');
              console.log('errr :: ', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (filmList.length <= 0) {
    return null;
  }

  return (
    <Box full>
      <Box center pt={60}>
        <Text>어떤 필름에 기록해볼까요?</Text>
        <Box wFull ph={'30%'}>
          <Divider thickness={2} bg='#656565' mt={2} />
        </Box>
      </Box>
      <Box full center>
        <Swiper
          loop={false}
          onIndexChanged={(idx) => {
            setCurIndex(idx);
          }}>
          {filmList.map((item, idx) => {
            return (
              <BoxPressable
                onPress={() => null}
                height={250}
                key={idx.toString()}>
                <Box center mt={140}>
                  <Image
                    source={{ uri: item.image }}
                    size={168}
                    alt='img film box'
                  />
                </Box>
                <Box center mt={30}>
                  <Text mt={2}>필름명: {item.name}</Text>
                  <Text mt={4}>필름 수 : ({item.maxSize})</Text>
                </Box>
              </BoxPressable>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}
