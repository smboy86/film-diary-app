import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
