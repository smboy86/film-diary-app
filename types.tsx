/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

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

// 1-1. Root
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootMainPmarmList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

// 1-2. Root - Stack
export type RootAuthStackParamList = {
  Root: NavigatorScreenParams<RootMainPmarmList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

// 1-1-1. Stack
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// 1-2. Root - Login
export type RootLoginParamList = {
  Login: undefined;
  Join: undefined;
};

// 1-2-1. Stack
export type RootLoginStackScreenProps<Screen extends keyof RootLoginParamList> =
  NativeStackScreenProps<RootLoginParamList, Screen>;

// 1-3. Root - Draw
export type RootMainPmarmList = {
  Root: undefined;
  NotFound: undefined;
  Modal: undefined;
};

export type RootAuthParamList = {
  Login: undefined;
  Join: undefined;
};

// 1-3-1. Draw
export type RootDrawScreenProps<Screen extends keyof RootMainPmarmList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootMainPmarmList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
