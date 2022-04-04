import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from 'native-base';
import { useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { pxToDp } from '../constants/Layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '../components/basic';

export default function JoinScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        aStart
        ph={16}
        style={{
          flex: 1,
        }}>
        <Box wFull mb={8} pb={16}>
          <Text>이메일</Text>
          <Input
            w={'100%'}
            mt={1}
            placeholder='이메일 입력'
            variant={'outline'}
            borderColor='light.400'
          />
        </Box>
        <Box wFull mb={8} pb={16}>
          <Text>이름</Text>
          <Input
            w={'100%'}
            mt={1}
            placeholder='이름 입력'
            variant={'outline'}
            borderColor='light.400'
          />
        </Box>
        <Box wFull mb={8} pb={16}>
          <Text>패스워드 입력</Text>
          <Input
            w={'100%'}
            mt={1}
            secureTextEntry
            placeholder='패스워드 입력'
            variant={'outline'}
            borderColor='light.400'
          />
        </Box>
        <Box wFull mb={8} pb={16}>
          <Text>패스워드 확인</Text>
          <Input
            w={'100%'}
            mt={1}
            placeholder='패스워드 확인 입력'
            secureTextEntry
            variant={'outline'}
            borderColor='light.400'
          />
        </Box>
      </Box>
      <Box ph={16}>
        <Button onPress={() => Alert.alert('', '회원가입')} px='3'>
          회원가입
        </Button>
      </Box>
    </SafeAreaView>
  );
}
