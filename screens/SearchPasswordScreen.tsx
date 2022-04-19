import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from 'native-base';
import { useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '../components/basic';
import ApiAuth from '../api/auth';

export default function SearchPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const searchEmail = async () => {
    if (email === '' || email.length <= 3) {
      Alert.alert('', '이메일을 입력해주세요');
      return;
    }
    try {
      const result = await ApiAuth.getUserByEmail(email);

      if (result.data !== null) {
        Alert.alert(
          '확인',
          `${result.data.email} 으로 비밀번호 찾는 메일을 발송했습니다. (미구현)`
        );
        navigation.goBack();
      } else {
        Alert.alert('확인', `${email}은 존재하지 않는 이메일 입니다.`);
      }
    } catch (error) {
      console.log('errr : ', error);
    }
  };

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
            value={email}
            onChangeText={(text) => setEmail(text)}
            w={'100%'}
            mt={1}
            placeholder='이메일 입력'
            variant={'outline'}
            borderColor='light.400'
          />
        </Box>
      </Box>
      <Box ph={16}>
        <Button onPress={searchEmail} px='3'>
          비밀번호 찾기
        </Button>
      </Box>
    </SafeAreaView>
  );
}
