import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  CheckFilmScreen,
  HistoryScreen,
  HomeScreen,
  SettingNotiScreen,
} from '../screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#e9e9e9',
          width: 240,
        },
      }}>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: '홈',
        }}
      />
      <Drawer.Screen
        name='History'
        component={HistoryScreen}
        options={{
          title: '기록 날짜 확인하기',
        }}
      />
      <Drawer.Screen
        name='CheckFilm'
        component={CheckFilmScreen}
        options={{
          title: '현상된 필름',
        }}
      />
      <Drawer.Screen
        name='SettingNoti'
        component={SettingNotiScreen}
        options={{
          title: '알람 설정',
        }}
      />
    </Drawer.Navigator>
  );
}
