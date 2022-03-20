import { StatusBar } from 'expo-status-bar';
import { Center, Divider, Skeleton, Text, VStack } from 'native-base';
import { Platform } from 'react-native';
import { Box } from '../components/basic';
import Layout from '../constants/Layout';

export default function ModalMainLoadingScreen() {
  return (
    <Box full center>
      <Text fontWeight={'bold'}>
        누군가의 행복을 바라려면 내가 먼저 행복해야 했다.
      </Text>
      <Box wFull ph={Layout.window.width * 0.3}>
        <Divider thickness={1} bg='#000' mt={2} />
      </Box>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Box>
  );
}
