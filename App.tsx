import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import RootNavigator from './navigation/RootNavigator';

import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';

// 유의사항
// 선언한 스타일이 Object면 인라인스타일도 Object여야 병합
// 하나는 Array, 다른 하나는 Obejct면 스타일 병합 되지 않음
const ElementsTheme = {
  Text: {
    style: {
      fontFamily: 'BodoniSvtyTwoITCTT-Bold',
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
  Button: {
    raised: true,
    titleStyle: {
      color: 'red',
    },
    containerStyle: {
      padding: 20,
    },
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RecoilRoot>
          <ThemeProvider theme={ElementsTheme}>
            {/* <Navigation colorScheme={colorScheme} /> */}
            <RootNavigator />
            <StatusBar />
          </ThemeProvider>
        </RecoilRoot>
      </SafeAreaProvider>
    );
  }
}
