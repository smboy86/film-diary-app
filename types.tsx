/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { DrawerScreenProps } from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

///
// navigation 구조
/**
 *  Login not  ----- AuthNavigator[Stack]
 *               ㄴ-- MainNavigator[Stack - Draw, Stack, Stack] ----- NotFound[Screen]
 *                                                               ㄴ-- Modal[Screen]
 *                                                               ㄴ-- 메인화면[DrawStack]
 *                                                                      ㄴ-- 홈 [Screen]
 *                                                                      ㄴ-- etc... [Screens ...]
 *
 *
 */

// 1-1. Root - Auth(Stack)
export type RootAuthStackParamList = {
  Login: undefined;
  Join: undefined;
};

// 1-2. Root - Main(Draw + Stack)
export type RootMainStackParamList = {
  MainDraw: NavigatorScreenParams<MainDrawParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

// 1-2-1 Draw
export type MainDrawParamList = {
  Home: undefined;
  History: {
    id: string;
    uid: string;
  };
  CheckFilm: undefined;
  SettingNoti: undefined;
};

// useNavigation 만 쓴다고 하면 필요 없는건가?
// ScreenProp vs RouteProp vs NavigationProp 뭐가 다른가?
// RouteProp -> useRoute 할때 쓰임
// NavigationProp -> useNavigation 에 쓰임
// // 2-1. Root - AuthStack Prop(ScreenProp)
export type RootAuthStackScreenProps<
  Screen extends keyof RootAuthStackParamList
> = NativeStackScreenProps<RootAuthStackParamList, Screen>;

// 2-2-1. Root - Main Prop (ScreenProp)
export type RootMainScreenProps<Screen extends keyof RootMainStackParamList> =
  CompositeScreenProps<
    DrawerScreenProps<RootMainStackParamList, Screen>,
    NativeStackScreenProps<RootMainStackParamList>
  >;

// 2-2-2. Root - Draw (ScreenProp)
// export type MainDrawScreenProps<Screen extends keyof MainDrawParamList> =
//   NativeStackScreenProps<MainDrawParamList, Screen>;
// 2-2-2. Root - Draw (NavigationProp)
export type MainDrawStackNavigateProps<Screen extends keyof MainDrawParamList> =
  NativeStackNavigationProp<MainDrawParamList, Screen>;
// 2-2-3. Root - Draw (RouteProp)
export type MainDrawRouteProps<Screen extends keyof MainDrawParamList> =
  RouteProp<MainDrawParamList, Screen>;

// 999. fin MainStack for useNavigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootMainStackParamList {}
  }
}
