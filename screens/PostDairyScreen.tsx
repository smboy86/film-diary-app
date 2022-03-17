import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { Input, ScrollView, Text, TextArea } from 'native-base';
import { useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { Box, BoxPressable } from '../components/basic';
import { RootMainNavigateProps } from '../types';

export default function PostDairyScreen() {
  const navigation = useNavigation<RootMainNavigateProps<'PostDairy'>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props: any) => (
        <BoxPressable onPress={() => Alert.alert('', '저장하기')} pr={12}>
          <Feather name='film' size={24} color={props.tintColor} />
        </BoxPressable>
      ),
      headerTitle: dayjs(new Date()).format('YYYY. MM. DD'),
      headerTitleStyle: {
        // 작동 안됨
        textDecorationLine: 'underline',
      },
    });
  }, [navigation]);

  return (
    <Box full>
      <Box ph={16} pt={16} full>
        <Input w={'100%'} mb={4} placeholder='제목' fontSize={20} />
        <ScrollView height={'full'}>
          <TextArea
            w='full'
            h={'full'}
            variant={'unstyled'}
            placeholder='글 내용을 적어주세요'
          />
        </ScrollView>
      </Box>
      <Box
        style={{
          height: 80,
        }}>
        <Box full center>
          {/* <Svgs.svgA /> */}
          <Text>하단바</Text>
        </Box>
      </Box>
    </Box>
  );
}
