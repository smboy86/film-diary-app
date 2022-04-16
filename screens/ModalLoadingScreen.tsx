import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Center, Divider, Progress, Skeleton, Text, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { DeviceEventEmitter, Platform } from 'react-native';
import { Box } from '../components/basic';
import Layout from '../constants/Layout';
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

    return () => {
      DeviceEventEmitter.emit('home');
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(progress + 3);
    }, 65);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    // 스켈레톤
    // <Box full border>
    //   <Box full center>
    //     <Center w='100%'>
    //       <VStack
    //         w='90%'
    //         maxW='400'
    //         borderWidth='1'
    //         space={8}
    //         overflow='hidden'
    //         rounded='md'
    //         _dark={{
    //           borderColor: 'coolGray.500',
    //         }}
    //         _light={{
    //           borderColor: 'coolGray.200',
    //         }}>
    //         <Skeleton h='40' />
    //         <Skeleton.Text px='4' />
    //         <Skeleton px='4' my='4' rounded='md' startColor='primary.100' />
    //       </VStack>
    //     </Center>
    //     <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    //   </Box>
    //   <Progress value={progress} mx='4' mb={10} />
    // </Box>
    <Box full center>
      <Text fontWeight={'bold'}>
        내가 먼저 행복해야만, 누군가에 행복을 바랄 수 있다.
      </Text>
      <Box wFull ph={Layout.window.width * 0.3}>
        <Divider thickness={1} bg='#000' mt={2} />
      </Box>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Box>
  );
}
