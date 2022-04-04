import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from 'native-base';
import { useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { pxToDp } from '../constants/Layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '../components/basic';

export default function SearchPasswordScreen() {
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
      </Box>
      <Box ph={16}>
        <Button onPress={() => Alert.alert('', '비밀번호 찾기')} px='3'>
          비밀번호 찾기
        </Button>
      </Box>
    </SafeAreaView>
  );
}
