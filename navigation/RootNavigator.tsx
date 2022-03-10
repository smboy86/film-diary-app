import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ModalScreen, NotFoundScreen } from '../screens';
import { RootStackParamList } from '../types';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  // 로그인 처리
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Root'
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NotFound'
          component={NotFoundScreen}
          options={{ title: '잘못된 화면입니다.' }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name='Modal' component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
