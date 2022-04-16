import { Feather, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, Text } from 'native-base';
import { useEffect, useLayoutEffect, useState } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { useRecoilState } from 'recoil';
import ApiFilm from '../api/film';
import { Box, BoxPressable } from '../components/basic';
import Layout from '../constants/Layout';
import authAtomState from '../recoil/auth/authAtomState';

export default function HomeScreen() {
  const [filmList, setFilmList] = useState([]);

  const navigation = useNavigation();
  const [authAtom, setAuthAtom] = useRecoilState(authAtomState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props: any) => (
        <BoxPressable onPress={() => navigation.navigate('NewFilm')} pr={12}>
          <Feather name='film' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await ApiFilm.getMyFilmList(authAtom.userId);
        setFilmList(result.data);
      } catch (error) {}
    }

    DeviceEventEmitter.addListener('home', () => {
      getData();
    });

    getData();
  }, []);

  return (
    <ScrollView
      _contentContainerStyle={{
        px: '16px',
      }}>
      <Box wFull row aCenter pv={30}>
        <Text fontSize={'3xl'} mr={2}>
          List
        </Text>
        <Fontisto name='film' size={30} />
      </Box>
      {filmList.length <= 0 ? (
        <Box>
          <Text>나의 필름이 없습니다.</Text>
        </Box>
      ) : (
        filmList.map((item, idx) => {
          // console.log('ddfsdf ', item);
          return (
            <BoxPressable
              key={idx.toString()}
              onPress={() =>
                navigation.navigate('PostDairy', {
                  myFilmId: item.id,
                })
              }
              aCenter>
              <Box wFull pb={12}>
                <Text fontSize={18}>{item.filmName}</Text>
              </Box>
              <Image
                source={{ uri: item.film.image }}
                width={Layout.screen.width * 0.924}
                height={Layout.screen.width * 0.582}
                alt='img'
              />
              <Box wFull row space mt={10}>
                <Fontisto name='film' size={20} />
                <Text>
                  ({item.dairy.length}/{item.film.maxSize})
                </Text>
              </Box>
            </BoxPressable>
          );
        })
      )}
    </ScrollView>
  );
}
