import { Feather, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, Text } from 'native-base';
import { useEffect, useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import Images from '../constants/Images';
import Layout from '../constants/Layout';

export default function NotiSettingScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props: any) => (
        <BoxPressable onPress={() => navigation.navigate('NewFilm')} pr={12}>
          <Feather name='film' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView
      _contentContainerStyle={{
        px: '16px',
      }}>
      <Box wFull row aCenter pv={30}>
        <Text fontSize={'3xl'} mr={2}>
          알림 설정
        </Text>
      </Box>
      <BoxPressable onPress={() => navigation.navigate('PostDairy')} aCenter>
        <Box wFull pb={12}>
          <Text fontSize={18}>1번 필름</Text>
        </Box>
        <Image
          source={Images.imgA}
          width={Layout.screen.width * 0.924}
          height={Layout.screen.width * 0.582}
          alt='img'
        />
        <Box wFull row space mt={10}>
          <Fontisto name='film' size={20} />
          <Text>(10/36)</Text>
        </Box>
      </BoxPressable>
      <BoxPressable
        onPress={() => Alert.alert('', '필름통 보기')}
        aCenter
        mt={20}>
        <Box wFull pb={12}>
          <Text fontSize={18}>2번 필름</Text>
        </Box>
        <Image
          source={Images.imgB}
          width={Layout.screen.width * 0.924}
          height={Layout.screen.width * 0.582}
          alt='img'
        />
        <Box wFull row space mt={10}>
          <Fontisto name='film' size={20} />
          <Text>(10/36)</Text>
        </Box>
      </BoxPressable>
    </ScrollView>
  );
}
