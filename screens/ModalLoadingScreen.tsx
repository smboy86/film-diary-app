import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Center, Progress, Skeleton, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Box } from '../components/basic';
import { LOADING_TIME } from '../constants/Options';

export default function ModalLoadingScreen() {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    setTimeout(() => {
      // Todo 뒤로가기 작동되면 안됨
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //   })
      // );
      navigation.navigate(route.params.nextScreen);
    }, LOADING_TIME);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(progress + 3);
    }, 65);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <Box full border>
      <Box full center>
        <Center w='100%'>
          <VStack
            w='90%'
            maxW='400'
            borderWidth='1'
            space={8}
            overflow='hidden'
            rounded='md'
            _dark={{
              borderColor: 'coolGray.500',
            }}
            _light={{
              borderColor: 'coolGray.200',
            }}>
            <Skeleton h='40' />
            <Skeleton.Text px='4' />
            <Skeleton px='4' my='4' rounded='md' startColor='primary.100' />
          </VStack>
        </Center>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </Box>
      <Progress value={progress} mx='4' mb={10} />
    </Box>
  );
}
