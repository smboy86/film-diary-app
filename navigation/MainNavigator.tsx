import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CheckFilmScreen,
  HistoryScreen,
  HomeScreen,
  ModalScreen,
  NotFoundScreen,
  SettingNotiScreen,
} from '../screens';
import { RootStackParamList } from '../types';

const MainStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        title: '',
        drawerActiveTintColor: '#272727',
        drawerItemStyle: {
          borderColor: '#000',
        },
        drawerStyle: {
          backgroundColor: '#e9e9e9',
          width: 240,
        },
      }}>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          drawerLabel: '대시보드 홈',
        }}
      />
      <Drawer.Screen
        name='History'
        component={HistoryScreen}
        options={{
          drawerLabel: '기록 날짜 확인하기',
        }}
      />
      <Drawer.Screen
        name='CheckFilm'
        component={CheckFilmScreen}
        options={{
          drawerLabel: '현상된 필름',
        }}
      />
      <Drawer.Screen
        name='SettingNoti'
        component={SettingNotiScreen}
        options={{
          drawerLabel: '알람 설정',
        }}
      />
    </Drawer.Navigator>
  );
}

// Main
export default function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='MainDraw'
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: '잘못된 화면입니다.' }}
      />
      <MainStack.Group screenOptions={{ presentation: 'modal' }}>
        <MainStack.Screen name='Modal' component={ModalScreen} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
}
