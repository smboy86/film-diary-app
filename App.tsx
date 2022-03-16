import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import RootNavigator from './navigation/RootNavigator';

import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import { extendTheme, NativeBaseProvider } from 'native-base';

// 유의사항
// 선언한 스타일이 Object면 인라인스타일도 Object여야 병합
// 하나는 Array, 다른 하나는 Obejct면 스타일 병합 되지 않음
const DefaultColorTheme = {
  border: '#f4f4f4',
};

const ElementsTheme = {
  Text: {
    style: {
      fontFamily: 'Apple SD Gothic Neo',
      color: '#262626',
      fontSize: 16,
    },
  },
  Button: {
    raised: true,
    type: 'outline',
    titleStyle: {
      color: '#262626',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonStyle: {
      borderColor: DefaultColorTheme.border,
      backgroundColor: '#eeeeee',
    },
    loadingProps: { size: 'small', color: '#000' },
    containerStyle: {
      height: 38,
    },
  },
};

const nativeBaseTheme = extendTheme({
  // colors: {
  //   // Add new color
  //   primary: {
  //     50: '#E3F2F9',
  //     100: '#C5E4F3',
  //     200: '#A2D4EC',
  //     300: '#7AC1E4',
  //     400: '#47A9DA',
  //     500: '#0088CC',
  //     600: '#007AB8',
  //     700: '#006BA1',
  //     800: '#005885',
  //     900: '#003F5E',
  //   },
  //   // Redefinig only one shade, rest of the color will remain same.
  //   amber: {
  //     400: '#d97706',
  //   },
  // },
  // 22.03.15 devpoi - custom Theme
  components: {
    Button: {
      baseStyle: {
        _text: {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
      defaultProps: {
        colorScheme: 'light',
        size: 'lg',
      },
    },
    Input: {
      baseStyle: {
        color: '#000',
        borderColor: '#000',
        _focus: {
          borderColor: '#000',
        },
      },
      defaultProps: {
        variant: 'underlined',
      },
    },
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RecoilRoot>
          <NativeBaseProvider theme={nativeBaseTheme}>
            <RootNavigator />
            <StatusBar />
          </NativeBaseProvider>
        </RecoilRoot>
      </SafeAreaProvider>
    );
  }
}
