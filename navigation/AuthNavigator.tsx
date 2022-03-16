import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens';
import { RootAuthStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootAuthStackParamList>();

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
