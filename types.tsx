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
// 1. navigation 1차 구조
// 1-1. Root- Stack
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootDrawParamList> | undefined;
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
export type RootDrawParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

// 1-3-1. Draw
export type RootDrawScreenProps<Screen extends keyof RootDrawParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootDrawParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
