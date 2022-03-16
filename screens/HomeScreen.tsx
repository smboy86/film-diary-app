import { Feather, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text } from 'native-base';
import { useEffect, useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import { MainDrawStackNavigateProps } from '../types';

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
    <Box full ph={16}>
      <Box wFull row aCenter pv={30}>
        <Text fontSize={'3xl'} mr={2}>
          List
        </Text>
        <Fontisto name='film' size={30} />
      </Box>
      <Box>
        <Text fontSize={18}>필름이름</Text>
      </Box>
    </Box>
  );
}
