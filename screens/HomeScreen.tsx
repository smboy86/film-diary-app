import { Feather, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Center,
  Container,
  Image,
  ScrollView,
  Text,
} from 'native-base';
import { useEffect, useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import { MainDrawStackNavigateProps } from '../types';
import Images from '../constants/Images';
import Layout from '../constants/Layout';

const testImg = require('../assets/images/imgA.png');

export default function HomeScreen() {
  const navigation = useNavigation<MainDrawStackNavigateProps<'Home'>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <BoxPressable onPress={() => Alert.alert('', '새필름 만들기')} pr={12}>
          <Feather name='film' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
    });
  }, [navigation]);

  // const route = useRoute<MainDrawScreenProps<'History'>>();

  // useEffect(() => {
  // }, []);

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
      <BoxPressable onPress={() => Alert.alert('', '필름통 보기')} aCenter>
        <Box wFull pb={12}>
          <Text fontSize={18}>1번 필름</Text>
        </Box>

        {/* <Image source={Images.imgA} width={100} height={200} alt='img' /> */}
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

        {/* <Image source={Images.imgA} width={100} height={200} alt='img' /> */}
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
