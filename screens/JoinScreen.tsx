import { useNavigation } from '@react-navigation/native';
import { Button, Checkbox, Input, Text } from 'native-base';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Alert, Linking } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import ApiAuth from '../api/auth';
import { Box, BoxPressable } from '../components/basic';
import { URL_PRIVACY, URL_TERMS } from '../constants/Options';

type Inputs = {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  agreeTermPrivacy: boolean;
};

export default function JoinScreen() {
  const navigation = useNavigation();

  const { handleSubmit, control } = useForm<Inputs>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
      agreeTermPrivacy: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log('onSubmit :: ', data);
    if (data.password !== data.passwordConfirm) {
      Alert.alert('', '패스워드가 일치하지 않습니다. 확인해주세요.');
      return;
    }
    try {
      const result = await ApiAuth.join(data);
      Alert.alert('', `${result.name}님 환영합니다 :D`);
      navigation.goBack();
    } catch (error) {
      console.log('fail..   :: ', error);
      Alert.alert('오류', '회원가입시 오류 발생');
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
          <Controller
            name={'email'}
            control={control}
            rules={{
              required: '필수 입력입니다.',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChangeText={onChange}
                  w={'100%'}
                  mt={1}
                  placeholder='이메일 입력'
                  variant={'outline'}
                  borderColor={'light.400'}
                />
                {error && (
                  <Box>
                    <Text color={'red.900'}>{error.message}</Text>
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box wFull mb={8} pb={16}>
          <Text>필명</Text>
          <Controller
            name={'name'}
            control={control}
            rules={{
              required: '필수 입력입니다.',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChangeText={onChange}
                  w={'100%'}
                  mt={1}
                  placeholder='필명 입력'
                  variant={'outline'}
                  borderColor={'light.400'}
                />
                {error && (
                  <Box>
                    <Text color={'red.900'}>{error.message}</Text>
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box wFull mb={8} pb={16}>
          <Text>패스워드 입력</Text>
          <Controller
            name={'password'}
            control={control}
            rules={{
              required: '필수 입력입니다.',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  w={'100%'}
                  mt={1}
                  placeholder='패스워드 입력'
                  variant={'outline'}
                  borderColor={'light.400'}
                />
                {error && (
                  <Box>
                    <Text color={'red.900'}>{error.message}</Text>
                  </Box>
                )}
              </>
            )}
          />
        </Box>
        <Box wFull mb={8} pb={16}>
          <Text>패스워드 확인</Text>
          <Controller
            name={'passwordConfirm'}
            control={control}
            rules={{
              required: '필수 입력입니다.',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  w={'100%'}
                  mt={1}
                  placeholder='패스워드 확인'
                  variant={'outline'}
                  borderColor={'light.400'}
                />
                {error && (
                  <Box>
                    <Text color={'red.900'}>{error.message}</Text>
                  </Box>
                )}
              </>
            )}
          />
        </Box>
      </Box>
      <Box ph={16}>
        <Box mb={12}>
          <Controller
            name={'agreeTermPrivacy'}
            control={control}
            rules={{
              required: '동의하셔야 가입이 가능합니다.',
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Checkbox
                  value='tess'
                  name='agreeTermPrivacy'
                  shadow={2}
                  onChange={onChange}>
                  <Box center>
                    <Text>
                      <BoxPressable
                        onPress={() => Linking.openURL(URL_TERMS)}
                        pl={10}>
                        <Text color={'info.900'}>이용약관</Text>
                      </BoxPressable>
                      과
                      <BoxPressable
                        onPress={() => Linking.openURL(URL_PRIVACY)}
                        pl={10}>
                        <Text color={'info.900'}>개인정보처리방침</Text>
                      </BoxPressable>
                      에 동의합니다.
                    </Text>
                  </Box>
                </Checkbox>
                <Box height={24}>
                  {error && <Text color={'red.900'}>{error.message}</Text>}
                </Box>
              </>
            )}
          />
        </Box>
        <Button onPress={handleSubmit(onSubmit)} px='3'>
          회원가입
        </Button>
      </Box>
    </SafeAreaView>
  );
}
