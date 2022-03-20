import { useNavigation } from '@react-navigation/native';
import { ScrollView, Switch, Text } from 'native-base';
import { Box } from '../components/basic';

export default function SettingNotiScreen() {
  const navigation = useNavigation();

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
      <Box>
        <Switch defaultIsChecked colorScheme='light' />
      </Box>
    </ScrollView>
  );
}
