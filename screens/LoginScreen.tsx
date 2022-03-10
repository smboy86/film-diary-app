import { useState } from 'react';
import { Box, BoxPressable } from '../components/basic';

import { Text } from '../components/Themed';
import { RootLoginStackScreenProps } from '../types';

export default function LoginScreen({
  navigation,
}: RootLoginStackScreenProps<'Login'>) {
  return (
    <Box full center>
      <Text>111</Text>
      <BoxPressable onPress={() => navigation.navigate('Login')}>
        <Text>눌러눌러</Text>
      </BoxPressable>
    </Box>
  );
}
